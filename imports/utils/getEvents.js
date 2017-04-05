import Web3 from 'web3';
import parsePriceUpdated from './parsePriceUpdated.js';

const web3 = new Web3(new Web3.providers.HttpProvider('https://kovan.melonport.com'));


export const abi = [{
  name: 'PriceUpdated',
  type: 'event',
  inputs: [
    { type: 'address', name: 'ofAsset', indexed: true },
    { type: 'uint256', name: 'atTimestamp', indexed: false },
    { type: 'uint256', name: 'ofPrice', indexed: false },
  ],
}];

const PriceFeedContract = web3.eth.contract(abi);
const oraclizeInstance = PriceFeedContract.at('0xC5df162BD06D7D6bD63Dac5bEeED49658D05A1AC');
const priceUpdatedFeed = oraclizeInstance.PriceUpdated({
  // '0xc151b622fded233111155ec273bfaf2882f13703',
}, { fromBlock: 0, toBlock: 'latest' });

priceUpdatedFeed.get((err, log) => {
  /*
    Debug info: This just returns atTimestamp and ofPrice as undefined. I don't know why;
  */
  console.log(
    log.slice(1, 10).map(e => e.args),
  );
});

/*
possible assets:

log.map(e => e.args.ofAsset).reduce((consolidator, current) => {
  if (!consolidator.includes(current)) consolidator.push(current);
  return consolidator;
}, [])

https://kovan.etherscan.io/address/0xc151b622fded233111155ec273bfaf2882f13703#code EuroToken
https://kovan.etherscan.io/address/0x9e4c56a633dd64a2662bdfa69de4fde33ce01bdd#code BitcoinToken
https://kovan.etherscan.io/address/0xf61b8003637e5d5dbb9ca8d799ab54e5082cbdbc#code RepToken
https://kovan.etherscan.io/address/0x4dffea52b0b4b48c71385ae25de41ce6ad0dd5a7#code MelonToken
*/

/*
  TODO: Better filter:
  http://ethereum.stackexchange.com/questions/1381/how-do-i-parse-the-transaction-receipt-log-with-web3-js?lq=1
  http://ethereum.stackexchange.com/questions/2024/how-to-access-event-log-by-knowing-the-contract-address-web3
*/
console.log(web3.sha3('PriceUpdated(address,uint256,uint256)'));

export default (
  callback,
  address = '0xC5df162BD06D7D6bD63Dac5bEeED49658D05A1AC',
) => web3.eth.filter({
  address,
  fromBlock: 0,
  toBlock: 'latest',
  topics: [
    web3.sha3('PriceUpdated(address,uint256,uint256)'),
    '0x000000000000000000000000c151b622fded233111155ec273bfaf2882f13703',
  ],
}).get((err, result) => {
  console.log(result.slice(0, 10).map(e => e.topics[1]));
  callback(err, result.map(r => parsePriceUpdated(r.data)));
});
