import { Fragment, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import InvoiceContext from '../../context/InvoiceContext';

const PurchaseSummary = () => {
  const { products } = useContext(InvoiceContext);

  const purchases = products.map((res) => {
    const { product_name, price, quantity } = res.fields;

    return {
      product: product_name,
      price,
      quantity,
    };
  });

  const total = purchases
    .map(({ price, quantity }) => price * quantity)
    .reduce((acc, current) => acc + current, 0)
    .toFixed(2);

  return (
    <>
      <div>
        <div className="w-full p-6 bg-white-light flex flex-col gap-6">
          {purchases.map(({ product, price, quantity }) => (
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
          <h3 className="font-bold text-white-full">£ {total}</h3>
        </div>
      </div>
    </>
  );
};

export default PurchaseSummary;
