'use client';

import { useState, useEffect } from 'react';

import {
  DeliveryInfo,
  NotesOrder,
  InvoiceInfoCheckbox,
  OrderSummary,
  AcceptRulesPrivacyCheckbox,
} from '@/app/ui/components/order/main/stepNumberThree';

import { CheckoutButton } from '@/app/ui/components/order/stripe/CheckoutButton';
import { getSessionStorage } from '@/app/ui/utils';

export function FormThree({ dataInBasket }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [retrievedData, setRetrievedData] = useState(null);

  //  переформат загал. суми продуктів
  let sum = 0;
  if (dataInBasket.discountedTotalAmount) {
    sum = Number(dataInBasket.discountedTotalAmount.replace(',', '.'));
  }
  console.log(sum);

  useEffect(() => {
    let data = sessionStorage.getItem('form-data');
    if (data) {
      data = JSON.parse(data);
      setRetrievedData(data);
    }
  }, []);
  // console.log(retrievedData);

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('price', sum);

    try {
      setIsDisabled(true);
      const response = await fetch('/api/checkout_sessions', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        if (data.url) {
          window.location.href = data.url; // Перенаправлення на URL сесії
        } else {
          console.error('No URL found in the response.');
        }
      } else {
        console.error('Failed to create checkout session.');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
      setIsDisabled(false);
    }
  };

  return (
    <section className="main-container pb-[188px]">
      <form
        onSubmit={handleSubmit}
        className="inset-0 lap:flex lap:justify-between lap:gap-6 desk:mx-auto desk:w-[1016px]"
      >
        <div className="flex-col gap-6 lap:w-full">
          <DeliveryInfo isSubmitting={isSubmitting} />
          <InvoiceInfoCheckbox isSubmitting={isSubmitting} />
          <NotesOrder />
          <div className="block lap:hidden">
            <OrderSummary dataInBasket={dataInBasket} />
          </div>

          <div className="tab:flex-between inset-0 lap:flex-col">
            <div className="tab:w-[424px] lap:tab:w-full">
              <AcceptRulesPrivacyCheckbox isSubmitting={isSubmitting} />
            </div>
            <CheckoutButton isDisabled={isDisabled} />
          </div>
        </div>
        <div className="hidden lap:block lap:w-full">
          <OrderSummary dataInBasket={dataInBasket} />
        </div>
      </form>
    </section>
  );
}
