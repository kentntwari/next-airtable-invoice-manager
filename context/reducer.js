export function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_CLIENT_INFO':
      return {
        ...state,
        client: action.payload,
      };

    case 'UPDATE_SENDER_INFO':
      return {
        ...state,
        shippedFrom: action.payload,
      };

    case 'UPDATE_PRODUCT_MISC':
      return {
        ...state,
        misc: action.payload,
      };

    case 'UPDATE_ITEMS':
      return {
        ...state,
        items: action.payload,
      };

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: {
          ...state.items,
          load: action.payload.updateItems,
        },
      };

    case 'ADD_ITEM':
      return {
        ...state,
        items: action.payload,
      };

    case 'EMPTY_ITEM_LIST':
      return {
        ...state,
        items: {
          ...state.items,
          isItemListEmpty: true,
        },
      };
  }
}
