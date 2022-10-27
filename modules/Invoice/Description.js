import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import InvoiceContext from '../../context/InvoiceContext';

const Description = () => {
  const { client, products } = useContext(InvoiceContext);

  const { invoice_id } = client;

  return (
    <div className="flex flex-col gap-1">
      <p className="font-bold body--1 text-black-shade">
        <span className="font-bold body--1 text-blue-lighter">#</span>
        {invoice_id}
      </p>
      {[...new Set(products.map((x) => x.description[0]))].map((res) => (
        <small key={uuidv4()} className="body--1 text-blue-lighter">
          {res}
        </small>
      ))}
    </div>
  );
};

export default Description;
