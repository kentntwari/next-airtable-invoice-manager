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
        'email',
        'invoiced',
        'invoice_id',
        'invoice_status',
        'invoice_created_date',
        'invoice_due_date',
        'invoice_payment_terms',
        'total_purchases',
        'lives_at_street',
        'lives_at_city',
        'lives_at_post_code',
        'lives_at_country',
      ],
    })
    .all();
}

export function getProductsTable() {
  return productsTable
    .select({
      fields: [
        'invoiced',
        'description',
        'product_name',
        'quantity',
        'price',
        'shipped_from_street',
        'shipped_from_city',
        'shipped_from_post_code',
        'shipped_from_country',
      ],
    })
    .all();
}
export function deleteProducts(arr) {
  return productsTable.destroy(arr, function (err) {
    if (err) {
      console.error(err);
      return;
    }
  });
}
