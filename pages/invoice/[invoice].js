import Link from 'next/link';
import { useCallback } from 'react';

import { getClientsTable, getProductsTable } from '../../lib/airtable';

import * as Status from '../../modules/invoice/Status';
import Description from '../../modules/invoice/Description';
import Date from '../../modules/invoice/Date';
import SenderAddress from '../../modules/invoice/SenderAddress';
import ClientAddress from '../../modules/invoice/ClientAddress';
import ClientEmail from '../../modules/invoice/ClientEmail';
import PurchaseSummary from '../../modules/invoice/PurchaseSummary';
import EditInvoice from '../../modules/editInvoice/EditInvoice';

const Invoice = ({ client, products }) => {
  const {
    first_name,
    last_name,
    email,
    invoice_id,
    invoice_status,
    invoice_created_date,
    invoice_due_date,
    invoice_payment_terms,
    lives_at_street,
    lives_at_city,
    lives_at_post_code,
    lives_at_country,
  } = client[0].fields;

  const description = [
    ...new Set(products.map(({ fields }) => fields.description).flat()),
  ];

  const senderData = useCallback(() => {
    return [
      ...new Set(
        products.map(({ fields }) =>
          JSON.stringify({
            street: fields.shipped_from_street,
            city: fields.shipped_from_city,
            post_code: fields.shipped_from_post_code,
            country: fields.shipped_from_country,
          })
        )
      ),
    ].map((res) => JSON.parse(res));
  }, [products]);

  const clientData = {
    name: first_name + ' ' + last_name,
    email,
    lives_at_street,
    lives_at_city,
    lives_at_post_code,
    lives_at_country,
  };

  const date = {
    created_at: invoice_created_date,
    due_date: invoice_due_date,
  };
  const purchases = products.map((res) => {
    const { product_name, price, quantity } = res.fields;

    return {
      record_id: res.id,
      product: product_name,
      price,
      quantity,
    };
  });

  return (
    <>
      <Link href="/">
        <a className="flex items-center gap-6">
          <span>
            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.342.886L2.114 5.114l4.228 4.228"
                stroke="#9277FF"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </span>

          <span className="font-bold body--1 text-black-shade">Go back</span>
        </a>
      </Link>

      <section className="relative flex flex-col gap-4">
        <Status.Card {...invoice_status} />

        <div className="p-6 bg-white-full flex flex-col gap-7">
          <Description data={{ id: invoice_id, description }} />

          <SenderAddress data={senderData()} />

          <div className="grid grid-cols-2 gap-7.5">
            <Date {...date} />

            <ClientAddress {...clientData} />

            <ClientEmail data={email} />
          </div>

          <PurchaseSummary data={purchases} />
        </div>

        <EditInvoice
          data={{
            invoice_id,
            invoice_payment_terms,
            description,
            date,
            sender: senderData(),
            client: clientData,
            items: purchases,
          }}
        />
      </section>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const clientRecords = await getClientsTable();
  const productRecords = await getProductsTable();

  const filteredClientRecords = JSON.parse(JSON.stringify(clientRecords))
    .map((record) => {
      return {
        clientID: record.id,
        fields: record.fields,
      };
    })
    .filter((res) => res.fields.invoiced[0] === ctx.query.invoice);

  const filteredProductRecords = JSON.parse(JSON.stringify(productRecords))
    .map((record) => {
      return {
        id: record.id,
        fields: record.fields,
      };
    })
    .filter((res) => res.fields.invoiced[0] === ctx.query.invoice);

  return {
    props: {
      client: filteredClientRecords,
      products: filteredProductRecords,
    },
  };
};

export default Invoice;
