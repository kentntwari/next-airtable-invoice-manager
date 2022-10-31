import Input from './Input';

const Item = ({ data }) => {
  const { price, quantity, product_name } = data;

  return (
    <>
      <div className="w-full grid grid-cols-2 items-center gap-y-6 gap-x-4">
        <Input
          addComponentClass="col-start-1 col-end-3"
          labelled="Item Name"
          defaultValue={product_name}
        />
        <div className="flex items-center gap-4">
          <Input
            type="number"
            addComponentClass="w-1/3"
            labelled="Qty."
            defaultValue={quantity}
          />
          <Input
            type="number"
            addComponentClass="w-2/3"
            labelled="Price"
            defaultValue={price}
          />
        </div>

        <div className="flex justify-between items-center">
          <Input
            addComponentClass="w-25"
            addInputClass="border-none text-blue-light"
            labelled="Total"
            defaultValue={(price * quantity).toFixed(2)}
            readOnly={true}
          />
          <span onClick={() => console.log('hello')}>
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