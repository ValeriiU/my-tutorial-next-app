"use client";

import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";

export default function Wiget({ myPreset }) {
  const [secureUrl, setSecureUrl] = useState("");
  const [originalFilename, setOriginalFilename] = useState("");

  function handleOnClick() {
    setSecureUrl("");
    setOriginalFilename("");
  }

  return (
    <>
      <p>Upload Widget</p>
      <CldUploadWidget
        uploadPreset={myPreset}
        options={{ folder: "my-test" }}
        onSuccess={(results) => {
          setSecureUrl(results.info.secure_url);
          setOriginalFilename(results.info.original_filename);
        }}
      >
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

      {secureUrl && (
        <>
          <div className="w-100 h-100">
            <img src={secureUrl} alt="Uploaded image" />
          </div>
          <p>Selected file: {originalFilename}</p>
          <p>Secure url: {secureUrl}</p>
          <button
            onClick={handleOnClick}
            className="inline-block py-2 px-4 rounded-full font-semibold uppercase text-white bg-slate-600 hover:bg-slate-500"
          >
            Ok
          </button>
        </>
      )}
    </>
  );
}
