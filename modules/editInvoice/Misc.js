import { useContext } from 'react';

import FormContext from '../../context/FormContext';

import { formatDate } from '../../lib/formatDate';

import Input from './Input';

const Misc = () => {
  const { misc, state, dispatch } = useContext(FormContext);
  const { payment_terms, description, date } = misc;

  function updateState(e) {
    switch (e.target.name) {
      case 'payment_terms':
        dispatch({
          type: 'UPDATE_PRODUCT_MISC',
          payload: {
            ...state.misc,
            payment_terms: e.target.value,
          },
        });

        break;

      case 'project_description':
        dispatch({
          type: 'UPDATE_PRODUCT_MISC',
          payload: {
            ...state.misc,
            description: [e.target.value],
          },
        });

        break;
    }
  }

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
        callBack={(e) => updateState(e)}
      />

      <Input
        id="project_description"
        labelled="Project Description"
        defaultValue={description.join(', ')}
        callBack={(e) => updateState(e)}
      />
    </>
  );
};

export default Misc;
