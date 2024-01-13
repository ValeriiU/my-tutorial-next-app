// "use client";
// import * as React from "react";
import dataJson from "../../../lib/dataJson";
// import { useRouter } from "next/navigation";

export default function Page({ params }) {
  // const { query } = useRouter();

  // const id = { query };

  // if (!id) {
  //   return `Product not ID`;
  // }

  // const id = params.id;
  // const productById = dataJson.products.find((item) => item.id === Number(id));

  const id = Number(params.id);
  const productById = dataJson.products.find((item) => item.id === id);

  if (typeof id === "number") {
    console.log('Змінна id має тип "number".');
  } else {
    console.log("Змінна id не є числовою.");
  }

  console.log(productById);
  console.log(id);

  return (
    <div>
      <p>Product Id Page {id}</p>
    </div>
  );
}
