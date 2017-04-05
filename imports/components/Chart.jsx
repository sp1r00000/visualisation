import React from 'react';
import { VictoryChart, VictoryLine } from 'victory';
import theme from '../style/theme.js';


const Chart = props => (
  <div style={{ padding: 20 }}>
    <img
      alt="logo"
      style={{ width: 100 }}
      src="https://github.com/melonproject/branding/raw/master/Melonport%20logo%20print%20white%20on%20blue%202.png"
    />
    <VictoryChart
      width={1000}
      height={400}
      scale={{ x: 'time' }}
      theme={theme}
      tickFormat={tick => console.log(tick)}
      padding={100}
    >
      <VictoryLine
        style={{
          data: { stroke: '#ffffff' },
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
