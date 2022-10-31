import { Fragment, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ItemListContext from '../../context/ItemListContext';

import Item from './Item';
import * as Button from '../../components/Button';

const ItemList = () => {
  const { list } = useContext(ItemListContext);

  return (
    <div className="flex flex-col gap-7">
      <span className="font-bold text-[18px] text-blue-light">Item List</span>
      {list.length > 0 &&
        list.map(({ id, fields }) => (
          <Fragment key={uuidv4()}>
            <Item
              record_id={id}
              data={{
                price: fields.price,
                quantity: fields.quantity,
                product_name: fields.product_name,
              }}
            />
          </Fragment>
        ))}

      <Button.Add state="simple">+ Add New Item</Button.Add>
    </div>
  );
};

export default ItemList;
