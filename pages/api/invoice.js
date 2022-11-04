import { deleteProducts } from '../../lib/airtable';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    await deleteProducts(JSON.parse(req.body));

    res.end();
  }
}
