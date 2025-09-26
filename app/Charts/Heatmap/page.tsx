import * as React from "react";
import { Heatmap } from "@mui/x-charts-pro/Heatmap";
import { HeatmapValueType } from "@mui/x-charts-pro/models";

interface SentimentAnalysis {
  positive_percentage: number;
  neutral_percentage: number;
  negative_percentage: number;
}

export default function SentimentHeatmap(): React.ReactElement {
  const sentimentData: SentimentAnalysis = {
    positive_percentage: 60,
    neutral_percentage: 30,
    negative_percentage: 10,
  };

  const heatmapData = [
    [sentimentData.positive_percentage, sentimentData.neutral_percentage, sentimentData.negative_percentage],
  ];

  return (
    <Heatmap
      width={500}
      height={200}
      series={[
        {
          data: heatmapData as unknown as HeatmapValueType[],
        },
      ]}
      xAxis={[
        { data: ["Positive", "Neutral", "Negative"], scaleType: "band", label: "Sentiment" },
      ]}
      yAxis={[{ data: ["Tweets"], scaleType: "band" }]}
    />
  );
}
