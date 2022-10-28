import { useContext } from 'react';

import InvoiceContext from '../../context/InvoiceContext';

import Item from './Item';
import * as Button from '../../components/Button';

const ItemList = () => {
  const { products } = useContext(InvoiceContext);

  return (
    <div className="flex flex-col gap-7">
      <span className="font-bold text-[18px] text-blue-light">Item List</span>
      {products.map(({ price, quantity, product_name }) => (
        <Item data={{ price, quantity, product_name }} />
      ))}

      <Button.Add state="simple">+ Add New Item</Button.Add>
    </div>
  );
};

export default ItemList;
