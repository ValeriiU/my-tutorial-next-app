// РОБОЧИЙ ВАРІАНТ ДЛЯ СТРУКТУРИ ОТРИМАННЯ ДАНИХ З ФОРМИ ЯК В CheckoutButtonTest

// import { NextResponse } from 'next/server';

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// export async function POST(req, res) {
//   if (req.method === 'POST') {
//     const formData = await req.formData();

//     const price = Number(formData.get('price'));
//     console.log(price);
//     try {
//       // Create Checkout Sessions from body params.
//       const session = await stripe.checkout.sessions.create({
//         line_items: [
//           {
//             price_data: {
//               currency: 'usd',
//               unit_amount: price * 100,
//               product_data: { name: 'Lak' },
//             },
//             quantity: 1,
//           },
//         ],
//         mode: 'payment',

//         success_url: `${req.headers.get('origin')}/zamowienia/krok-czwarty`,
//         cancel_url: `${req.headers.get('origin')}/cancel`,
//       });
//       console.log(session.url);
//       return NextResponse.redirect(session.url, { status: 303 }); //ВІДМІННІСТЬ
//     } catch (err) {
//       console.log(err);
//       res.status(err.statusCode || 500).json(err.message);
//     }
//   } else {
//     res.setHeader('Allow', 'POST');
//     res.status(405).end('Method Not Allowed');
//   }
//   return NextResponse.json({ status: 'success' });
// }

// РОБОЧИЙ ВАРІАНТ ДЛЯ СТРУКТУРИ ОТРИМАННЯ ДАНИХ З ФОРМИ ЯК В FormThree
import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  if (req.method === "POST") {
    const formData = await req.formData();

    const price = Number(formData.get("price"));
    console.log(price);
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: "usd",
              unit_amount: price * 100,
              product_data: { name: "Lak" },
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${req.headers.get("origin")}/zamowienia/krok-czwarty`,
        cancel_url: `${req.headers.get("origin")}/cancel`,
      });
      console.log(session.url);
      return NextResponse.json({ url: session.url }); // Відповідь з URL сесії //ВІДМІННІСТЬ ВІД ВЕРХНЬОГО ВАРІАНТА
    } catch (err) {
      console.log(err);
      return NextResponse.json(
        { error: err.message },
        { status: err.statusCode || 500 }
      );
    }
  } else {
    return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
  }
}

// Ключові моменти:
// HTML форма (ЯК В CheckoutButtonTest): Браузер автоматично обробляє перенаправлення, коли сервер відповідає статусом перенаправлення (303 або 302).
// fetch (ДИВ FormThree - const response): JavaScript не обробляє перенаправлення автоматично, тому ви повинні вручну зчитувати URL з відповіді сервера і перенаправляти користувача за допомогою window.location.href.

// Пояснення змін:
// Серверний код:

// Замість NextResponse.redirect(session.url, { status: 303 }), тепер використовується NextResponse.json({ url: session.url }), щоб повернути JSON з URL сесії.
// Це дозволяє клієнтському коду зчитати URL і виконати перенаправлення вручну.
// Клієнтський код:

// Після успішного запиту fetch зчитується відповідь JSON.
// Якщо в отриманих даних є url, виконується перенаправлення за допомогою window.location.href.
// Таким чином, клієнтський код з fetch зможе правильно обробити відповідь від сервера і виконати перенаправлення на URL сесії Stripe.
