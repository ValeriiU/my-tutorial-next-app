import React from "react";
import Image from "next/image";
import ImgNoImage from "/app/public/noImages.png";

const ListSkeleton = () => {
  return (
    <>
      {/* <NavigateToBack /> */}
      <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800>">
        <div >
          <Image
            src={ImgNoImage}
            height={500}
            width={500}
            alt="No image"
            priority
          />
        </div>

        <div >
          <h1>Name</h1>
          <p>
            prise: <span>Prise</span>
          </p>
      
        </div>
      </div>
 
    </>
  );
};

export default ListSkeleton;