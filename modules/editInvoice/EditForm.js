import { useContext } from 'react';

import InvoiceContext from '../../context/InvoiceContext';

import Input from './Input';

const EditForm = () => {
  const { client } = useContext(InvoiceContext);

  const { invoice_id } = client;

  return (
    <div className="min-h-screen w-full absolute top-0 left-0 bg-white-full flex flex-col gap-6">
      <h1>
        Edit <span className="text-blue-lighter">#</span>
        {invoice_id}
      </h1>

      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <span className="font-bold body--1 text-violet-normal">Bill From</span>
          <Input id="sender_street" labelled="Street Address" />

          <div className="flex justify-between items-center gap-6">
            <Input id="sender_city" labelled="City" />
            <Input id="sender_post_code" labelled="Post Code" />
          </div>

          <Input id="sender_country" labelled="Country" />
        </div>

        <div className="flex flex-col gap-6">
          <span className="font-bold body--1 text-violet-normal">Bill To</span>
          <Input id="client_name" labelled="Client's Name" />
          <Input type="email" id="client_email" labelled="Client's Email" />
          <Input id="client_street" labelled="Street Address" />
          <div className="flex justify-between items-center gap-6">
            <Input id="client_city" labelled="City" />
            <Input id="client_post_code" labelled="Post Code" />
          </div>
          <Input id="client_country" labelled="Country" />
        </div>

        <div className="flex flex-col gap-6">
          <span className="opacity-50">
            <Input id="invoice_date" labelled="Invoice Date" readOnly={true} />
          </span>

          <Input id="payment_terms" labelled="Payment Terms" />
          <Input id="project_description" labelled="Project Description" />
        </div>
      </form>
    </div>
  );
};

export default EditForm;
