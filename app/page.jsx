import Link from "next/link";

// import Image from "next/image";
// test2
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-5">
      <div className="flex justify-between pt-1 pb-1">
        <div>
          <Link  href="/">Start Page</Link>
          <div >
            <Link href="/probaboard">Probaboard SideNav</Link>
          </div>
        </div>
      </div>
    </main>
  );

}
