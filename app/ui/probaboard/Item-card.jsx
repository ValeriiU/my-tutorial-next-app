// // import { fetchCatalog } from "../../lib/data";
import Image from "next/image";
// import clsx from "clsx";
import Link from "next/link";
import dataJson from  "../../lib/dataJson"
import Card from "./card";



export default async function ItemCards() {
    'use server'
    // const query = searchParams?.query || '';
    // const currentPage = Number(searchParams?.page) || 1;
  
  // const CardsCatalog = await fetchCatalog();
  return (
    <div >
      <h2 className="text-lg "> Item Cards </h2>
      <div className="  relative list-none grid-5 grid gap p-0 mb-0 justify-around">
        {/* {CardsCatalog.map((fetchCatalog, i) => { */}

        {dataJson.products.map((product) => (
          <Card
          product={product}
          key={product.id}>
          </Card>
        ) )}

      </div>

    </div>
  );
}