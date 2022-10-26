import { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ClientAddress from '../address/ClientAddress';
import SenderAddress from '../address/SenderAddress';
import PurchaseSummary from '../product/PurchaseSummary';

import { formatDate } from '../../lib/formatDate';

const InvoiceDetails = ({ client, products, sender }) => {
  const {
    invoice_id,
    invoice_created_date: created_at,
    invoice_due_date: due_date,
    first_name: client_first_name,
    last_name: client_last_name,
    email: client_email,
    lives_at_street,
    lives_at_city,
    lives_at_post_code,
    lives_at_country,
  } = client[0];

  const purchases = products.map(({ product_name, price, quantity }) => {
    return {
      product: product_name,
      price,
      quantity,
    };
  });

  return (
    <div className="p-6 bg-white-full flex flex-col gap-7.5 rounded-lg">
      <div className="flex flex-col gap-7.5">
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

        {sender.map((res) => (
          <Fragment key={uuidv4()}>
            <SenderAddress
              street={res.shipped_from_street}
              city={res.shipped_from_city}
              post_code={res.shipped_from_post_code}
              country={res.shipped_from_country}
            />
          </Fragment>
        ))}
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-7.5">
        <div className="flex flex-col gap-8">
          <p className="flex flex-col gap-3 font-bold text-lg text-black-shade">
            <span className="body--1 text-blue-lighter">Invoice Date</span>
            {formatDate(created_at)}
          </p>

          <p className="flex flex-col gap-3 font-bold text-lg text-black-shade">
            <span className="body--1 text-blue-lighter">Payment Due</span>
            {formatDate(due_date)}
          </p>
        </div>

        <p className="col-start-2 row-start-1 row-end-2 flex flex-col gap-3 font-bold text-lg text-black-shade">
          <span className="body--1 text-blue-lighter">Bill To</span>
          {client_first_name} {client_last_name}
          <ClientAddress
            street={lives_at_street}
            city={lives_at_city}
            post_code={lives_at_post_code}
            country={lives_at_country}
          />
        </p>

        <p className="row-start-2 col-start-1 flex flex-col gap-3 font-bold text-lg text-black-shade">
          <span className="body--1 text-blue-lighter">Sent to</span>
          {client_email}
        </p>
      </div>

      <PurchaseSummary {...purchases} />
    </div>
  );
};

export default InvoiceDetails;
