export const initialState = {
  priceList: [],
};

export const actions = {
  LOAD_PRICE_LIST: 'melonchallenge/LOAD_PRICE_LIST',
};

export const actionCreators = {
  loadPriceList: priceList => ({
    type: actions.LOAD_PRICE_LIST,
    priceList,
  }),
};

export const reducer = (state = initialState, action) => {
  const { type, ...params } = action;

  switch (type) {
    case actions.LOAD_PRICE_LIST:
      return {
        priceList: params.priceList,
      };
    default:
      return state;
  }
};
