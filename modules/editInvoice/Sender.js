import { Fragment, useContext } from 'react';

import FormContext from '../../context/FormContext';

import Input from './Input';

const Sender = () => {
  const { sender, state, dispatch } = useContext(FormContext);

  const { street, city, post_code, country } = sender;

  function updateState(e) {
    switch (e.target.name) {
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
    }
  }

  return (
    <Fragment>
      <Input
        id="sender_street"
        name="sender_street"
        labelled="Street Address"
        defaultValue={street}
        callBack={(e) => updateState(e)}
      />

      <div className="flex justify-between items-center gap-6">
        <Input id="sender_city" name="sender_city" labelled="City" defaultValue={city} />
        <Input
          id="sender_post_code"
          name="sender_post_code"
          labelled="Post Code"
          defaultValue={post_code}
          callBack={(e) => updateState(e)}
        />
      </div>

      <Input
        id="sender_country"
        name="sender_country"
        labelled="Country"
        defaultValue={country}
        callBack={(e) => updateState(e)}
      />
    </Fragment>
  );
};

export default Sender;
