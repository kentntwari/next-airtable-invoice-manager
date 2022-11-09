import { createRef, useRef, useContext } from 'react';

import FormContext from '../../context/FormContext';

import Input from './Input';

const Item = ({ id, data }) => {
  const { state, dispatch } = useContext(FormContext);
  const { price, product: product_name, quantity } = data;

  const product_name_ref = createRef(product_name);
  const quantity_ref = createRef(quantity);
  const price_ref = createRef(price);
  const total_ref = useRef();

  function updateProduct(e) {
    switch (e.target.name) {
      case 'product':
        dispatch({
          type: 'UPDATE_ITEMS',
          payload: {
            ...state.items,
            load: state.items.load.map((res) => {
              if (e.target.attributes.getNamedItem('record_id').value === res.record_id) {
                return { ...res, product: e.target.value };
              }
              return res;
            }),
          },
        });

        break;
    }
  }

  function deleteItem() {
    return dispatch({
      type: 'REMOVE_ITEM',
      payload: {
        updateItems: state.items.load.filter((res) => {
          const product = res.product;
          if (product !== product_name_ref.current.value) return product;
        }),
      },
    });
  }

  return (
    <>
      <div className="w-full grid grid-cols-2 items-center gap-y-6 gap-x-4">
        <Input
          ref={product_name_ref}
          id={id}
          name="product"
          addComponentClass="col-start-1 col-end-3"
          labelled="Item Name"
          defaultValue={product_name}
          callBack={(e) => updateProduct(e)}
        />

        <div className="flex items-center gap-4">
          <Input
            ref={quantity_ref}
            id={id}
            name="quantity"
            type="number"
            addComponentClass="w-1/3"
            labelled="Qty."
            defaultValue={quantity}
            callBack={(e) => updateProduct(e)}
          />
          <Input
            ref={price_ref}
            id={id}
            name="price"
            type="number"
            addComponentClass="w-2/3"
            labelled="Price"
            defaultValue={price}
            callBack={(e) => updateProduct(e)}
          />
        </div>
        <div className="flex justify-between items-center">
          <Input
            ref={total_ref}
            id={id}
            addComponentClass="w-25"
            addInputClass="border-none text-blue-light"
            labelled="Total"
            defaultValue={(price * quantity).toFixed(2)}
            readOnly={true}
          />
          <span className="cursor-pointer" onClick={deleteItem}>
            <svg width="13" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
                fill="#888EB0"
                fillRule="nonzero"
              />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
};

export default Item;
