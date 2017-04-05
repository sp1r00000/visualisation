/* eslint-disable */
// import EthApi from 'ethapi-js';
import Web3 from 'web3';

const web3 = new Web3(new Web3.providers.HttpProvider('https://kovan.melonport.com'));

// https://github.com/melonproject/protocol/blob/master/contracts/datafeeds/PriceFeedProtocol.sol
// https://github.com/oraclize/melonport/blob/14e68f2c298c7f27f6caca1aeb7d0c138366866b/pricefeed/PriceFeed.sol
const abi = [{
  name: 'PriceUpdated',
  type: 'event',
  inputs: [
    { type: 'address', name: 'ofAsset', indexed: true },
    { type: 'uint256', name: 'atTimestamp' },
    { type: 'uint256', name: 'ofPrice' },
  ],
  /*outputs: [
    { type: 'uint', name: 'atTimestamp' },
    { type: 'unit', name: 'ofPrice' },
  ],*/
}];


const MyContract = web3.eth.contract(abi);
const myContractInstance = MyContract.at('0x7a8e350a22deeedb8aaafc206998fac7e673b33b');

// console.log(MyContract, myContractInstance, myContractInstance.PriceUpdated);

const myEvent = myContractInstance.PriceUpdated(null, { fromBlock: 0, toBlock: 'latest' }); // , (err, res) => console.log(err, res)); // {}, // null, { fromBlock: 0, toBlock: 'latest' }

// console.log(myEvent, myContractInstance);

/*myEvent.watch((error, result) => {
   console.log(error, result);
});
*/

// console.log(myEvent);

myEvent.get((err, log) => console.log(err, log));

myContractInstance.allEvents([], (err, log) => {
  console.log(err, log);
});



web3.eth.filter({
  address: '0x7a8e350a22deeedb8aaafc206998fac7e673b33b',
  fromBlock: 0,
  toBlock: 'latest',
}).get((err, result) => {
  // console.log(err, result[0]);

  const data = result[0].data.slice(2);
  const atTimestamp = new Date(parseInt(data.slice(0, 64), 16) * 1000);
  const ofPrice = parseInt(data.slice(65), 16);

  console.log(atTimestamp, ofPrice);
});

// const contract = new ethapi.newContract(abi); //.at(0x7a8e350a22deeedb8aaafc206998fac7e673b33b);

// console.log(contract);
