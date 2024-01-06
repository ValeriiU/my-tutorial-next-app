"use client";

import { CldUploadWidget } from "next-cloudinary";

<CldUploadWidget uploadPreset="process.env.CLOUDINARY_UPLOAD_PRESET">
  {({ open }) => {
    return <button onClick={() => open()}>Upload an Image</button>;
  }}
</CldUploadWidget>;
