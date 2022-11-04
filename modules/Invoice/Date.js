import { formatDate } from '../../lib/formatDate';

const Date = (props) => {
  const { created_at, due_date } = props;

  return (
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
  );
};

export default Date;
