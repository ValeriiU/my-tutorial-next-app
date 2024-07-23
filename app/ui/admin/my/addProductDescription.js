'use server';

import { sql } from '@vercel/postgres';

export async function addProductDescription(data_p1, data_p2, data_use) {
  try {
    // const data = await sql`
    //   INSERT INTO public.description (id, descr_p1, descr_p2, use_prod)
    //   VALUES (DEFAULT,
    //     ${JSON.stringify(data_p1)}::jsonb,
    //     ${JSON.stringify(data_p2)}::jsonb,
    //     ${JSON.stringify(data_use)}::jsonb
    //   )
    //   RETURNING id
    // `;

    // const descrId = data.rows;
    // return descrId;

    const data = await sql`
    INSERT INTO public.description (id, descr_p1, descr_p2, use_prod)
    VALUES (DEFAULT, 
      ${JSON.stringify(data_p1)}::jsonb,
      ${JSON.stringify(data_p2)}::jsonb,
      ${JSON.stringify(data_use)}::jsonb
    )
    RETURNING id, descr_p1, descr_p2, use_prod
  `;

    const descrData = data.rows;
    return descrData;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to insert data.');
  }
}
