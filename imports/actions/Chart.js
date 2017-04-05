export const initialState = {
  priceList: [],
  currentAsset: undefined,
};

export const actions = {
  ADD_PRICE_ENTRY: 'melonchallenge/ADD_PRICE_ENTRY',
  SELECT_ASSET: 'melonchallenge/SELECT_ASSET',
};

export const actionCreators = {
  addPriceEntry: priceEntry => ({
    type: actions.ADD_PRICE_ENTRY,
    priceEntry,
  }),
  selectAsset: asset => ({
    type: actions.SELECT_ASSET,
    asset,
  }),
};

export const reducer = (state = initialState, action) => {
  const { type, ...params } = action;

  switch (type) {
    case actions.ADD_PRICE_ENTRY: {
      const priceList = state.priceList.slice(0);
      priceList.push(params.priceEntry);
      return {
        ...state,
        priceList,
      };
    }
    case actions.SELECT_ASSET:
      return {
        priceList: state.currentAsset === params.asset ? state.priceList : initialState.priceList,
        currentAsset: params.asset,
      };
    default:
      return state;
  }
};
