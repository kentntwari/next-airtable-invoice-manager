const ClientAddress = ({
  first_name,
  last_name,
  lives_at_street: street,
  lives_at_city: city,
  lives_at_post_code: post_code,
  lives_at_country: country,
}) => {
  return (
    <>
      <p className="flex flex-col gap-3 font-bold text-lg text-black-shade">
        <span className="body--1 text-blue-lighter">Bill To</span>
        {first_name} {last_name}
        <span className="body--2 text-blue-lighter">
          {street} <br />
          {city} <br />
          {post_code} <br />
          {country}
        </span>
      </p>
    </>
  );
};

export default ClientAddress;
