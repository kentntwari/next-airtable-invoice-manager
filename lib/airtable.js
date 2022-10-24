const Airtable = require('airtable');

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID);

const clientsTable = base(process.env.AIRTABLE_CLIENTS_TABLE);
const productsTable = base(process.env.AIRTABLE_PRODUCTS_TABLE);

export function getClientsTable() {
  return clientsTable
    .select({
      fields: [
        'first_name',
        'last_name',
        'invoiced',
        'invoice_id',
        'invoice_status',
        'invoice_due_date',
        'total_purchases',
      ],
    })
    .all();
}

export function getProductsTable() {
  return productsTable.select({
    fields: [
      'description',
      'street (from shipped_from)',
      'city (from shipped_from)',
      'post_code (from shipped_from)',
      'country (from shipped_from)',
    ],
  });
}
