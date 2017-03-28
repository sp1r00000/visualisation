/* eslint-env mocha */
import { assert } from 'chai';

import parsePriceUpdated from './parsePriceUpdated.js';


describe('utils/parsePriceUpdated', () => {
  it('works', () => {
    const data = '0x0000000000000000000000000000000000000000000000000000000058d2ac8800000000000000000000000000000000000000000000000000000000003a7775';
    const result = parsePriceUpdated(data);

    assert.equal(result.atTimestamp.getTime(), 1490201736 * 1000);
    assert.equal(result.ofPrice, 3831669);
  });
});
