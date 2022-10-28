import * as Status from './Status';

import { formatDate } from '../../lib/formatDate';

const InvoiceCardSummary = (props) => {
  const {
    first_name,
    last_name,
    invoice_id: id,
    invoice_status: status,
    invoice_due_date: due_date,
    total_purchases: array_total,
  } = props;

  const total = array_total.reduce((prev, current) => prev + current, 0);

  return (
    <div className="bg-white-full w-full p-6 flex flex-col gap-6 shadow-md">
      <div className="w-full flex justify-between items-center">
        <p className="font-bold body--1 text-black-shade">
          <span className="text-blue-light">#</span>
          {id}
        </p>

        <small className="body--1 text-blue-lighter">
          {first_name} {last_name}
        </small>
      </div>

      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <small className="body--1 text-blue-lighter">Due {formatDate(due_date)}</small>

          <span className="font-bold text-black-shade">£ {total.toFixed(2)}</span>
        </div>

        <Status.Flag payload={status} />
      </div>
    </div>
  );
};

export default InvoiceCardSummary;
