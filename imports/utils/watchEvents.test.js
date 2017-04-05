/* eslint-env mocha */
import { assert } from 'chai';

import watchEvents from './watchEvents.js';


describe('utils/watchEvents', () => {
  it('gets some events', (done) => {
    let firstChecked = false;
    watchEvents((err, formatted) => {
      assert.property(formatted, 'atTimestamp');
      assert.property(formatted, 'ofPrice');
      if (!firstChecked) {
        firstChecked = true;
        done(err);
      }
    });
  });
});
