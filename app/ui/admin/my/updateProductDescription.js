'use server';

import { sql } from '@vercel/postgres';

export async function updateProductDescription(id, data_p1, data_p2, data_use) {
  try {
    const data = await sql`
      UPDATE public.description 
      SET  
         descr_p1 = ${JSON.stringify(data_p1)}::jsonb,
         descr_p2 = ${JSON.stringify(data_p2)}::jsonb,
         use_prod = ${JSON.stringify(data_use)}::jsonb   
      WHERE id = ${id}
      RETURNING id
    `;

    const updateId = data.rows;
    return updateId;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to update data.');
  }
}
