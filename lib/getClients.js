const Airtable = require('airtable');

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID);

export const table = base(process.env.AIRTABLE_CLIENTS_TABLE);

// export default async function getClients() {
//   try {
//     const records = await table.select().all();

//     return records;
//   } catch (err) {
//     console.error(err);
//   }
// }
