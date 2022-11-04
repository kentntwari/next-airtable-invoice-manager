import { Fragment, useContext } from 'react';

import FormContext from '../../context/FormContext';

import Input from './Input';

const Sender = () => {
  const { sender } = useContext(FormContext);

  const { street, city, post_code, country } = sender;

  return (
    <Fragment>
      <Input
        id="sender_street"
        name="sender_street"
        labelled="Street Address"
        defaultValue={street}
      />

      <div className="flex justify-between items-center gap-6">
        <Input id="sender_city" name="sender_city" labelled="City" defaultValue={city} />
        <Input
          id="sender_post_code"
          name="sender_post_code"
          labelled="Post Code"
          defaultValue={post_code}
        />
      </div>

      <Input
        id="sender_country"
        name="sender_country"
        labelled="Country"
        defaultValue={country}
      />
    </Fragment>
  );
};

export default Sender;
