import dataJson from  "../../lib/dataJson"
import Card from "./Card/card";
import ButtonAddProductCart from "./Card/ButtonAddProductToCart";


export default async function ItemCards() {
    'use server'

  return (
    <div >
      <h2 className="text-lg "> Item Cards </h2>
      <div className=" flex flex-wrap  relative list-none gap-[15px] p-0 mb-0 justify-around ">
         {dataJson.products.map((product) => (
        
          <Card
          product={product}
            key={product.id}>
          <ButtonAddProductCart/>
          </Card>
         ))}
        

      </div>

    </div>
  );
}