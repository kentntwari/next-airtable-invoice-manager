const Input = ({
  type = 'text',
  id,
  name = null,
  addLabelClass = null,
  addInputClass = null,
  labelled,
  readOnly = false,
}) => {
  const defaultLabelClass = 'body--1 text-blue-light';
  const defaultInputClass =
    'w-full px-5 py-4 rounded border focus:border-blue-lightest outline-none';

  return (
    <div className="flex flex-col gap-2.5">
      <label
        htmlFor={id}
        className={
          !addLabelClass ? defaultLabelClass : defaultLabelClass + ' ' + addLabelClass
        }>
        {labelled}
      </label>
      <input
        type={type}
        id={id}
        name={name ? name : id}
        className={
          !addInputClass ? defaultInputClass : defaultInputClass + ' ' + addInputClass
        }
        readOnly={readOnly}
      />
    </div>
  );
};

export default Input;
