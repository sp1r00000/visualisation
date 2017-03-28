import Web3 from 'web3';
import parsePriceUpdated from './parsePriceUpdated.js';

const web3 = new Web3(new Web3.providers.HttpProvider('https://kovan.melonport.com'));


export default callback => web3.eth.filter({
  address: '0x81926cfbf418f7c5a9f024142818f6b7f75887f8',
  fromBlock: 0,
  toBlock: 'latest',
}).get((err, result) => {
  callback(err, result.map(r => parsePriceUpdated(r.data)));
});
