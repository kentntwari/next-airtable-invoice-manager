import { Fragment, useEffect, useRef, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import FormContext from '../../context/FormContext';
import { reducer } from '../../context/reducer';

import * as Button from '../../components/Button';

import Sender from './Sender';
import Client from './Client';
import Misc from './Misc';
import Item from './Item';

const EditInvoice = ({ data }) => {
  const loadData = {
    id: data.invoice_id || '',
    shippedFrom: {
      street: data.sender[0].street || '',
      city: data.sender[0].city || '',
      post_code: data.sender[0].post_code || '',
      country: data.sender[0].country || '',
    },
    client: {
      name: data.client.name || '',
      email: data.client.email || '',
      address: {
        street: data.client.lives_at_street || '',
        city: data.client.lives_at_city || '',
        post_code: data.client.lives_at_post_code || '',
        country: data.client.lives_at_country || '',
      },
    },
    misc: {
      payment_terms: data.invoice_payment_terms || 0,
      description: data.description || [],
      date: data.date || '',
    },
    items: {
      load: data.items || [],
      isItemsListEmpty: false,
    },
  };

  const [state, dispatch] = useReducer(reducer, loadData);

  const noItemsRef = useRef();

  useEffect(() => {
    let mounted = true;

    if (mounted && state.items.load.length === 0)
      return dispatch({ type: 'EMPTY_ITEM_LIST' });

    return () => (mounted = false);
  }, [state.items.load]);

  function updateInvoice(e) {
    e.preventDefault();

    // console.log(state);

    return fetch('/api/invoice', {
      method: 'PUT',
      body: {
        first_name: state.client.split(' ')
      }
    })
  }

  function addNewItem() {
    return dispatch({
      type: 'ADD_ITEM',
      payload: {
        ...state.items,
        load: [
          state.items.load,
          {
            record_id: 'new-product-' + uuidv4(),
            product: 'Product Name',
            price: 0,
            quantity: 1,
          },
        ].flat(),
      },
    });
  }

  return (
    <div className="min-h-screen w-full absolute top-0 left-0 bg-white-full flex flex-col gap-6">
      <h1>
        Edit <span className="text-blue-lighter">#</span>
        {state.id}
      </h1>

      <form className="flex flex-col gap-10" onSubmit={updateInvoice}>
        <FormContext.Provider
          value={{
            sender: state.shippedFrom,
            client: state.client,
            misc: state.misc,
            items: state.items,
            state,
            dispatch,
          }}>
          <div className="flex flex-col gap-6">
            <span className="font-bold body--1 text-violet-normal">Bill From</span>

            <Sender />
          </div>

          <div className="flex flex-col gap-6">
            <span className="font-bold body--1 text-violet-normal">Bill To</span>

            <Client />
          </div>

          <div className="flex flex-col gap-6">
            <Misc />
          </div>

          <div className="flex flex-col gap-7">
            <span className="font-bold text-[18px] text-blue-light">Item List</span>

            {state.items.isItemListEmpty && <span ref={noItemsRef}>No items here</span>}

            {state.items.load.map(({ record_id, ...rest }) => (
              <Fragment key={record_id}>
                <Item id={record_id} data={rest} />
              </Fragment>
            ))}

            <Button.Add state="simple" onClickEvent={addNewItem}>
              + Add new item
            </Button.Add>
          </div>
        </FormContext.Provider>

        <div className="px-6 py-5 flex justify-end items-center gap-2">
          <Button.Edit>Cancel</Button.Edit>
          <Button.Default type="submit">Save Changes</Button.Default>
        </div>
      </form>
    </div>
  );
};

export default EditInvoice;
