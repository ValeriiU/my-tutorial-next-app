import React from "react";
import Image from "next/image";
import ImgNoImage from "/app/public/noImages.png";

const ListSkeleton = () => {
  return (
    <>
      {/* <NavigateToBack /> */}
      <div className="listSkeleton flex flex-col h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white relative border-neutral-200 dark:border-neutral-200>">
        <div className="flex flex-col">
          <Image
            src={ImgNoImage}
            className="block w-[274px] h-[254px]"
            width={274}
            height={254}
            alt="No image"
            priority
          />
        </div>

        <div>
          <h1>Model</h1>
          <p>
            <span>Prise</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ListSkeleton;
