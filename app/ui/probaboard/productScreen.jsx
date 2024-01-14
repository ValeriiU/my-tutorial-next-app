"use client"
import React from 'react';
import dataJson from '../../lib/dataJson';


export default function ProductScreen(props) {

const { id } = props;
 if (!id ) {
  console.log('Invalid id provided');
  // Handle the invalid id case, for example, redirect to an error page

}
  const productById = dataJson.products.find(item => item.id === id);

  if (!productById) {
    // Handle the case where the product with the given id is not found
 console.log('змінна не немає тип " number')
  }
 console.log(id)
  return (
    <div>
      <p>{id} </p>

    </div>
  );
}


// import React, { FC } from "react";
// // import Image from "next/image";
// import Link from "next/link";
// import dataJson from '../../lib/dataJson';
// // import ButtonAddProductToCart from "../ButtonAddProductToCart/ButtonAddProductToCart";
// // import FlagLanguages from "../FlagLanguages/FlagLanguages";
// // import ButtonAddProductToFavorite from "../ButtonAddProductToFavorite/ButtonAddProductToFavorite";
// // import { formatPrice } from "@/helpers/formatNumber";
// // import styles from "./ProductCard.module.css";

// // interface IProps {
// //   product: IProduct;
// // }

// // const ProductCard = ({dataJson }) => {
// //  const products = dataJson.products || [];
// //   const images = product.images[0]?.dataJson;
// //   const urlImage = images ? product.images[1]: "/path/to/default-image.png"; // Provide a default image path

// const ProductCard = ({ dataJson }) => {
//   const products = dataJson.products || [];

//   return (
//     <div>
//       {products.map((product) => {
//         // const images = product.images[0]?.dataJson;
//         // const urlImage = images ? images[0].product.url : "/path/to/default-image.png"; // Provide a default image path

//         return (
//           <Link key={product.id} href={`/products/${product.slug}`}>
//             <a>
//               <SingleProductCard product={product} urlImage={urlImage} />
//             </a>
//           </Link>
//         );
//       })}
//     </div>
//   );
// };

// const SingleProductCard = ({ product, urlImage }) => {
//   // Your ProductCard component implementation here
// };