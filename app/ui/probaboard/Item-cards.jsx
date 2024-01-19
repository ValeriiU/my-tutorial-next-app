import dataJson from "../../lib/dataJson";
import Card from "./Card/card";
// import ButtonAddProductCart from "../../ui/probaboard/ButtonGoToFavorite";


export default async function ItemCards() {
  // "use server";

  return (
    <div className="itemCard">
      <h2 className="text-lg "> Home </h2>
      <div className=" flex flex-wrap relative list-none gap-[15px] p-0 mb-0 justify-around   ">
        {dataJson.products.map((product) => (
          <div
            className="itemCardMap relative  rounded-lg block  object-cover items-center justify-around  w-[232px] h-[340px] m-0 size-full mb-3 border  shadow-lg hover:border-blue-600 border-solid border-gray-300 "
            key={product.id}
          >
            <Card
              product={product}>
        
            </Card>
            {/* <ButtonAddProductCart /> */}
          </div>
        ))}
      </div>
    </div>
  );
}
