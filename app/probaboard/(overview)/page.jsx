// import CardWrapper, { Card } from '@/app/ui/dashboard/cards';
// import RevenueChart from '@/app/ui/dashboard/revenue-chart';
// import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
// import CardsWrapper from '@/app/ui/dashboard/cards'

// import { lusitana } from '@/app/ui/fonts';
// import { fetchCardData } from '@/app/lib/data';
// import { fetchRevenue } from '@/app/lib/data';
import ItemCards from '../../ui/probaboard/Item-card';
import { Suspense } from 'react';
import  ListSkeleton  from '../../ui/probaboard/ListSkeleton/ListSkeleton';
export default async function Page() {
    // const revenue = await fetchRevenue();
    // const latestInvoices = await fetchLatestInvoices();
    // const {
    //     numberOfInvoices,
    //     numberOfCustomers,
    //     totalPaidInvoices,
    //     totalPendingInvoices,
    //   } = await fetchCardData();
  return (
    <main>
      <h1 className="mb-4 text-xl md:text-2xl">
        Probaboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers" 
           /> */}
      
        {/* <Suspense fallback={<CardsSkeleton />}> */}
          {/* <CardWrapper /> */}
        {/* </Suspense> */}
      </div>
      <div className="mt-6 grid grid-cols-1">
         <Suspense fallback={<ListSkeleton />}>
        </Suspense>
        {/* <Suspense fallback={<LatestInvoicesSkeleton />}> */}
          <ItemCards />
        {/* </Suspense> */}
      </div>
    </main>
  );
}