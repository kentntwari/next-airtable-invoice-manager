import { getClientsTable } from '../../lib/airtable';

const Invoice = ({ data }) => {
  console.log(data);
  return <div>hello</div>;
};

export const getServerSideProps = async (ctx) => {
  const records = await getClientsTable();

  const filtered = JSON.parse(JSON.stringify(records))
    .map((record) => record.fields)
    .filter(({ invoiced }) => invoiced[0] === ctx.query.invoice);

  return {
    props: {
      data: filtered,
    },
  };
};

export default Invoice;
