import { fetchCard } from "../../lib/fetchCard";
import Image from "next/image";
import clsx from "clsx";
import NavigateToBack from "./NavigateToBack/NavigateToBack"
import shoppingCart from "../../public/shoppingCart.svg"

export default async function Card() {
  // Remove props
  const CardsCatalog = await fetchCard();
  return (
<>

    <div className="flex flex-col m-2 ">
      <h2> Card</h2>
<NavigateToBack   />
      <div className="flex flex-row relative list-none p-0 m-2 justify-around ">
        {CardsCatalog.map((fetchCard) => {
          return (
            <ul
              key={fetchCard.id}
              className={clsx(
                "flex flex-wrap text-decoration-none p-5 w-full mt-0 mb-0 ml-0 mr-0 cursor-pointer  border  shadow-lg rounded-lg border-solid border-gray-300 "
                //   {
                //     'border-t': i !== 0,
                //   },
              )}
            >
              <li className="flex flex-row size-2.5 hover:size-full items-center   bg-white box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);">
                <Image
                  src={fetchCard.img_url}
                  alt={`${fetchCard.prise.toString()}'s profile picture`}
                  className="m-4 size-2.5 hover:size-full "
                  width={384}
                  height={256}
                />
              </li>
                 <li className="flex flex-col m-2 items-start text-sm font-semibold text-gray-500 justify-start " >
                   <p
                  className="p-2 px-2 border-t-0 border-r-1 border-b-1 border-l-1 border-eee border-solid"
                >
                  {" "}
                  MODEL:
                  {" " + fetchCard.make}
                </p>
                <p
                  className="m-0 p-2 px-2 border-t-0 border-r-1 border-b-1 border-l-1 border-eee border-solid"
                >
                  {" "}
                  PRISE:
                  {" " + "$" + fetchCard.prise}
                </p>
             
              </li>
                     <div className="absolute inset-y-3 right-[15px] ">
                  <button type="submit" className="inline-flex aspect-square p-auto w-10 items-center justify-center text-neutral-700 hover:text-blue-600 group-invalid:pointer-events-none group-invalid:opacity-80">
                    <span className="absolute w-1 h-1 p-0 m-0 overflow-hidden clip-rect(0, 0, 0, 0) whitespace-nowrap border-0">cart</span>
                   <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 3H3.63568C4.14537 3 4.59138 3.34265 4.7227 3.83513L5.1059 5.27209M7.5 14.25C5.84315 14.25 4.5 15.5931 4.5 17.25H20.25M7.5 14.25H18.7183C19.8394 11.9494 20.8177 9.56635 21.6417 7.1125C16.88 5.89646 11.8905 5.25 6.75 5.25C6.20021 5.25 5.65214 5.2574 5.1059 5.27209M7.5 14.25L5.1059 5.27209M6 20.25C6 20.6642 5.66421 21 5.25 21C4.83579 21 4.5 20.6642 4.5 20.25C4.5 19.8358 4.83579 19.5 5.25 19.5C5.66421 19.5 6 19.8358 6 20.25ZM18.75 20.25C18.75 20.6642 18.4142 21 18 21C17.5858 21 17.25 20.6642 17.25 20.25C17.25 19.8358 17.5858 19.5 18 19.5C18.4142 19.5 18.75 19.8358 18.75 20.25Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                  </button>
                </div>
            </ul>
          );
        })}
      </div>
      {/* <div className="flex items-center pb-2 pt-6"> */}
      {/* <ArrowPathIcon className="h-5 w-5 text-gray-500" /> */}
      {/* <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3> */}
      {/* </div> */}
      </div>
      </>
  );
}


