import { useCallback, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import InvoiceContext from '../../context/InvoiceContext';

const SenderAddress = () => {
  const { products } = useContext(InvoiceContext);

  const address = useCallback(() => {
    return [
      ...new Set(
        products.map(({ fields }) =>
          JSON.stringify({
            street: fields.shipped_from_street,
            city: fields.shipped_from_city,
            post_code: fields.shipped_from_post_code,
            country: fields.shipped_from_country,
          })
        )
      ),
    ].map((res) => JSON.parse(res));
  }, [products]);

  return (
    <>
      {address().map(({ street, city, post_code, country }) => (
        <span key={uuidv4()} className="body--2 text-blue-lighter">
          {street} <br />
          {city} <br />
          {post_code} <br />
          {country}
        </span>
      ))}
    </>
  );
};

export default SenderAddress;
