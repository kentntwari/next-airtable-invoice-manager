import Link from 'next/link';
import { useCallback } from 'react';

import InvoiceContext from '../../context/InvoiceContext';
import InvoiceDetails from '../../modules/invoice/InvoiceDetails';

import { getClientsTable, getProductsTable } from '../../lib/airtable';

const Invoice = ({ client, products }) => {
  const shippingLocation = useCallback(() => {
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

  const data = {
    client: client[0],
    shippedFrom: shippingLocation(),
  };

  return (
    <>
      <InvoiceContext.Provider
        value={{
          client: client[0],
          products,
          shippedFrom: shippingLocation(),
        }}>
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

        <InvoiceDetails />
      </InvoiceContext.Provider>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const clientRecords = await getClientsTable();
  const productRecords = await getProductsTable();

  const filteredClientRecords = JSON.parse(JSON.stringify(clientRecords))
    .map((record) => record.fields)
    .filter(({ invoiced }) => invoiced[0] === ctx.query.invoice);

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
