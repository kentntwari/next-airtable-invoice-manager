import EditForm from '../editInvoice/EditForm';

import * as Status from './Status';
import Description from './Description';
import ClientAddress from './ClientAddress';
import SenderAddress from './SenderAddress';
import Date from './Date';
import ClientEmail from './ClientEmail';
import PurchaseSummary from './PurchaseSummary';

const InvoiceDetails = () => {
  return (
    <section className="relative flex flex-col gap-4">
      <Status.Card />
      <div className="p-6 bg-white-full flex flex-col gap-7">
        <Description />
        <SenderAddress />
        <div className="grid grid-cols-2 gap-7.5">
          <Date />
          <ClientAddress />
          <ClientEmail />
        </div>

        <PurchaseSummary />
      </div>

      <EditForm />
    </section>
  );
};

export default InvoiceDetails;
