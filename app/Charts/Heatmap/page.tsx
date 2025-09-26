import * as React from 'react';
import Box from '@mui/material/Box';
import { Heatmap } from '@mui/x-charts-pro/Heatmap';
import { data } from './heatmapData';

export default function BasicHeatmap() {
  return (
    <Box sx={{ width: '100%', maxWidth: 400 }}>
      <Heatmap
          xAxis={[{ data: ['likes', 'replies', 'retweets'], scaleType: "band" }]}
          yAxis={[{ data: ["Engagement"], scaleType: "band" }]}
        series={[{  data: [
          [11.48, 0.65, 0.52], // values aligned with xAxis
        ], }]}
        height={310}
      />
    </Box>
  );
}