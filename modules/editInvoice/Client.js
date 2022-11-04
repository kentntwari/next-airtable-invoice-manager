import { Fragment, useContext } from 'react';

import FormContext from '../../context/FormContext';

import Input from './Input';

const Client = () => {
  const { client } = useContext(FormContext);

  return (
    <Fragment>
      <Input
        id="client_name"
        name="client_name"
        labelled="Client's Name"
        defaultValue={client.name}
      />
      <Input
        type="email"
        id="client_email"
        labelled="Client's Email"
        defaultValue={client.email}
      />
      <Input
        id="client_address_street"
        labelled="Street Address"
        defaultValue={client.address.street}
      />
      <div className="flex justify-between items-center gap-6">
        <Input id="client_city" labelled="City" defaultValue={client.address.city} />
        <Input
          id="client_address_post_code"
          labelled="Post Code"
          defaultValue={client.address.post_code}
        />
      </div>
      <Input
        id="client_address_country"
        labelled="Country"
        defaultValue={client.address.country}
      />
    </Fragment>
  );
};

export default Client;
