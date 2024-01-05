import Link from "next/link";

const HeaderPage = () => {
 
  return (
   <div className=" relative flex flex-grow h-[60px] items-center justify-between bg-gray-50 p-3 text-sm font-medium md:p-2 md:px-3 border-b-2 border-solid border-gray-200">
      <div className="flex  grow items-center justify-between  text-neutral-500 bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:p-2 md:px-3">
        <Link href="#">Header Page</Link>
      </div>

      <ul >
        {/* <span className="relative flex items-center justify-center w-53 h-53 border border-gray-300 bg-white rounded-full ">
          <svg className="flex w-[150px] h-[32px]">
            <use link href="/app/public/search-outline.svg"></use>
          </svg>
        </span> */}
        <li >
          <form id="" className=" flex flex-row py-0.5 0 text-sm h-12.5 rounded-full" name="product-search" action="/uk/search" method="get" data-url="#">
            <div className="relative w-full m-0">
              <input  type="text" className="flex form-control items-center justify-center w-15 h-9 border border-gray-300 bg-white rounded-full search-input" name="ProductSearch[searchQuery]" placeholder="Search"  autoComplete="off" />
              {/* <svg className="absolute  w-[25px] h-[auto] fill-gray-500 transition duration-150 ease-in-out">
                <use link href="/app/public/search-outline.svg"></use>
              </svg> */}
              <div class="absolute inset-y-0 right-0">
  <button type="submit" class="inline-flex aspect-square w-10 items-center justify-center text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 group-invalid:pointer-events-none group-invalid:opacity-80">
    <span class="sr-only">search</span>
    <svg xmlns="http://www.w3.org/2000/svg" class="lucide lucide-search h-4 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
        <Link href='#'>Cosmetics brands</Link>
      </div>

      <div className="flex h-[48px] grow items-center justify-center  text-neutral-500 bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
        <Link href='#'>Contacts</Link>
      </div>

        <ul className="flex h-[48px] grow items-center justify-center bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          {/* <li>
            <Link className="flex h-[48px] grow items-center justify-center bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3" href='#'>

            </Link>
          </li> */}
          {/* <li>
            <Link className="flex h-[48px] grow items-center justify-center  bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3" href='#'>
            </Link>
          </li> */}
          <li>
            <Link className="" href='#'>
            </Link>
          </li>
        </ul>
      </div>
  
  );
};

export default HeaderPage;