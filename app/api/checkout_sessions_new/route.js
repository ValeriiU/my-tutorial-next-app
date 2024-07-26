import { NextResponse } from 'next/server';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  if (req.method === 'POST') {
    const formData = await req.formData();
    const listInBasket = formData.get('listInBasket');
    const retrievedData = formData.get('retrievedData');
    const percentDiscount = Number(formData.get('discount'));
    const promoAmount = Number(formData.get('promoAmount'));
    const deliveryInCent = Number(formData.get('delivery'));

    console.log(percentDiscount);
    console.log(promoAmount);
    console.log(deliveryInCent);

    // Десеріалізуємо JSON-рядок в масив об'єктів
    let products;
    try {
      products = JSON.parse(listInBasket);
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid JSON format' },
        { status: 400 }
      );
    }

    console.log(products); // Виведе масив об'єктів

    // Десеріалізуємо JSON-рядок в об'єкт
    let dataOrder;
    try {
      dataOrder = JSON.parse(retrievedData);
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid JSON format' },
        { status: 400 }
      );
    }

    console.log(dataOrder); // Виведе об'єкт
    const delivery = dataOrder.delivery;
    console.log(delivery);

    try {
      const lineItems = products.map(item => {
        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: item.make,
              images: item.img_url,
            },
            unit_amount: Math.round(item.discounted_price * 100),
          },
          quantity: item.basket_quantity,
        };
      });

      const discountCoupon = await stripe.coupons.create({
        percent_off: percentDiscount,
        duration: 'once',
      });

      // Додаємо вартість доставки як окремий елемент
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Dostawa',
          },
          unit_amount: Math.round(deliveryInCent),
        },
        quantity: 1,
      });

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        discounts: [
          {
            coupon: discountCoupon.id,
          },
        ],
        success_url: `${req.headers.get('origin')}/zamowienia/krok-czwarty`,
        cancel_url: `${req.headers.get('origin')}/cancel`,
      });
      console.log(session.url);
      return NextResponse.json({ url: session.url }); // Відповідь з URL сесії
    } catch (err) {
      console.log(err);
      return NextResponse.json(
        { error: err.message },
        { status: err.statusCode || 500 }
      );
    }
  } else {
    return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
  }
}
