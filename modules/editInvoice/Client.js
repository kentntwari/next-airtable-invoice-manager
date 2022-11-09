import { Fragment, useContext } from 'react';

import FormContext from '../../context/FormContext';

import Input from './Input';

const Client = () => {
  const { client, state, dispatch } = useContext(FormContext);

  const { name, email, address } = client;

  function updateState(e) {
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
    }
  }

  return (
    <Fragment>
      <Input
        id="client_name"
        name="client_name"
        labelled="Client's Name"
        defaultValue={name}
        callBack={(e) => updateState(e)}
      />
      <Input
        type="email"
        id="client_email"
        labelled="Client's Email"
        defaultValue={email}
        callBack={(e) => updateState(e)}
      />
      <Input
        id="client_address_street"
        labelled="Street Address"
        defaultValue={address.street}
        callBack={(e) => updateState(e)}
      />
      <div className="flex justify-between items-center gap-6">
        <Input
          id="client_city"
          labelled="City"
          defaultValue={client.address.city}
          callBack={(e) => updateState(e)}
        />
        <Input
          id="client_address_post_code"
          labelled="Post Code"
          defaultValue={address.post_code}
          callBack={(e) => updateState(e)}
        />
      </div>
      <Input
        id="client_address_country"
        labelled="Country"
        defaultValue={address.country}
        callBack={(e) => updateState(e)}
      />
    </Fragment>
  );
};

export default Client;
