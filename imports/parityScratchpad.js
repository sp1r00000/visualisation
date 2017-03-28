/* eslint-disable */
import EthApi from 'ethapi-js';

import Web3 from 'web3';


const web3 = new Web3(new Web3.providers.HttpProvider('https://kovan.melonport.com'));

// do the setup
const transport = new EthApi.Transport.Http('https://kovan.melonport.com');
const ethapi = new EthApi(transport);



// console.log(web3);


// https://github.com/melonproject/protocol/blob/master/contracts/datafeeds/PriceFeedProtocol.sol
// https://github.com/oraclize/melonport/blob/14e68f2c298c7f27f6caca1aeb7d0c138366866b/pricefeed/PriceFeed.sol
const abi = [{
  name: 'PriceUpdated',
  type: 'event',
  inputs: [
    { type: 'address', name: 'ofAsset', indexed: true },
    { type: 'uint', name: 'atTimestamp' },
    { type: 'uint', name: 'ofPrice' },
  ],
  /*outputs: [
    { type: 'uint', name: 'atTimestamp' },
    { type: 'unit', name: 'ofPrice' },
  ],*/
}];


const MyContract = web3.eth.contract(abi);
const myContractInstance = MyContract.at('0x81926cfbf418f7c5a9f024142818f6b7f75887f8');

// console.log(MyContract, myContractInstance, myContractInstance.PriceUpdated);

const myEvent = myContractInstance.PriceUpdated(null, { fromBlock: 0, toBlock: 'latest' }); // , (err, res) => console.log(err, res)); // {}, // null, { fromBlock: 0, toBlock: 'latest' }

// console.log(myEvent, myContractInstance);

/*myEvent.watch((error, result) => {
   console.log(error, result);
});
*/

// console.log(myEvent);

myEvent.get((err, log) => console.log(err, log));

/*
myContractInstance.allEvents([], (err, log) => {
  console.log(err, log);
});
*/

// TODO: Better filter: http://ethereum.stackexchange.com/questions/1381/how-do-i-parse-the-transaction-receipt-log-with-web3-js?lq=1
// http://ethereum.stackexchange.com/questions/2024/how-to-access-event-log-by-knowing-the-contract-address-web3
web3.eth.filter({
  address: '0x81926cfbf418f7c5a9f024142818f6b7f75887f8',
  fromBlock: 0,
  toBlock: 'latest',
}).get((err, result) => {
  // console.log(err, result[0]);

  const data = result[0].data.slice(2);
  const atTimestamp = new Date(parseInt(data.slice(0, 64), 16) * 1000);
  const ofPrice = parseInt(data.slice(65), 16);

  console.log(atTimestamp, ofPrice);
});

// const contract = new ethapi.newContract(abi); //.at(0x81926cfbf418f7c5a9f024142818f6b7f75887f8);

// console.log(contract);
