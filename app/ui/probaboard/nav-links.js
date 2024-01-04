'use client';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';


const links = [
  {
    name: 'Home',
        href: '/probaboard'
    },
  {
    name: 'Favorites',
    href: '/probaboard/favorites',

    },
  //  {
  //   name: 'Invoices',
  //   href: '/probaboard/invoices',

  //   },

  //   {
  //       name: 'Customers',
  //       href: '/probaboard/customers' 
  // },
  //     {
  //       name: 'Cart',
  //       href: '/probaboard/cart' 
  // },
{
    name: 'Admin Page',
    href: '/admin',

    },  
];

export default function NavLinks() {
  const pathname = usePathname()
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
          key={link.name}
          href={link.href}
          className={clsx(
            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
            {
              'bg-sky-100 text-blue-700': pathname === link.href,
            },
          )}
        >
            {/* <LinkIcon className="w-6" /> */}
            <p className="">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
