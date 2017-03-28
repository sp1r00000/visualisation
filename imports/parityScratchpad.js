// import the actual EthApi class
import EthApi from 'ethapi-js';

// do the setup
const transport = new EthApi.Transport.Http('https://kovan.melonport.com');
const ethapi = new EthApi(transport);

console.log(ethapi);

ethapi.eth
  .coinbase()
  .then((coinbase) => {
    console.log(`The coinbase is ${coinbase}`);
  });

const abi = [{
  name: 'PriceUpdated',
  inputs: [
    { type: 'address', name: 'ofAsset' },
    { type: 'uint', name: 'atTimestamp' },
    { type: 'unit', name: 'ofPrice' },
  ],
}];

const contract = new ethapi.newContract(abi); //.at(0x81926cfbf418f7c5a9f024142818f6b7f75887f8);

console.log(contract);
