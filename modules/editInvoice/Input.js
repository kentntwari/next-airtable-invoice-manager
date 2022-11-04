import React, { useContext } from 'react';

import FormContext from '../../context/FormContext';

const Input = React.forwardRef(
  (
    {
      type = 'text',
      id,
      name = null,
      defaultValue,
      addComponentClass = null,
      addLabelClass = null,
      addInputClass = null,
      labelled,
      readOnly = false,
    },
    ref
  ) => {
    const defaultComponentClass = 'flex flex-col gap-2.5';
    const defaultLabelClass = 'body--1 text-blue-light';
    const defaultInputClass =
      'w-full px-5 py-4 rounded border focus:border-blue-lightest outline-none';

    const { items, state, dispatch } = useContext(FormContext);

    function editInput(e) {
      // console.log(e.target);

      switch (e.target.name) {
        case 'client_name':
          dispatch({
            type: 'UPDATE_CLIENT_INFO',
            payload: {
              ...state.client,
              name: e.target.value,
            },
          });

          break;

        case 'client_email':
          dispatch({
            type: 'UPDATE_CLIENT_INFO',
            payload: {
              ...state.client,
              email: e.target.value,
            },
          });

          break;

        case 'client_address_street':
          dispatch({
            type: 'UPDATE_CLIENT_INFO',
            payload: {
              ...state.client,
              address: {
                ...state.client.address,
                street: e.target.value,
              },
            },
          });

          break;

        case 'client_address_city':
          dispatch({
            type: 'UPDATE_CLIENT_INFO',
            payload: {
              ...state.client,
              address: {
                ...state.client.address,
                city: e.target.value,
              },
            },
          });

          break;

        case 'client_address_post_code':
          dispatch({
            type: 'UPDATE_CLIENT_INFO',
            payload: {
              ...state.client,
              address: {
                ...state.client.address,
                post_code: e.target.value,
              },
            },
          });

          break;

        case 'client_address_country':
          dispatch({
            type: 'UPDATE_CLIENT_INFO',
            payload: {
              ...state.client,
              address: {
                ...state.client.address,
                country: e.target.value,
              },
            },
          });

          break;

        case 'sender_street':
          dispatch({
            type: 'UPDATE_SENDER_INFO',
            payload: {
              ...state.shippedFrom,
              street: e.target.value,
            },
          });

          break;

        case 'sender_city':
          dispatch({
            type: 'UPDATE_SENDER_INFO',
            payload: {
              ...state.shippedFrom,
              city: e.target.value,
            },
          });

          break;

        case 'sender_post_code':
          dispatch({
            type: 'UPDATE_SENDER_INFO',
            payload: {
              ...state.shippedFrom,
              post_code: e.target.value,
            },
          });

          break;

        case 'sender_country':
          dispatch({
            type: 'UPDATE_SENDER_INFO',
            payload: {
              ...state.shippedFrom,
              country: e.target.value,
            },
          });

          break;

        case 'payment_terms':
          dispatch({
            type: 'UPDATE_PRODUCT_MISC',
            payload: {
              ...state.misc,
              payment_terms: e.target.value,
            },
          });

          break;

        case 'project_description':
          dispatch({
            type: 'UPDATE_PRODUCT_MISC',
            payload: {
              ...state.misc,
              description: [e.target.value],
            },
          });

          break;

        case 'product':
          dispatch({
            type: 'UPDATE_ITEMS',
            payload: {
              ...state.items,
              load: state.items.load.map((res) => {
                if (
                  e.target.attributes.getNamedItem('record_id').value === res.record_id
                ) {
                  return { ...res, product: e.target.value };
                }

                return res;
              }),
            },
          });

          break;
      }
    }

    function test(e) {
      console.log(e.target.value);
    }

    return (
      <div
        className={
          !addComponentClass
            ? defaultComponentClass
            : defaultComponentClass + ' ' + addComponentClass
        }>
        <label
          htmlFor={id}
          className={
            !addLabelClass ? defaultLabelClass : defaultLabelClass + ' ' + addLabelClass
          }>
          {labelled}
        </label>
        <input
          ref={ref}
          type={type}
          name={name ? name : id}
          defaultValue={defaultValue || null}
          className={
            !addInputClass ? defaultInputClass : defaultInputClass + ' ' + addInputClass
          }
          readOnly={readOnly}
          record_id={id || null}
          onChange={editInput}
        />
      </div>
    );
  }
);

export default Input;
