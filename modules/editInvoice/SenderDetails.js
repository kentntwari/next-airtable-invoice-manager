import { Fragment, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import InvoiceContext from '../../context/InvoiceContext';

import Input from './Input';

const SenderDetails = () => {
  const { shippedFrom } = useContext(InvoiceContext);

  return (
    <>
      {shippedFrom.map(({ street, city, post_code, country }) => {
        return (
          <Fragment key={uuidv4()}>
            <Input id="sender_street" labelled="Street Address" defaultValue={street} />

            <div className="flex justify-between items-center gap-6">
              <Input id="sender_city" labelled="City" defaultValue={city} />
              <Input
                id="sender_post_code"
                labelled="Post Code"
                defaultValue={post_code}
              />
            </div>

            <Input id="sender_country" labelled="Country" defaultValue={country} />
          </Fragment>
        );
      })}
    </>
  );
};

export default SenderDetails;
