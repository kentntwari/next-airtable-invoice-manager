import { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { sum } from '../../lib/sum';

const PurchaseSummary = (props) => {
  const payload = Object.values(props);

  const total = payload
    .map(({ price, quantity }) => price * quantity)
    .reduce((acc, current) => acc + current, 0)
    .toFixed(2);

  return (
    <>
      <div>
        <div className="w-full p-6 bg-white-light flex flex-col gap-6">
          {payload.map(({ product, price, quantity }) => (
            <Fragment key={uuidv4()}>
              <div className="w-full flex justify-between items-center rounded-t-lg">
                <p className="font-bold body--1 text-black-shade flex flex-col gap-2">
                  {product}
                  <span className="font-bold body--1 text-blue-light">
                    {quantity} x £ {price.toFixed(2)}
                  </span>
                </p>

                <p className="font-bold body--1 text-black-shade">
                  £ {(quantity * price).toFixed(2)}
                </p>
              </div>
            </Fragment>
          ))}
        </div>
        <div className="w-full px-6 py-8 bg-blue-strong flex justify-between items-center rounded-b-lg">
          <small className="body--1 text-white-full">Grand Total</small>
          <h3 className="font-bold text-white-full">£ {sum(total)}</h3>
        </div>
      </div>
    </>
  );
};

export default PurchaseSummary;
