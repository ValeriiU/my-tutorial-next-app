'use client';

import { useState, useEffect } from 'react';

import { useOrder } from '@/app/hooks';
import {
  isOrderFormValid,
  parseDataOrder,
  auditAvailableProduct,
} from '@/app/ui/utils';
import { updateBasketStatus } from '@/app/lib/actions';
import { getProductListBasket } from '@/app/lib/utils';

import {
  DeliveryInfo,
  NotesOrder,
  InvoiceInfoCheckbox,
  OrderSummary,
  AcceptRulesPrivacyCheckbox,
  InvoiceDetails,
} from '@/app/ui/components/order/main/stepNumberThree';
import { CheckoutButton } from '@/app/ui/components/order/stripe/CheckoutButton';

import {
  requiredFieldsOrderForm,
  requiredFieldsOrderFormForFirma,
} from '@/app/ui/data';

export function FormThree({ dataInBasket, SSID }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailIsFailed, setEmailIsFailed] = useState(false);
  const [noAvailableProduct, setNoAvailableProduct] = useState(false);
  const [auditBasketdata, setAuditBasketdata] = useState(dataInBasket);

  const { formData: retrievedData } = useOrder();
  const { totalSumInCent } = parseDataOrder(dataInBasket, retrievedData);

  let basketStatus = auditBasketdata?.statusBasket;

  let formIsComplete;
  if (retrievedData?.checkFirma === true) {
    formIsComplete = isOrderFormValid(
      retrievedData,
      requiredFieldsOrderFormForFirma
    );
  } else {
    formIsComplete = isOrderFormValid(retrievedData, requiredFieldsOrderForm);
  }

  useEffect(() => {
    if (SSID) {
      (async () => {
        try {
          const res = await updateBasketStatus(SSID, 'audit');
          console.log(res);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [SSID, emailIsFailed]);

  useEffect(() => {
    (async () => {
      if (SSID) {
        try {
          const res = await getProductListBasket(SSID);
          setAuditBasketdata(res);
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [SSID, formIsComplete, isSubmitting]);

  useEffect(() => {
    if (auditBasketdata?.dataProductListBasket?.length !== 0) {
      const res = auditAvailableProduct(auditBasketdata);
      console.log(res);

      setNoAvailableProduct(res);
    }
  }, [auditBasketdata, formIsComplete, isSubmitting]);

  console.log(auditBasketdata);
  console.log(formIsComplete);
  console.log(isSubmitting);

  console.log(noAvailableProduct);
  console.log(basketStatus);
  console.log(emailIsFailed);

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log(noAvailableProduct);

    if (
      formIsComplete === true &&
      noAvailableProduct === true &&
      emailIsFailed === false
    ) {
      window.location.href = '/zamowienia/krok-pierwszy';
    }

    if (
      formIsComplete === true &&
      noAvailableProduct === false &&
      emailIsFailed === false
    ) {
      try {
        const res = await updateBasketStatus(SSID, 'payment');
        basketStatus = res[0]?.status;
      } catch (error) {
        console.error('Error:', error);
      }
    }
    console.log(emailIsFailed);
    console.log(basketStatus);

    if (formIsComplete === true && noAvailableProduct === false) {
      const formData = new FormData();
      formData.append('dataInBasket', JSON.stringify(dataInBasket));
      formData.append('retrievedData', JSON.stringify(retrievedData));
      formData.append('totalAmount', totalSumInCent);
      formData.append('SSID', SSID);

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

          setEmailIsFailed(true);

          setTimeout(function () {
            setEmailIsFailed(false);
          }, 4000);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsDisabled(false);
      }
    }
  };

  return (
    <section className="main-container">
      <form
        onSubmit={handleSubmit}
        className="lap:flex lap:justify-between lap:gap-6 desk:mx-auto desk:w-[1016px]"
      >
        <div className="flex-col gap-6 lap:w-full">
          <DeliveryInfo isSubmitting={isSubmitting} />
          <InvoiceInfoCheckbox />
          {retrievedData?.checkFirma === true && (
            <InvoiceDetails isSubmitting={isSubmitting} />
          )}
          <NotesOrder />
          <div className="block lap:hidden">
            <OrderSummary dataInBasket={dataInBasket} />
          </div>

          <div className="tab:flex-between inset-0 lap:flex-col">
            <div className="tab:w-[424px] lap:tab:w-full">
              <AcceptRulesPrivacyCheckbox isSubmitting={isSubmitting} />
            </div>
            <CheckoutButton
              isDisabled={isDisabled}
              formIsComplete={formIsComplete}
              retrievedData={retrievedData}
              isSubmitting={isSubmitting}
              emailIsFailed={emailIsFailed}
            />
          </div>
        </div>
        <div className="hidden lap:block lap:w-full">
          <OrderSummary dataInBasket={dataInBasket} />
        </div>
      </form>
    </section>
  );
}
