// import { fetchCard } from "../../lib/fetchCard";
import * as React from "react";
import Image from "next/image";
// import clsx from "clsx";
import Link from "next/link";
// import TrendingSlider from "../../TrendingSlider/TrendingSlider";

// import NavigateToBack from "../../../ui/probaboard/Card/ButtonAddProductToCart";
// import ButtonAddProductCart from "../../../ui/probaboard/Card/ButtonAddProductToCart";
// import shoppingCart from "../../public/shoppingCart.svg"

export default async function CardFull({ product }) {
  // Remove props
// console.log(product);
  return (
    <div className="relative flex flex-col ">
      <div className="flex  flex-wrap p-5  ">
        <div className="">
          <Link href={`probaboard/product/${product.id}`}>
            <Image
              // src={fetchCard.img_url}
              src={product.images[1]}
              alt={product.title + product.description}
              className=" block min-w-[248px] m-5 min-h-[260px] "
              width={100}
              height={256}
            />
          </Link>
          {/* <TrendingSlider product={product} key={product.id} /> */}
        </div>

        <div className="flex flex-col items-start m-5 size-2.5 w-[250px] ">
          {/* <Link href={`probaboard/product/${product.id}`}> */}
          <div>
            <h1 className="text-start text-lg mb-2"> {product.title}</h1>
            <h3 className="text-start text-lg mb-1"> {product.brand}</h3>
            <h3 className="text-start text-sm mb-1">
              {" "}
              {product.price + " PL"}{" "}
            </h3>
            <h3 className="text-start text-xs mb-1  ">
              {" "}
              description: {product.description}
            </h3>
            <h2 className="text-start text-xs mb-1 ">
              {" "}
              discount: {product.discountPercentage + " %"}
            </h2>
            {/* <h2 className="text-center text-xs mb-2 "> category:: {product.category} </h2> */}
          </div>
          {/* </Link> */}
        </div>
        {/* <ButtonAddProductCart/> */}
      </div>
    </div>
  );
    
}
//  console.log(TrendingSlider());