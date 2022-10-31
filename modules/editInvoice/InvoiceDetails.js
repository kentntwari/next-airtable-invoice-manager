import { useContext } from 'react';

import InvoiceContext from '../../context/InvoiceContext.js';

import { formatDate } from '../../lib/formatDate';

import Input from './Input';

const InvoiceDetails = () => {
  const { client, products } = useContext(InvoiceContext);

  const { invoice_created_date, invoice_payment_terms } = client;

  const description = [...new Set(products.map((res) => res.fields.description[0]))].join(
    ', '
  );

  return (
    <div className="flex flex-col gap-6">
      <span className="opacity-50">
        <Input
          id="invoice_date"
          labelled="Invoice Date"
          readOnly={true}
          defaultValue={formatDate(invoice_created_date)}
        />
      </span>

      <Input
        type="number"
        id="payment_terms"
        labelled="Payment Terms"
        defaultValue={invoice_payment_terms}
        addInputClass="appearance-none"
      />

      <Input
        id="project_description"
        labelled="Project Description"
        defaultValue={description}
      />
    </div>
  );
};

export default InvoiceDetails;
