import Link from 'next/link';
import NavLinks from '../../ui/probaboard/nav-links';
// import AcmeLogo from '@/app/ui/acme-logo';
// import { PowerIcon } from '@heroicons/react/24/outline';
// добавить функцию выхода из системы
// import { signOut } from '@/auth';

export default function SideNav() {
  return (
    <div className="flex h-full  flex-col px-3  py-4 md:px-2 bg-white" >
      <Link
        className="mb-2 flex h-20 items-center justify-start rounded-md bg-blue-600 p-4 md:h-20"
        href="/"
      >
        <div className=" justify-between flex w-32 text-white md:w-40 ">
          <p>START Page </p>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        {/* добавить функцию выхода из системы */}
        <form
          action={async () => {
            'use server';
            await signOut();
          }}>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            {/* <PowerIcon className="w-6" /> */}
            <div className="">
              <p>Sign Out</p>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
