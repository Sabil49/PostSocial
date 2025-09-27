"use client";

import React from "react";
import dynamic from "next/dynamic";
import type { Word } from "react-d3-cloud"; // Now works, thanks to d.ts


const WordCloud = dynamic(() => import("react-d3-cloud"), { ssr: false });

type Sentiment = "positive" | "neutral" | "negative";

interface CloudWord extends Word {
  sentiment: Sentiment;
}

interface wordcloudDataTypes {
  wordcloudData:{
      positive_words: string[];
      neutral_words: string[];
      negative_words: string[];
  },
  wordcloudTitle: string;
};

export const TweetWordCloud: React.FC<wordcloudDataTypes> = ({ wordcloudData,wordcloudTitle }) => {
  
  const { positive_words = [], neutral_words = [], negative_words = [] } =
    wordcloudData;

  const words: CloudWord[] = [
    ...positive_words.map((w): CloudWord => ({
      text: w,
      value: 30,
      sentiment: "positive",
    })),
    ...neutral_words.map((w): CloudWord => ({
      text: w,
      value: 15,
      sentiment: "neutral",
    })),
    ...negative_words.map((w): CloudWord => ({
      text: w,
      value: 10,
      sentiment: "negative",
    })),
  ];

  // Library mappers use base Word
  const fontSizeMapper = (word: Word) => word.value;
  const rotate = () => (Math.random() > 0.5 ? 0 : 90);

  // For color we cast to CloudWord to access sentiment
  const colorMapper = (word: Word) => {
    const cw = word as CloudWord;
    switch (cw.sentiment) {
      case "positive":
        return "#22c55e";
      case "negative":
        return "#ef4444";
      default:
        return "#6b7280";
    }
  };

  return (
    <div className="w-full flex justify-center">
      <h2 className="text-2xl font-bold mb-4 text-center">{wordcloudTitle}</h2>
      <WordCloud
        data={words}
        font="Impact"
        fontSize={fontSizeMapper}
        rotate={rotate}
        padding={2}
        fill={colorMapper}
        width={500}
        height={300}
      />
    </div>
  );
}
