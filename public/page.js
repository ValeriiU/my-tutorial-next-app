import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div>
        <Image
          src="https://res.cloudinary.com/daizdx4p7/image/upload/v1697900893/buick_enclave_uga3b2.jpg"
          alt="Car"
          width={200}
          height={60}
          priority
        />
      </div>
    </main>
  );
}
