import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import Chart from '../containers/Chart.jsx';
import { reducer, actions, actionCreators } from '../actions/Chart.js';

import watchEvents from '../utils/watchEvents.js';


const watchMiddleware = store => next => (action) => {
  switch (action.type) {
    case actions.SELECT_ASSET:
      watchEvents(
        (err, priceEntry) => store.dispatch(actionCreators.addPriceEntry(priceEntry)),
        store.getState().currentAsset,
      );
      break;
    default:
  }

  return next(action);
};

const store = createStore(
  reducer,
  compose(
    applyMiddleware(watchMiddleware),
/* eslint-disable no-underscore-dangle */
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
/* eslint-enable */
  ),
);

Meteor.startup(() => {
  render(
    <Provider store={store}>
      <Chart />
    </Provider>,
    document.getElementById('react-root'));

  store.dispatch(actionCreators.selectAsset('EuroToken'));
});
