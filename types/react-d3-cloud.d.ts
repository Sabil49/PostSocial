// types/react-d3-cloud.d.ts
import * as React from "react";

export interface Word {
  text: string;
  value: number;
}

export interface WordCloudProps {
  data: Word[];
  font?: string;
  fontSize?: (word: Word) => number;
  rotate?: (word: Word) => number;
  padding?: number;
  fill?: (word: Word) => string;
  width?: number;
  height?: number;
}

declare const WordCloud: React.FC<WordCloudProps>;
export default WordCloud;
