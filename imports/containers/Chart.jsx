import { connect } from 'react-redux';

import Chart from '../components/Chart.jsx';


const mapStateToProps = (state, ownProps) => ({
  ...state,
  ...ownProps,
});

const ChartConnected = connect(mapStateToProps)(Chart);


export default ChartConnected;
