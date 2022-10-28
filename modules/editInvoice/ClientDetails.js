import { useContext } from 'react';

import InvoiceContext from '../../context/InvoiceContext';

import Input from './Input';

const ClientDetails = () => {
  const { client } = useContext(InvoiceContext);

  const {
    first_name,
    last_name,
    email,
    lives_at_street: street,
    lives_at_city: city,
    lives_at_post_code: post_code,
    lives_at_country: country,
  } = client;

  return (
    <>
      <Input
        id="client_name"
        labelled="Client's Name"
        defaultValue={first_name + ' ' + last_name}
      />
      <Input
        type="email"
        id="client_email"
        labelled="Client's Email"
        defaultValue={email}
      />
      <Input id="client_street" labelled="Street Address" defaultValue={street} />
      <div className="flex justify-between items-center gap-6">
        <Input id="client_city" labelled="City" defaultValue={city} />
        <Input id="client_post_code" labelled="Post Code" defaultValue={post_code} />
      </div>
      <Input id="client_country" labelled="Country" defaultValue={country} />
    </>
  );
};

export default ClientDetails;
