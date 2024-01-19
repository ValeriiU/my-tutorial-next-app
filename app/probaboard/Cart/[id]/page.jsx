// import * as React from "react";
// import Image from "next/image";
// // import clsx from "clsx";
// import Link from "next/link";
import dataJson from "../../../lib/dataJson";
// import TrendingSlider from "../../ui/probaboard/Card/TrendingSlider/TrendingSlider";

export const metadata = {
  title: "Cart",
  description: "My Cart Page",
};
export default function Page() {
  // const id = Number(product.id);
  const res = [];
  if (dataJson.products && dataJson.products.product) {
    dataJson.products.product.forEach((product) => {
      res.push(product.id);
    });
  } else {
    console.error("Products or product property is undefined in dataJson");
  }
}
