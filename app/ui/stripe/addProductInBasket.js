'use server';

import { sql } from '@vercel/postgres';

export async function addProductInBasket(data) {
  const { id, count, sessionId } = data;
  const quantity = Number(count);

  try {
    // Обчислення доступної кількості товару на складі з урахуванням інших кошиків крім поточного
    const result = await sql`
      SELECT cat.quantity - COALESCE(
        (SELECT SUM(b.product_quantity) 
         FROM public.basket b 
         WHERE b.product_id = ${id}
         AND b.session_id != ${sessionId}),
        0
      ) AS available_quantity
      FROM public.catalog cat
      WHERE cat.id = ${id}
    `;

    const availableQuantity = Number(result.rows[0]?.available_quantity);

    console.log(availableQuantity);

    // Оновлення кошика з урахуванням доступної кількості товару
    await sql`
      INSERT INTO public.basket (id, product_id, product_quantity, session_id)
      VALUES (DEFAULT, ${id}, ${quantity}, ${sessionId})
      ON CONFLICT ON CONSTRAINT unique_product_session_in_order 
      DO UPDATE SET
      product_quantity = LEAST(
        public.basket.product_quantity + EXCLUDED.product_quantity,
        ${availableQuantity}
      )
    `;
    // await sql`
    //   INSERT INTO public.basket (id, product_id, product_quantity, session_id)
    //   VALUES (DEFAULT, ${id}, ${Math.min(quantity, availableQuantity)}, ${sessionId})
    //   ON CONFLICT ON CONSTRAINT unique_product_session_in_order
    //   DO UPDATE SET
    //   product_quantity = LEAST(
    //     public.basket.product_quantity + EXCLUDED.product_quantity,
    //     ${availableQuantity}
    //   )
    // `;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to insert or update data.');
  }
}

//unique_product_session_in_order
//unique_product_session

// 'use server';

// import { sql } from '@vercel/postgres';

// export async function addProductInBasket(data) {
//   const { id, count, sessionId } = data;
//   const quantity = Number(count);

//   try {
//     await sql`
//       INSERT INTO public.basket (id, product_id, product_quantity, session_id)
//       VALUES (DEFAULT, ${id}, ${quantity}, ${sessionId})
//       ON CONFLICT ON CONSTRAINT unique_product_session_in_order
//       DO UPDATE SET
//       product_quantity = LEAST(public.basket.product_quantity + EXCLUDED.product_quantity,
//         (SELECT cat.quantity FROM public.catalog cat WHERE cat.id = public.basket.product_id))
//     `;
//   } catch (err) {
//     console.error('Database Error:', err);
//     throw new Error('Failed to insert or update data.');
//   }
// }
