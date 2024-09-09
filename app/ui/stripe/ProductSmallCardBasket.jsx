'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useBasket, useCookies } from '@/app/hooks';

import { deleteProductById } from '@/app/lib/actions';

import { stringifyPath } from '@/app/ui/utils';

import { AddingInBasket } from '@/app/ui/components/addingInBasket';
import { ButtonSubmitWithSvg } from '@/app/ui/components/buttons';

import { TrashIcon } from '@/public/icons';

import { montserratMedium500 } from '@/public/fonts';
import { Suspense } from 'react';

export function ProductSmallCardBasket({
  product,
  FLAG = null,
  setIsModalOpen,
}) {
  const { SSID } = useCookies();
  const { basketUpdateTrigger, setBasketUpdateTrigger } = useBasket();

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('id', product.id);
    formData.append('session_id', SSID);

    await deleteProductById(formData);
    setBasketUpdateTrigger(!basketUpdateTrigger);
  };

  return (
    <li className="flex bg-primary-100 p-2">
      <Image
        src={product.img_url ? product.img_url[0] : '/images/defaultImg.png'}
        alt={product.img_url ? product.make : 'Default product image'}
        className="object-content my-auto block object-center"
        width={96}
        height={96}
        priority={true}
      />

      <div className="ml-4 flex flex-col justify-between">
        <Link
          href={`/sklep/${stringifyPath(product)}`}
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          <p
            className={`${montserratMedium500.className} text-body2 hover:text-accent-500 hover:underline focus:text-accent-500 focus:underline`}
          >
            {product.make}
          </p>
        </Link>

        <div className="flex-between h-[44px]">
          <p>{product.discounted_price.replace('.', ',')}zł</p>

          <form onSubmit={handleSubmit}>
            <ButtonSubmitWithSvg
              buttonSvgComponent={<TrashIcon />}
              buttonStyle="flex-center h-[44px] w-[44px] smooth-transition stroke-accent-500 hover:stroke-accent-200 focus:stroke-accent-200 active:stroke-accent-400"
            />
          </form>
        </div>

        <div className="flex-between">
          <Suspense>
            <AddingInBasket
              maxQuantity={Number(product.available_quantity)}
              productId={product.id}
              FLAG={FLAG}
              basketQuantity={product.basket_quantity}
            />
          </Suspense>

          <p className={`${montserratMedium500.className} text-body-large`}>
            {product.total_cost.replace('.', ',')}
            zł
          </p>
        </div>
      </div>
    </li>
  );
}

//product.quantity
