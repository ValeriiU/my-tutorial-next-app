
import Link from "next/link";

const FooterPage = () => {


  return (
    // <div className="flex h-[48px] items-center justify-between gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium  md:p-2 md:px-4">
     <div className="flex h-[48px] grow items-center justify-evenly gap-2 rounded-md bg-gray-100 p-3 text-sm font-medium  ">
            <Link className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-100 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3" href="#">Contacts</Link>
            <Link className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-100 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3" href='#'>Social media</Link>
    </div>
      
    // </div>
  );
};

export default FooterPage;