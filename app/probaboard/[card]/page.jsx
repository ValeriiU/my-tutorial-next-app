
import Card from '../../ui/probaboard/card';
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
       Card
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      </div>
      <div className="mt-6 grid grid-cols-1">
     
        {/* <Suspense fallback={<LatestInvoicesSkeleton />}> */}
          <Card />
        {/* </Suspense> */}
      </div>
    </main>
  );
}