// import { fetchCard } from "../../lib/fetchCard";
import * as React from "react";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

// import NavigateToBack from "../../../ui/probaboard/Card/ButtonAddProductToCart";
// import ButtonAddProductCart from "../../../ui/probaboard/Card/ButtonAddProductToCart";
// import shoppingCart from "../../public/shoppingCart.svg"

export default async function Card({ product }) {
  // Remove props

  return (
    <div className="relative flex flex-col " >
      <div className=
                "card gap-[15px]  text-decoration-none p-5 w-[270px] h-[420px] mb-0 ml-0 mr-0 cursor-pointer  border  shadow-lg rounded-lg border-solid border-gray-300 " >
        <Link  href={`probaboard/product/${product.id}`}>
          <Image
            // src={fetchCard.img_url}
            src={product.images[1]}
            alt={product.title + product.description}
            className="m-0 size-2.5 w-[270px] h-auto mb-3  hover:size-full rounded shadow-amber-300 max-w-full"
            width={100}
            height={256}
          />
        </Link>
        <div className="
                flex flex-col items-start size-2.5 hover:size-full bg-white box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);" >
          <Link href={`probaboard/product/${product.id}`}>
<div> <h1 className="text-center text-lg mb-2"> model: {product.title}</h1>
            <h3 className="text-center text-lg mb-1"> brand: {product.brand}</h3>
            <h3 className="text-center text-sm mb-1"> price: {product.price + " PL"} </h3>
            <h3 className="text-center text-xs mb-1 "> description: {product.description}</h3>
            <h2 className="text-center text-xs mb-1 "> discount: {product.discountPercentage + " %"} </h2>
            {/* <h2 className="text-center text-xs mb-2 "> category:: {product.category} </h2> */}</div>
           
               </Link>
  </div>
          {/* <ButtonAddProductCart/> */}
             
          {/* </ul> */}
      
      </div>
      {/* <div className="flex items-center pb-2 pt-6"> */}
      {/* <ArrowPathIcon className="h-5 w-5 text-gray-500" /> */}
      {/* <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3> */}
      {/* </div> */}
    </div>
  );
}
