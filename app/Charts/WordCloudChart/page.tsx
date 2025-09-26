"use client";

import React,{JSX} from "react";
import dynamic from "next/dynamic";

const WordCloud = dynamic(() => import("react-d3-cloud"), { ssr: false });

interface WordCloudData {
  positive_words: string[];
  neutral_words: string[];
  negative_words: string[];
}

const wordCloud: WordCloudData = {
  positive_words: [
    "wins",
    "ideas",
    "productive",
    "recharge",
    "grateful",
    "starts",
    "hard work",
    "creativity",
    "calm",
    "soul",
    "hustle",
    "results",
    "growth",
    "vibe",
    "clarity",
    "peace",
    "opportunities",
  ],
  neutral_words: ["consistency", "teaches", "heavy", "doubt"],
  negative_words: [],
};

// Transform words into { text, value, sentiment }
const words = [
  ...wordCloud.positive_words.map((w) => ({ text: w, value: 30, sentiment: "positive" })),
  ...wordCloud.neutral_words.map((w) => ({ text: w, value: 15, sentiment: "neutral" })),
  ...wordCloud.negative_words.map((w) => ({ text: w, value: 10, sentiment: "negative" })),
];

const fontSizeMapper = (word: { value: number }) => word.value;
const rotate = () => (Math.random() > 0.5 ? 0 : 90);
const colorMapper = (word: { sentiment: string }) => {
  if (word.sentiment === "positive") return "#22c55e"; // green
  if (word.sentiment === "negative") return "#ef4444"; // red
  return "#6b7280"; // gray for neutral
};

export default function TweetWordCloud(): JSX.Element {
  return (
    <div className="w-full flex justify-center">
      <WordCloud
        data={words}
        font="Impact"
        fontSize={fontSizeMapper}
        rotate={rotate}
        padding={2}
        fill={colorMapper}
        width={600}
        height={400}
      />
    </div>
  );
}
