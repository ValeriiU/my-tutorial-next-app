import Link from "next/link";
const HeaderPage = () => {
 

  return (
    <div className="flex h-[48px] grow items-center justify-between bg-gray-50 p-3 text-sm font-medium  md:p-2 md:px-3 border-b-2 border-solid border-color: #ececec;">
      <div className="flex h-[48px] grow items-center justify-between bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100  hover:text-blue-600  md:p-2 md:px-3">
        <Link href="#">Header Page</Link>
      </div>

      <div className="flex h-[48px] grow items-center justify-center bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
        <Link href='#'>Cosmetics brands</Link>
      </div>

      <div className="flex h-[48px] grow items-center justify-center bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
        <Link href='#'>Contacts</Link>
      </div>

        <ul className="flex h-[48px] grow items-center justify-center bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <li>
            <Link className="flex h-[48px] grow items-center justify-center bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3" href='#'>

            </Link>
          </li>
          <li>
            <Link className="flex h-[48px] grow items-center justify-center  bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3" href='#'>
            </Link>
          </li>
          <li>
            <Link className="" href='#'>
            </Link>
          </li>
        </ul>
      </div>
  
  );
};

export default HeaderPage;