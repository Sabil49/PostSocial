import * as React from 'react';
import { interpolateBlues } from 'd3-scale-chromatic';
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
  x: number;
  y: number;
  value: number;
  meta: { metric: string };
}

const heatmapData= Object.entries(data).map(
  ([metric, value], index) => ({
    x: index,
    y: 0, // single row
    value,
    meta: { metric },
  })
);

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



