import { fetchCatalog } from "../../lib/data";
import Image from "next/image";
import clsx from "clsx";


export default async function ItemCards() {
  // Remove props
  const CardsCatalog = await fetchCatalog();
  return (
    <div className="flex flex-col ">
      <h2> Item Cards </h2>

      <div className="flex flex-wrap relative list-none gap-3  p-0 mb-0 justify-around">
        {CardsCatalog.map((fetchCatalog, index) => {
          return (
            <ul
              key={fetchCatalog.id}
              className={clsx(
                "w-370 text-decoration-none mt-0 mb-0 ml-0 mr-0 cursor-pointer "
                //   {
                //     'border-t': i !== 0,
                //   },
              )}
            >
              <li className="flex size-2.5 hover:size-full flex-col  items-center justify-between  bg-white box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);">
                <Image
                  src={fetchCatalog.img_url}
                  alt={`${fetchCatalog.prise.toString()}'s profile picture`}
                  className="m-4 size-2.5 hover:size-full "
                  width={170}
                  height={170}
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
