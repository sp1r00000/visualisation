import React from 'react';
import { VictoryChart, VictoryLine } from 'victory';

const Chart = () => (
  <div>
    <h1>Hello Chart</h1>
    <VictoryChart width={1000} height={400} scale={{ x: 'time' }} style={{}}>
      <VictoryLine
        style={{
          data: { stroke: 'tomato' },
        }}
        data={[
          { x: new Date(1982, 1, 1), y: 125 },
          { x: new Date(1987, 1, 1), y: 257 },
          { x: new Date(1993, 1, 1), y: 345 },
          { x: new Date(1997, 1, 1), y: 515 },
          { x: new Date(2001, 1, 1), y: 132 },
          { x: new Date(2005, 1, 1), y: 305 },
          { x: new Date(2011, 1, 1), y: 270 },
          { x: new Date(2015, 1, 1), y: 470 },
        ]}
      />

    </VictoryChart>
  </div>
);


export default Chart;
