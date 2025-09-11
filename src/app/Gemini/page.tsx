
type Props = {
      searchParams: Promise<{ [key: string]: string | string[] | undefined; }>;
    };
export default async function Responsedata({ searchParams }: Props) {

    // Example for Next.js Server Components

    const resolvedSearchParams = await searchParams;
    const Geminidata = resolvedSearchParams.data;
    const GeminidataStr =
      typeof Geminidata === 'string'
        ? Geminidata
        : Array.isArray(Geminidata)
        ? Geminidata[0] || ''
        : '';
    const GeminidataDecoded = decodeURIComponent(GeminidataStr);
    const GeminidataParsed = JSON.parse(GeminidataDecoded || '{}');
    console.log('GeminidataDecoded:');
    console.log(GeminidataDecoded);
    console.log('Geminidata:');
    console.log(JSON.parse(JSON.stringify(Geminidata)));
      return (
        <div>
           {
            GeminidataParsed.sentiment_summary ? GeminidataParsed.sentiment_summary : 'Loading...'
          } 
        </div>
      );
    }