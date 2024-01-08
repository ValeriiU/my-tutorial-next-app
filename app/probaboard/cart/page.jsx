
// export default function Page() {
//   return <p className="mb-4 text-xl md:text-2xl">Cart Page</p>;
// }

// import Form from '@/app/ui/invoices/create-form';
// import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCatalog } from "../../lib/data";
import { Metadata } from 'next';

export const Metadata {
  title: 'Cart',
};
 
 
export default async function Page() {
  const Card = await fetchCatalog();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: 'CartsCatalog',
            href: '/probaboard/'
          },
          {
            label: 'Create Invoice',
            href: '/probaboard/cart',
            active: true,
          },
        ]}
      />
      <Form Card={Card} />
    </main>
  );
}