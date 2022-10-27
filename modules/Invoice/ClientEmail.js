import { useContext } from 'react';

import InvoiceContext from '../../context/InvoiceContext';

const ClientEmail = () => {
  const { client } = useContext(InvoiceContext);

  const { email } = client;

  return (
    <p className="flex flex-col gap-3 font-bold text-lg text-black-shade">
      <span className="body--1 text-blue-lighter">Sent to</span>
      {email}
    </p>
  );
};

export default ClientEmail;
