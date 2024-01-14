// import React from 'react';
import dataJson from '../../../lib/dataJson';
import Card from "../../../ui/probaboard/Card/card";
import NavigateToBack from "../../../ui/probaboard/NavigateToBack/NavigateToBack";
import ButtonAddProductCart from "../../../ui/probaboard/Card/ButtonAddProductToCart";
// import Image from "next/image";

export default function Page({params}) {

const  id  = Number(params.id);
  const productById = dataJson.products.find(item => item.id === id);
   return (
    <section className='relative'>
       <NavigateToBack />
       <div className='flex flex-row text-decoration-none p-0 w-[auto] h-{auto} mt-5 mb-0 ml-0 mr-0 cursor-pointer  border  shadow-lg rounded-lg border-solid border-gray-300 '>
         <Card
        product={productById}
         key={productById.id}>
      </Card>
      
    <ButtonAddProductCart /></div>

    </section>
  );
}