"use client";

import { CldUploadWidget } from "next-cloudinary";

const myPreset = process.env.CLOUDINARY_UPLOAD_PRESET;
console.log(myPreset);

<CldUploadWidget uploadPreset="process.env.CLOUDINARY_UPLOAD_PRESET">
  {({ open }) => {
    return <button onClick={() => open()}>Upload an Image</button>;
  }}
</CldUploadWidget>;
