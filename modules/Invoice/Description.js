const Description = ({ data }) => {
  const { id, description } = data;

  return (
    <div className="flex flex-col gap-1">
      <p className="font-bold body--1 text-black-shade">
        <span className="font-bold body--1 text-blue-lighter">#</span>
        {id}
      </p>

      <small className="body--1 text-blue-lighter">{description}</small>
    </div>
  );
};

export default Description;
