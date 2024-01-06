"use client";

import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";

export default function Page() {
  const [resource, setResource] = useState();
  // const myPreset = process.env.CLOUDINARY_UPLOAD_PRESET;
  // const { CLOUDINARY_UPLOAD_PRESET } = process.env;
  // console.log(CLOUDINARY_UPLOAD_PRESET);

  return (
    <>
      <p>Customers Page</p>
      {/* <CldUploadWidget uploadPreset="imhlj8iy">
        {({ open }) => {
          return <button onClick={() => open()}>Upload 1 an Image</button>;
        }}
      </CldUploadWidget> */}

      <CldUploadWidget
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
          return <button onClick={handleOnClick}>Upload 3 an Image</button>;
        }}
      </CldUploadWidget>
    </>
  );
}
