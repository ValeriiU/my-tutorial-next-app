import { fetchCatalog } from "../../lib/data";
import Image from 'next/image';
import clsx from 'clsx';

export default async function ItemCards() { // Remove props
  const CardsCatalog = await fetchCatalog();   
  return (
    <div className="flex flex-col ">
      <h2 > Item Cards </h2>

        <div className="bg-white px-6 flex flex-row grid-flow-row">
          {CardsCatalog.map((fetchCatalog, i) => {
            return (
              <ul
                key={fetchCatalog.id}
                className={clsx(
                  'flex  flex-row items-center justify-between py-4',
                //   {
                //     'border-t': i !== 0,
                //   },
                )}
              >
                <li className="flex w-270 h-300 flex-col items-center justify-between  bg-white">
                  <Image
                    src={fetchCatalog.img_url}
                    alt={`${fetchCatalog.prise.toString()}'s profile picture`}
                    className="mr-4 "
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
                    <p className="flex items-center justify-between border-2 border-color: rgb(0 0 0)   mt-2"> MODEL:  
                  {fetchCatalog.make}
                    </p>
                    <p className="flex items-center justify-between border-2 border-color: rgb(0 0 0)   mt-2"> PRISE:  
                  {fetchCatalog.prise}
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
