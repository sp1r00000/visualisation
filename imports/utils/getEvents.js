import Web3 from 'web3';


const web3 = new Web3(new Web3.providers.HttpProvider('https://kovan.melonport.com'));

export const contractAddress = '0xC5df162BD06D7D6bD63Dac5bEeED49658D05A1AC';

export const assetTypes = {
  EuroToken: '0xc151b622fded233111155ec273bfaf2882f13703',
  BitcoinToken: '0x9e4c56a633dd64a2662bdfa69de4fde33ce01bdd',
  RepToken: '0xf61b8003637e5d5dbb9ca8d799ab54e5082cbdbc',
  MelonToken: '0x4dffea52b0b4b48c71385ae25de41ce6ad0dd5a7',
};

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

export default (callback, assetType = 'EuroToken') => {
  const oraclizeInstance = PriceFeedContract.at(contractAddress);
  const priceUpdatedFeed = oraclizeInstance.PriceUpdated(
    { ofAsset: assetTypes[assetType] },
    { fromBlock: 0, toBlock: 'latest' },
  );

  priceUpdatedFeed.get((err, events) =>
    callback(err, events.map(event => ({
      atTimestamp: new Date(event.args.atTimestamp.toNumber() * 1000),
      ofPrice: event.args.ofPrice.toNumber(),
    }))),
  );
};
