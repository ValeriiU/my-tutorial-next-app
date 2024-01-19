// import React from 'react';
import dataJson from "../../../lib/dataJson";
// import Card from "../../../ui/probaboard/Card/card";
import NavigateToBack from "../../../ui/probaboard/NavigateToBack/NavigateToBack";
// import ButtonAddProductCart from "../../../ui/probaboard/Card/buttonAddProductToCart";
import CardFull from "../../../ui/probaboard/CardFull/cardFull";
import TrendingSlider from "../../../ui/TrendingSlider/TrendingSlider";
// import HeartNormal from "../../../public/heart-normal.svg"
// import HeartActive from "../../../public/heart-active.svg";
// import  TrendingSlider from "../../../ui/probaboard/Card/TrendingSlider/TrendingSlider";
// import {  } from " ";
// import SliderInCard from "../../../ui/probaboard/Card/SliderInCard/SliderInCard"
// import Image from "next/image";

export default function Page({ params }) {
  console.log(params);
  const id = Number(params.id);
  const productById = dataJson.products.find((item) => item.id === id);
  return (
    <section className="relative">
      <NavigateToBack />
      <div className="flex flex-row text-decoration-none p-0 w-[auto] h-{auto} mt-5 mb-0 ml-0 mr-0 cursor-pointer  border  shadow-lg rounded-lg border-solid border-gray-300 ">
        <CardFull product={productById} key={productById.id} />

      </div>
      <div className="flex flex-row text-decoration-none p-0 w-[auto] h-{auto} mt-5 mb-0 ml-0 mr-0 cursor-pointer  border  shadow-lg rounded-lg border-solid border-gray-300 ">
        <TrendingSlider product={productById} key={productById.id} />
      </div>
    </section>
  );
} 
