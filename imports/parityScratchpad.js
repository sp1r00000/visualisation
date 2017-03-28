import EthApi from 'ethapi-js';

import Web3 from 'web3';


const web3 = new Web3(new Web3.providers.HttpProvider("https://kovan.melonport.com"));

// do the setup
const transport = new EthApi.Transport.Http('https://kovan.melonport.com');
const ethapi = new EthApi(transport);



// console.log(web3);



const abi = [{
  name: 'PriceUpdated',
  type: 'event',
  inputs: [
    { type: 'address', name: 'ofAsset', indexed: true },
    { type: 'uint', name: 'atTimestamp' },
    { type: 'unit', name: 'ofPrice' },
  ],
}];


const MyContract = web3.eth.contract(abi);
const myContractInstance = MyContract.at('0x81926cfbf418f7c5a9f024142818f6b7f75887f8');

// console.log(MyContract, myContractInstance, myContractInstance.PriceUpdated);

const myEvent = myContractInstance.PriceUpdated(null, { fromBlock: 0, toBlock: 'latest' }); // {},

console.log(myEvent);

myEvent.watch((error, result) => {
   console.log(error, result);
});

myEvent.get((err, log) => console.log(err, log));


myContractInstance.allEvents([], (err, log) => {
  console.log(err, log);
});


web3.eth.filter({
  address: '0x81926cfbf418f7c5a9f024142818f6b7f75887f8',
  fromBlock: 0,
  toBlock: 'latest',
}).get((err, result) => {
  console.log(err, result);
});

// const contract = new ethapi.newContract(abi); //.at(0x81926cfbf418f7c5a9f024142818f6b7f75887f8);

// console.log(contract);
