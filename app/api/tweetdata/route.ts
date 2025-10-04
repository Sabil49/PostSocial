import {
    NextResponse
} from 'next/server';
import {
    GoogleGenAI,
    Type
} from "@google/genai";
import {
    cookies
} from 'next/headers';
//import tweetData from '@/utils/tweetData.json';

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GEMINI_API_KEY || ""
});

export async function GET() {
    try {
        const cookieStore = await cookies();
        const accessToken = cookieStore.get('accessToken') ?.value; // Using optional chaining for safety
        if (!accessToken) {
            return new Response(JSON.stringify({
                error: 'Token not found. Please login first.'
            }), {
                status: 401,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        console.log('Access Token:', accessToken); // Debugging line to check the token value
        const response = await fetch('https://api.x.com/2/users/me', {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        });
        console.log('Twitter API Response Status:', response.status); // Debugging line to check response status

        if (response.status === 429) {
            const resetHeader = response.headers.get("x-rate-limit-reset");
            if (resetHeader !== null) {
                const resetTimestamp = parseInt(resetHeader) * 1000; // convert seconds → ms
                const resetTime = new Date(resetTimestamp);
              
                const currentTime = new Date();
                const diffMs = resetTime.getTime() - currentTime.getTime(); // difference in ms
              
                // Convert difference
                const diffMinutes = diffMs / (1000 * 60);
                const diffHours = diffMs / (1000 * 60 * 60);
              
                // Format values
                const remainingHours = Math.floor(diffHours);
                const remainingMinutes = Math.round(diffMinutes % 60);
              
                console.log(`Rate limit resets in ${remainingHours}h ${remainingMinutes}m`);
                return new Response(JSON.stringify({
                    error: `Please try again after ${resetTime.toLocaleTimeString()}.`
                }), {
                    status: 429,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                } else {
                return new Response(JSON.stringify({
                    error: 'Please try again later.'
                }), {   
                    status: 429,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }); 
          }
        }
        if (!response.ok) {
            return new Response(
                JSON.stringify({
                    error: 'Failed to fetch user data from Twitter'
                }), {
                    status: response.status,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
        }
        const userData = await response.json();
        console.log('User Data:', userData); // Debugging line to check the user data
        if (!userData.data || !userData.data.id) {
            return new Response(JSON.stringify({
                error: 'User account ID not found'
            }), {
                status: userData.status,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        const twitterResponse = await fetch(`https://api.x.com/2/users/${userData.data.id}/tweets?max_results=10&expansions=author_id,referenced_tweets.id,attachments.media_keys&tweet.fields=created_at,public_metrics,entities,source&user.fields=username,name,profile_image_url&media.fields=url`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        console.log('Twitter Tweets API Response Status:', twitterResponse.status); // Debugging line to check response status
        if (twitterResponse.status === 429) {
            const resetHeader = twitterResponse.headers.get("x-rate-limit-reset");

            if (resetHeader !== null) {
                const resetTimestamp = parseInt(resetHeader) * 1000; // Convert seconds → ms
                const resetTime = new Date(resetTimestamp);

                const currentTime = new Date();
                const diffMs = resetTime.getTime() - currentTime.getTime(); // Time difference in ms

                // Convert milliseconds → minutes
                const diffMinutes = diffMs / (1000 * 60);
                const remainingMinutes = Math.max(0, Math.round(diffMinutes)); // avoid negative values
                
                return new Response(JSON.stringify({
                  error: `Please try again in ${remainingMinutes} minutes.`
                }), {   
                  status: 429,
                  headers: {
                    'Content-Type': 'application/json'
                }
            });                
        } else {
            return new Response(JSON.stringify({
                error: 'Please try again later.'
            }), {
                status: 429,
                headers: {
                        'Content-Type': 'application/json'
                    }
                });
            }
        }
        if (!twitterResponse.ok) {
            console.log('Error fetching tweet data from Twitter:', twitterResponse.statusText);
            return new Response(JSON.stringify({
                error: `Failed to fetch tweet data from Twitter: ${twitterResponse.statusText}`
            }), {
                status: twitterResponse.status,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        const tweetData = await twitterResponse.json();
        if (!tweetData || tweetData.errors || tweetData.errors.length > 0 || !tweetData.data) {
            return new Response(JSON.stringify({
                error: 'User account data not found'
            }), {
                status: twitterResponse.status,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        const tweetDataArray = tweetData.data;

        const GeminiResponse = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: "Analyze the following 'text' field data as tweets and return JSON data(No pre text, No after text and No special characters) for chart insights: " + JSON.stringify(tweetDataArray),
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        sentiment_percentage: {
                            type: Type.OBJECT,
                            properties: {
                                title: {
                                    type: Type.STRING
                                },
                                data: {
                                    type: Type.ARRAY,
                                    items: {
                                        type: Type.OBJECT,
                                        properties: {
                                            label: {
                                                type: Type.STRING
                                            },
                                            value: {
                                                type: Type.NUMBER
                                            },
                                        },
                                        propertyOrdering: ["label", "value"],
                                    },
                                },
                            },
                            propertyOrdering: ["title", "data"]
                        },
                        histogram_data: {
                            type: Type.OBJECT,
                            properties: {
                                title: {
                                    type: Type.STRING
                                },
                                data: {
                                    type: Type.ARRAY,
                                    items: {
                                        type: Type.OBJECT,
                                        properties: {
                                            score_range: {
                                                type: Type.STRING
                                            },
                                            count: {
                                                type: Type.NUMBER
                                            },
                                        },
                                        propertyOrdering: ["score_range", "count"],
                                    },
                                },
                            },
                            propertyOrdering: ["title", "data"]
                        },
                        scatterplot_data: {
                            type: Type.OBJECT,
                            properties: {
                                title: {
                                    type: Type.STRING
                                },
                                data: {
                                    type: Type.ARRAY,
                                    items: {
                                        type: Type.OBJECT,
                                        properties: {
                                            tweet_id: {
                                                type: Type.STRING
                                            },
                                            sentiment_score: {
                                                type: Type.NUMBER
                                            },
                                            likes: {
                                                type: Type.INTEGER
                                            },
                                            retweets: {
                                                type: Type.INTEGER
                                            },
                                            replies: {
                                                type: Type.INTEGER
                                            }
                                        },
                                        propertyOrdering: ["tweet_id", "sentiment_score", "likes", "retweets", "replies"]
                                    }
                                }
                            },
                            propertyOrdering: ["title", "data"]
                        },
                        word_cloud: {
                            type: Type.OBJECT,
                            properties: {
                                title: {
                                    type: Type.STRING
                                },
                                data: {
                                    type: Type.OBJECT,
                                    properties: {
                                        positive_words: {
                                            type: Type.ARRAY,
                                            items: {
                                                type: Type.STRING
                                            },
                                        },
                                        neutral_words: {
                                            type: Type.ARRAY,
                                            items: {
                                                type: Type.STRING
                                            },
                                        },
                                        negative_words: {
                                            type: Type.ARRAY,
                                            items: {
                                                type: Type.STRING
                                            },
                                        },
                                    },
                                    propertyOrdering: ["positive_words", "neutral_words", "negative_words"],

                                },
                            },
                            propertyOrdering: ["title", "data"]
                        },
                        interpretations: {
                            type: Type.OBJECT,
                            properties: {
                                key_insights: {
                                    type: Type.ARRAY,
                                    items: {
                                        type: Type.STRING
                                    },
                                },
                                overall_insights: {
                                    type: Type.ARRAY,
                                    items: {
                                        type: Type.STRING
                                    },
                                },
                            },
                            propertyOrdering: ["key_insights", "overall_insights"],
                        },
                    },
                    propertyOrdering: [
                        "sentiment_percentage",
                        "histogram_data",
                        "scatterplot_data",
                        "word_cloud",
                        "interpretations",
                    ],
                },
            },
        });
        // Access the generated content from GeminiResponse
        const GeminiResponseData = GeminiResponse.text;
        if (!GeminiResponseData) {
            return new Response(JSON.stringify({
                error: 'Failed to generate content'
            }), {
                status: 500,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        const GeminiResponseDataStr = JSON.stringify(GeminiResponseData);
        const encodedJson = Buffer.from(GeminiResponseDataStr).toString("base64");

        // Return the generated content as JSON
        // const GeminiResponseString = JSON.stringify(GeminiResponseData);
        // const GeminiResponseStringEncoded = encodeURIComponent(GeminiResponseString);

        //const responseRedirect = NextResponse.redirect(new URL('/Gemini?data=' + encodedJson, req.url));
        // responseRedirect.cookies.set('Geminidata', JSON.stringify(GeminiResponseData), { httpOnly: true, secure: true });
        // responseRedirect.cookies.set('twitterData', JSON.stringify(tweetData), { httpOnly: true, secure: true });

        // return responseRedirect;
        return NextResponse.json({
            geminiData: encodedJson,
            message: 'Analysis has been completed successfully.',
            status: 200,
            'content-type': 'application/json'
        });
    } catch (error: unknown) {
        return NextResponse.json({
            error: {
                message: (error as Error) ?.message || "Something went wrong. Please try again later.",
                code: (error as {
                    code ? : number
                }) ?.code || 500,
                status: (error as {
                    status ? : string
                }) ?.status || "INTERNAL_ERROR",
            },
        }, {
            status: (error as {
                statusCode ? : number
            }) ?.statusCode || 503,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

}