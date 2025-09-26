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
const parseObj = JSON.parse(JSON.stringify(data));
interface HeatmapPoint {
  x: string;
  y: number;
  value: number;
  meta: { metric: string };
}

const heatmapData: HeatmapPoint[] = [
  { x: 'likes', y: 0, value: parseObj.likes || 0, meta: { metric: 'likes' } },
  { x: 'replies', y: 0, value: parseObj.replies || 0, meta: { metric: 'replies' } },
  { x: 'retweets', y: 0, value: parseObj.retweets || 0, meta: { metric: 'retweets' } },
];
//  for (const [key, value] of Object.entries(parseObj)) {
//   const valueObj = parseObj[value as keyof DataMap];
//   heatmapData.push({
//       x: key,
//       y: 0,
//       value: valueObj || 0,
//       meta: { metric: key },
//     });
//   }

export default function EngagementHeatmap() {
  return (
    <Heatmap
      width={500}
      height={200}
      series={[{
       data: [
          [11.48, 0.65, 0.52], // values aligned with xAxis
        ],
  }]}
  xAxis={[{ data: ['likes', 'replies', 'retweets'], scaleType: "band" }]}
  yAxis={[{ data: ["Engagement"], scaleType: "band" }]}
      // Removed invalid colorAxis prop. Use 'colors' prop if color customization is needed.
    />
  );
}



