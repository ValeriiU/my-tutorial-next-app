"use client";

import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";

export default function Page() {
  const [resource, setResource] = useState();

  // console.log(imageUrl);
  // const myPreset = process.env.CLOUDINARY_UPLOAD_PRESET;
  // const { CLOUDINARY_UPLOAD_PRESET } = process.env;
  // console.log(CLOUDINARY_UPLOAD_PRESET);

  return (
    <>
      <p>Customers Page</p>
      <CldUploadWidget uploadPreset="imhlj8iy" options={{ folder: "my-test" }}>
        {({ open }) => {
          return (
            <button
              onClick={() => open()}
              className="inline-block py-2 px-4 rounded-full font-semibold uppercase text-white bg-slate-600 hover:bg-slate-500"
            >
              Upload Image
            </button>
          );
        }}
      </CldUploadWidget>

      {/* <CldUploadWidget
        uploadPreset="imhlj8iy"
        onSuccess={(result, { widget }) => {
          setResource(result?.info);

          widget.close();
        }}
      >
        {({ open }) => {
          function handleOnClick() {
            setResource(undefined);
            open();
          }
          return (
            <button
              onClick={handleOnClick}
              className="inline-block py-2 px-4 rounded-full font-semibold uppercase text-white bg-slate-600 hover:bg-slate-500"
            >
              Upload Image
            </button>
          );
        }}
      </CldUploadWidget> */}
      {/* <p>{imageUrl}</p> */}
    </>
  );
}
