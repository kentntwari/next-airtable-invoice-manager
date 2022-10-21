export const Default = ({ type = 'button', addBtnClass, text = 'Add text' }) => (
  <button
    type={type}
    className={
      addBtnClass
        ? addBtnClass
        : 'px-6 py-4 bg-violet-normal hover:bg-violet-light body--1 flex justify-center items-center gap-4 text-white-full rounded-3xl'
    }>
    {text}
  </button>
);

export const Add = ({
  type = 'button',
  state,
  addBtnClass,
  addIconClass,
  text = 'Add something',
}) => {
  if (state === 'simple')
    return (
      <button
        type={type}
        className={
          addBtnClass
            ? addBtnClass
            : 'w-full p-4 bg-white-light hover:bg-blue-lightest body--1 flex justify-center items-center gap-4 text-blue-light rounded-3xl'
        }>
        {text}
      </button>
    );

  return (
    <button
      type={type}
      className={
        addBtnClass
          ? addBtnClass
          : 'w-fit p-2.5 bg-violet-normal hover:bg-violet-light body--1 flex justify-center items-center gap-4 text-white-full rounded-3xl'
      }>
      <div
        className={
          addIconClass
            ? addIconClass
            : 'w-8 h-8 bg-white-light flex justify-center items-center rounded-full'
        }>
        <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
            fill="#7C5DFA"
            fill-rule="nonzero"
          />
        </svg>
      </div>
      {text}
    </button>
  );
};

export const Edit = ({ type = 'button', text = 'Edit', addBtnClass }) => (
  <button
    type={type}
    className={
      addBtnClass
        ? addBtnClass
        : 'w-fit px-6 py-4 bg-white-light hover:bg-blue-lightest body--1 flex justify-center items-center gap-4 text-blue-light rounded-3xl'
    }>
    {text}
  </button>
);

export const Delete = ({ type = 'button', text = 'Delete', addBtnClass }) => (
  <button
    type={type}
    className={
      addBtnClass
        ? addBtnClass
        : 'w-fit px-6 py-4 bg-red-light hover:bg-red-lighter body--1 flex justify-center items-center gap-4 text-white-full rounded-3xl'
    }>
    {text}
  </button>
);
