"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
// import ButtonGoToFavorite from "../../../ui/probaboard/ButtonGoToFavorite";
// import searchOutline from  '../../../../app/public/shoppingCart.svg'

// import Search from './app/ui/probaboard/search';

const HeaderPage = () => {
  const searchParams = useSearchParams();
  return (
    <div className=" relative flex flex-grow h-[60px] items-center justify-between bg-gray-50 p-3 text-sm font-medium md:p-2 md:px-3 border-b-2 border-solid border-gray-200">
      <div className="flex  grow items-center justify-between  text-neutral-500 bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:p-2 md:px-3">
        <Link href="#">Header Page</Link>

        {/* <div><ButtonGoToFavorite/></div> */}
      </div>
      <ul className="relative flex flex-row ">
        <li
          className="relative flex flex-row py-0 mx-8  text-sm h-12.5 rounded-full"
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
              <button
                type="submit"
                className="inline-flex aspect-square p-auto w-10 items-center justify-center text-neutral-500 hover:text-blue-600 group-invalid:pointer-events-none group-invalid:opacity-80"
              >
                <span className="absolute w-1 h-1 p-0 m-0 overflow-hidden clip-rect(0, 0, 0, 0) whitespace-nowrap border-0">
                  search
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" h-5 "
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </button>
            </div>
          </div>
        </li>
        <li className="heart transition fill-black hover:text-blue right-0  ">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            className="text-black transition absolute"
            height="32"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
          </svg>
        </li>
        <li className="relative flex h-[48px] grow items-center justify-center  text-neutral-500 bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <Link href="#">Cosmetics brands</Link>
        </li>
        <li className="absolute  heart transition fill-black hover:text-blue left-0 top-3.5 ">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            className="text-neutral-500 transition items-center justify-center   hover:bg-sky-100 hover:text-blue-600 "
            height="32"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
          </svg>
        </li>

        <li className="flex h-[48px] grow items-center justify-center  text-neutral-500 bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <Link href="#">Contacts</Link>
        </li>

        <li className="flex h-[48px] grow items-center justify-center bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <Link className="" href="#"></Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderPage;
