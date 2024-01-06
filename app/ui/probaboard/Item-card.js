import { fetchCatalog } from "../../lib/data";
import Image from "next/image";
import clsx from "clsx";
import Card from "./Item-card";

export default async function ItemCards() {
    // Remove props
    
    <>
          <Card car={Card.id} />
    </>
  const CardsCatalog = await fetchCatalog();
  return (
    <div className="flex flex-col ">
      <h2> Item Cards </h2>

      <div className="flex flex-wrap relative list-none gap-3  p-0 mb-0 justify-around">
        {CardsCatalog.map((fetchCatalog, i) => {
          return (
            <ul
              key={fetchCatalog.id}
              className={clsx(
                " text-decoration-none mt-0 mb-0 ml-0 mr-0 cursor-pointer "
                //   {
                //     'border-t': i !== 0,
                //   },
              )}
            >
              <li className="  mb-3 rounded-lg bg-center bg-cover bg-no-repeat object-cover cursor-pointer">
                <Image
                  src={fetchCatalog.img_url}
                  alt={`${fetchCatalog.prise.toString()}'s profile picture`}
                  className="rounded-xl block w-[274px] h-[254px]   "
                  width={274}
                  height={254}
                />
                {/* <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {customers.prise}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {invoice.email}
                    </p>
                  </div> */}
                <p
                  className="p-2 px-2 border-t-0 border-r-1 border-b-1 border-l-1 border-eee border-solid"
                >
                  {" "}
                  MODEL:
                  {" " + fetchCatalog.make}
                </p>
                <p
                  className="m-0 p-2 px-2 border-t-0 border-r-1 border-b-1 border-l-1 border-eee border-solid"
                >
                  {" "}
                  PRISE:
                  {" " + "$" + fetchCatalog.prise}
                </p>
              </li>
            </ul>
          );
        })}
      </div>
      {/* <div className="flex items-center pb-2 pt-6"> */}
      {/* <ArrowPathIcon className="h-5 w-5 text-gray-500" /> */}
      {/* <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3> */}
      {/* </div> */}
    </div>
  );
}
