import Card from "../../ui/probaboard/card/card";
export default async function Page() {

  return (
    <main>
      <h1 className=" card mb-4 text-xl md:text-2xl">Card</h1>
      <div className=" card grid gap-6 sm:grid-cols-2 lg:grid-cols-4"></div>
      <div className=" card mt-6 grid grid-cols-1">
        {/* <Suspense fallback={<LatestInvoicesSkeleton />}> */}
        <Card />
        {/* <SliderInCard /> */}
        {/* </Suspense> */}
      </div>
    </main>
  );
}
