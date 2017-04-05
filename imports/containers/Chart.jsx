import { connect } from 'react-redux';

import Chart from '../components/Chart.jsx';
import { actionCreators } from '../actions/Chart.js';


const mapStateToProps = (state, ownProps) => ({
  ...state,
  ...ownProps,
});

const mapDispatchToProps = dispatch => ({
  onChangeAssetType: event => dispatch(actionCreators.selectAsset(event.target.value)),
});

const ChartConnected = connect(mapStateToProps, mapDispatchToProps)(Chart);


export default ChartConnected;
