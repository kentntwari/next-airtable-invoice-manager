const SenderAddress = ({ street, city, post_code, country }) => {
  return (
    <>
      <span className="body--2 text-blue-lighter">
        {street} <br />
        {city} <br />
        {post_code} <br />
        {country}
      </span>
    </>
  );
};

export default SenderAddress;
