export const initialState = {
  priceList: [],
};

export const actions = {
  ADD_PRICE_ENTRY: 'melonchallenge/ADD_PRICE_ENTRY',
};

export const actionCreators = {
  addPriceEntry: priceEntry => ({
    type: actions.ADD_PRICE_ENTRY,
    priceEntry,
  }),
};

export const reducer = (state = initialState, action) => {
  const { type, ...params } = action;

  switch (type) {
    case actions.ADD_PRICE_ENTRY: {
      const priceList = state.priceList.slice(0);
      priceList.push(params.priceEntry);
      return {
        priceList,
      };
    }
    default:
      return state;
  }
};
