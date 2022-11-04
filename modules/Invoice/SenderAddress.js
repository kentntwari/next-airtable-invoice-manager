import { v4 as uuidv4 } from 'uuid';

const SenderAddress = ({ data: address }) => {
  return (
    <>
      {address.map(({ street, city, post_code, country }) => (
        <span key={uuidv4()} className="body--2 text-blue-lighter">
          {street} <br />
          {city} <br />
          {post_code} <br />
          {country}
        </span>
      ))}
    </>
  );
};

export default SenderAddress;
