import * as Button from '../../components/Button';

const Options = () => {
  const test = () => console.log('hello');
  return (
    <div className="w-full p-5 mt-14 bg-white-full flex justify-center items-center gap-2">
      <Button.Edit onClickEvent={test} />
      <Button.Delete />
      <Button.Default>Mark as Paid</Button.Default>
    </div>
  );
};

export default Options;
