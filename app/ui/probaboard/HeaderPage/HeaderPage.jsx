"use client";
import Link from "next/link";
import { useSearchParams } from 'next/navigation';
import searchOutline from  '../../../../app/public/shoppingCart.svg'

// import Search from './app/ui/probaboard/search';

const HeaderPage = () => {
  const searchParams = useSearchParams();
  return (
    <div className=" relative flex flex-grow h-[60px] items-center justify-between bg-gray-50 p-3 text-sm font-medium md:p-2 md:px-3 border-b-2 border-solid border-gray-200">
      <div className="flex  grow items-center justify-between  text-neutral-500 bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:p-2 md:px-3">
        <Link href="#">Header Page</Link>
      </div>

      <ul>
        {/* <span className="relative flex items-center justify-center w-53 h-53 border border-gray-300 bg-white rounded-full ">
          <svg className="flex w-[150px] h-[32px]">
            <use link href="/app/public/search-outline.svg"></use>
          </svg>
        </span> */}
        <li>
          <form
            className="  relative flex flex-row py-0  text-sm h-12.5 rounded-full"
            name="product-search"
            action="/uk/search"
            method="get"
            data-url="#"
          >
            <div className=" w-full m-0 ">
              <input
                type="text"
                className=" relative flex form-control p-3 m-3 items-center justify-center w-15 h-9 border border-gray-300 hover:border-blue-600 bg-white  rounded-full search-input"
                name="ProductSearch[searchQuery]"
                placeholder="Search"
                autoComplete="off"
                onChange={(e) => {
                  handleSearch(e.target.value);
                }}
                defaultValue={searchParams.get("query")?.toString()}
              />
              {/* <svg className="absolute  w-[25px] h-[auto] fill-gray-500 transition duration-150 ease-in-out">
                <use link href="/app/public/search-outline.svg"></use>
              </svg> */}
              <div className="absolute inset-y-2.5 right-[10px] ">

                  <button type="submit" className="inline-flex aspect-square p-auto w-10 items-center justify-center text-neutral-500 hover:text-blue-600 group-invalid:pointer-events-none group-invalid:opacity-80">
                    <span className="absolute w-1 h-1 p-0 m-0 overflow-hidden clip-rect(0, 0, 0, 0) whitespace-nowrap border-0">search</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className=" h-5 " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </svg>
                  </button>
                </div>

            </div>
          </form>
        </li>
      </ul>

      <div className="flex h-[48px] grow items-center justify-center  text-neutral-500 bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
        <Link href="#">Cosmetics brands</Link>
      </div>

      <div className="flex h-[48px] grow items-center justify-center  text-neutral-500 bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
        <Link href="#">Contacts</Link>
      </div>


        <ul className="flex h-[48px] grow items-center justify-center bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <li>
            <Link className="" href='#'>
            </Link>
          </li>
        </ul>
      </div>


  );
};

export default HeaderPage;
