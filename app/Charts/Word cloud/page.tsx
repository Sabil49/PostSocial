// components/TweetWordCloud.tsx
"use client";

import dynamic from "next/dynamic";
import React, { JSX } from "react";

const WordCloud = dynamic(() => import("react-wordcloud"), { ssr: false });

interface WordData {
  text: string;
  value: number;
}

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

// Convert your words into { text, value }
const words: WordData[] = [
  ...wordCloud.positive_words.map((w) => ({ text: w, value: 30 })),
  ...wordCloud.neutral_words.map((w) => ({ text: w, value: 15 })),
  ...wordCloud.negative_words.map((w) => ({ text: w, value: 10 })),
];

const options = {
  rotations: 2,
  rotationAngles: [-90, 0] as [number, number],
  fontSizes: [15, 60] as [number, number],
};

export default function TweetWordCloud(): JSX.Element {
  return <WordCloud words={words} options={options} />;
}
