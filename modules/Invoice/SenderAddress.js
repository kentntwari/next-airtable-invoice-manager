import { useCallback, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import InvoiceContext from '../../context/InvoiceContext';

const SenderAddress = () => {
  const { products } = useContext(InvoiceContext);

  const address = useCallback(() => {
    return [
      ...new Set(
        products.map(
          ({
            shipped_from_street,
            shipped_from_city,
            shipped_from_post_code,
            shipped_from_country,
          }) =>
            JSON.stringify({
              shipped_from_street,
              shipped_from_city,
              shipped_from_post_code,
              shipped_from_country,
            })
        )
      ),
    ].map((res) => JSON.parse(res));
  }, [products]);

  return (
    <>
      {address().map(
        ({
          shipped_from_street: street,
          shipped_from_city: city,
          shipped_from_post_code: post_code,
          shipped_from_country: country,
        }) => (
          <span key={uuidv4()} className="body--2 text-blue-lighter">
            {street} <br />
            {city} <br />
            {post_code} <br />
            {country}
          </span>
        )
      )}
    </>
  );
};

export default SenderAddress;
