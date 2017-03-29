import Web3 from 'web3';
import parsePriceUpdated from './parsePriceUpdated.js';

const web3 = new Web3(new Web3.providers.HttpProvider('https://kovan.melonport.com'));


/*
  TODO: Better filter:
  http://ethereum.stackexchange.com/questions/1381/how-do-i-parse-the-transaction-receipt-log-with-web3-js?lq=1
  http://ethereum.stackexchange.com/questions/2024/how-to-access-event-log-by-knowing-the-contract-address-web3
*/
export default (
  callback,
  address = '0x7a8e350a22deeedb8aaafc206998fac7e673b33b',
) => web3.eth.filter({
  address,
  fromBlock: 0,
  toBlock: 'latest',
}).get((err, result) => {
  callback(err, result.map(r => parsePriceUpdated(r.data)));
});
