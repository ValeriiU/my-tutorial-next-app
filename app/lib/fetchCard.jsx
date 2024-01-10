import { sql } from '@vercel/postgres';
 


export async function fetchCard() {
  try {
    const data = await sql`
SELECT make,
       prise,
       img_url
FROM catalog_list
WHERE id = 4;
 `

    const fetchCatalog = data.rows;
    return fetchCatalog;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all fetchCatalog.');
  }
}