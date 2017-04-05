import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Chart from '../containers/Chart.jsx';
import { reducer, actionCreators } from '../actions/Chart.js';

import watchEvents from '../utils/watchEvents.js';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

Meteor.startup(() => {
  render(
    <Provider store={store}>
      <Chart />
    </Provider>,
    document.getElementById('react-root'));

  watchEvents((err, priceEntry) => store.dispatch(actionCreators.addPriceEntry(priceEntry)));
});
