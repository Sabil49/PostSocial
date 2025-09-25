import * as React from 'react';
import { Heatmap } from '@mui/x-charts-pro/Heatmap';
import { HeatmapValueType } from '@mui/x-charts-pro/models';


interface DataMap {
  likes: number;
  replies: number;
  retweets: number;
}

const data: DataMap = {
  likes: 11.48,
  replies: 0.65,
  retweets: 0.52,
};

interface HeatmapPoint {
  x: string;
  y: number;
  value: number;
  meta: { metric: string };
}

const heatmapData: HeatmapPoint[] = [];
 for (const [key, value] of Object.entries(data)) {
  const valueObj = data[value as keyof DataMap];
  heatmapData.push({
      x: key,
      y: 0,
      value: valueObj || 0,
      meta: { metric: key },
    });
  }

export default function EngagementHeatmap() {
  return (
    <Heatmap
      width={500}
      height={200}
      series={[{ data: heatmapData as unknown as HeatmapValueType[] }]}
      xAxis={[{ data: Object.keys(data), scaleType: "band", label: "Metrics" }]}
      yAxis={[{ data: ["Engagement"], scaleType: "band" }]}
      // Removed invalid colorAxis prop. Use 'colors' prop if color customization is needed.
    />
  );
}



