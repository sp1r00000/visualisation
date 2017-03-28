/* eslint-env mocha */
import { assert } from 'chai';

import getEvents from './getEvents.js';


describe('utils/getEvents', () => {
  it('gets some events', (done) => {
    getEvents((err, formatted) => {
      formatted.forEach(i =>
        assert.property(i, 'atTimestamp') &&
        assert.property(i, 'ofPrice'),
      );
      done(err);
    });
  });
});
