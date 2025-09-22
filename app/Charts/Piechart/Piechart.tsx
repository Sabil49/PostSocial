'use client';
import { PieChart } from '@mui/x-charts/PieChart';
import { desktopOS, valueFormatter } from './webUsageStats';

export default function Piechart() {
  return (
    <div>
      <h2>Desktop Operating System Market Share</h2>    
      <PieChart
      series={[
        {
          data: desktopOS,
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          valueFormatter,
        },
      ]}
      height={200}
      width={200}
    />
    </div>
  );
}
