import ItemCards from "../../ui/probaboard/Item-cards";
import { Suspense } from "react";
import ListSkeleton from "../../ui/probaboard/ListSkeleton/ListSkeleton";

export const metadata = {
  title: "Home",
  description: "My Home Page",
};
export default async function Page() {
  return (
    <main>
      <div className="probaboardPage flex flex-wrap gap-3 mt-6 ">
        <Suspense fallback={<ListSkeleton />}></Suspense>
        {/* <Suspense fallback={<LatestInvoicesSkeleton />}> */}
        <ItemCards />
        {/* </Suspense> */}
      </div>
    </main>
  );
}
