'use client';

import { useEffect } from 'react';
import { stripePromise } from '@/app/lib/utils';

import { ButtonWithTextAndSvg } from '@/app/ui/components/buttons';
import { SpinIconComponent } from '@/app/ui/components/common';

const stripeP = stripePromise;

const styleButton =
  'primary-btn w-full tab:w-[238px] lap:w-full h-14 disabled:cursor-not-allowed';

export function CheckoutButton({ isDisabled }) {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    console.log(query);

    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log(
        'Order canceled -- continue to shop around and checkout when you*re ready.'
      );
    }
  }, []);

  return (
    <ButtonWithTextAndSvg
      role="link"
      buttonType="submit"
      buttonParagrafText="Potwierdzam i płacę"
      buttonStyle={`${styleButton} font-semibold`}
      buttonSvgComponent={isDisabled ? <SpinIconComponent /> : ''}
    />
  );
}
