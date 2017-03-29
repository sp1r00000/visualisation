import React from 'react';
import { VictoryChart, VictoryLine } from 'victory';

const Chart = props => (
  <div>
    <VictoryChart width={1000} height={400} scale={{ x: 'time' }} style={{}}>
      <VictoryLine
        style={{
          data: { stroke: 'tomato' },
        }}
        data={props.priceList}
        x="atTimestamp"
        y="ofPrice"
      />
    </VictoryChart>
  </div>
);

Chart.propTypes = {
  priceList: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      atTimestamp: React.PropTypes.objectOf(Date),
      ofPrice: React.PropTypes.number,
    }),
  ).isRequired,
};


export default Chart;
