// import { fetchCard } from "../../lib/fetchCard";
// import { fetchCard } from "../../lib/fetchCard";
import * as React from "react";
import Image from "next/image";
// import clsx from "clsx";
import Link from "next/link";

// import NavigateToBack from "../../../ui/probaboard/Card/ButtonAddProductToCart";
import ButtonAddProductCart from "../../../ui/probaboard/Card/ButtonAddProductToCart";
// import shoppingCart from "../../public/shoppingCart.svg"

export default async function Card({ product }) {
  return (
    <div className=" flex flex-col ">
      <div className="flex flex-wrap ">
        <Link
          className="flex  flex-col"
          href={`probaboard/product/${product.id}`}
        >
          <div className="">
            <Image
              src={product.images[0]}
              alt={product.title + product.description}
              className=" block m-0 w-[228px] h-[230px] mb-1"
              width={250}
              height={300}
            />
          </div>
          </Link>
          <div className="flex flex-col items-center  size-2.5 w-[250px] ">
            <Link href={`probaboard/product/${product.id}`}>
              <div className=" flex flex-col p-auto  w-max items-center justify-center">
                <h1 className="text-center items-center text-lg mb-2">
                  {" "}
                  {product.title}
                </h1>
                <h3 className="text-center text-lg mb-2"> {product.brand}</h3>
                <h3 className="text-center text-sm mb-2">
                  {" "}
                  {product.price + " PL"}
                </h3>
              </div>
            </Link>
          </div>
        {/* </Link> */}
      </div>
      <div>
        <Link href={`probaboard/id/${product.id}`}>
          <ButtonAddProductCart
            product={product.id}
            key={product.id}
          ></ButtonAddProductCart>
        </Link>
      </div>
    </div>
  );
}
