import { Fragment, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import FormContext from '../../context/FormContext';

import * as Button from '../../components/Button';

import Item from './Item';

const Purchases = () => {
  const { items } = useContext(FormContext);

  return (
    <Fragment>
      {items.load.map(({ record_id, ...rest }) => (
        <Fragment key={uuidv4()}>
          <Item id={record_id} data={rest} />
        </Fragment>
      ))}

      <Button.Add state="simple">+ Add New Item</Button.Add>
    </Fragment>
  );
};

export default Purchases;
