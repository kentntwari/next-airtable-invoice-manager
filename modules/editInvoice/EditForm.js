import { useContext, useReducer, useEffect } from 'react';

import InvoiceContext from '../../context/InvoiceContext';
import ItemListContext from '../../context/ItemListContext';

import ItemList from './ItemList';
import SenderDetails from './SenderDetails';
import ClientDetails from './ClientDetails';
import InvoiceDetails from './InvoiceDetails';
import * as Button from '../../components/Button';

const EditForm = () => {
  const { client, products } = useContext(InvoiceContext);

  const { invoice_id } = client;

  let mountedState = {
    listItems: products,
    deleteItems: [],
  };

  const [state, dispatch] = useReducer(reducer, mountedState);

  function reducer(state, action) {
    switch (action.type) {
      case 'REMOVE_ITEM':
        return {
          ...state,
          listItems: action.payload.updateList,
        };

        case 'UPDATE_INVOICE':
          
    }
  }

  return (
    <div className="min-h-screen w-full absolute top-0 left-0 bg-white-full flex flex-col gap-6">
      <h1>
        Edit <span className="text-blue-lighter">#</span>
        {invoice_id}
      </h1>

      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <span className="font-bold body--1 text-violet-normal">Bill From</span>
          <SenderDetails />
        </div>

        <div className="flex flex-col gap-6">
          <span className="font-bold body--1 text-violet-normal">Bill To</span>
          <ClientDetails />
        </div>
        <InvoiceDetails />
        <ItemListContext.Provider
          value={{
            list: state.listItems,
            triggerItemDispatch: dispatch,
            itemState: state,
          }}>
          <ItemList />
        </ItemListContext.Provider>

        <div className="px-6 py-5 flex justify-end items-center gap-2">
          <Button.Edit>Cancel</Button.Edit>
          <Button.Default type="submit">Save Changes</Button.Default>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
