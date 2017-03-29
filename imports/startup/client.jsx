import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Chart from '../containers/Chart.jsx';
import { reducer } from '../actions/Chart.js';


const store = createStore(reducer);

Meteor.startup(() => {
  render(
    <Provider store={store}>
      <Chart />
    </Provider>,
    document.getElementById('react-root'));
});
