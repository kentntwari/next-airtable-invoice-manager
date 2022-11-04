import { useContext } from 'react';

import FormContext from '../../context/FormContext';

import { formatDate } from '../../lib/formatDate';

import Input from './Input';

const Misc = () => {
  const { misc } = useContext(FormContext);
  const { payment_terms, description, date } = misc;

  return (
    <>
      <span className="opacity-50">
        <Input
          id="invoice_date"
          labelled="Invoice Date"
          readOnly={true}
          defaultValue={formatDate(date.created_at)}
        />
      </span>

      <Input
        type="number"
        id="payment_terms"
        labelled="Payment Terms"
        defaultValue={payment_terms}
        addInputClass="appearance-none"
      />

      <Input
        id="project_description"
        labelled="Project Description"
        defaultValue={description.join(', ')}
      />
    </>
  );
};

export default Misc;
