import React from 'react';

const Input = React.forwardRef(
  (
    {
      type = 'text',
      id,
      name = null,
      defaultValue,
      addComponentClass = null,
      addLabelClass = null,
      addInputClass = null,
      labelled,
      readOnly = false,
      callBack = () => console.log('there is no callBack function'),
    },
    ref
  ) => {
    const defaultComponentClass = 'flex flex-col gap-2.5';
    const defaultLabelClass = 'body--1 text-blue-light';
    const defaultInputClass =
      'w-full px-5 py-4 rounded border focus:border-blue-lightest outline-none';

    return (
      <div
        className={
          !addComponentClass
            ? defaultComponentClass
            : defaultComponentClass + ' ' + addComponentClass
        }>
        <label
          htmlFor={id}
          className={
            !addLabelClass ? defaultLabelClass : defaultLabelClass + ' ' + addLabelClass
          }>
          {labelled}
        </label>
        <input
          ref={ref}
          type={type}
          name={name ? name : id}
          defaultValue={defaultValue || null}
          className={
            !addInputClass ? defaultInputClass : defaultInputClass + ' ' + addInputClass
          }
          readOnly={readOnly}
          record_id={id || null}
          onChange={callBack}
        />
      </div>
    );
  }
);

export default Input;
