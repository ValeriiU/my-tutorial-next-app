"use client";

import { useFormStatus } from "react-dom";
import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";
import { createProduct } from "../../lib/actions";

export default function CreateForm({ myPreset }) {
  const { pending } = useFormStatus();
  const [secureUrl, setSecureUrl] = useState("");
  const [originalFilename, setOriginalFilename] = useState("");
  console.log(secureUrl);

  return (
    <div className="relative">
      <form action={createProduct}>
        <div>
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              Product name
            </label>
            <div className="relative mt-2 rounded-md">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter product name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-5 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="mb-2 block text-sm font-medium">
              Product price
            </label>
            <div className="relative mt-2 rounded-md">
              <input
                id="price"
                name="price"
                type="number"
                step="0.01"
                placeholder="Enter USD product price"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-5 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <p className="mb-2 block text-sm font-medium">Product image</p>
            {secureUrl && (
              <>
                <div className="mb-2 flex items-center justify-center overflow-hidden block w-[100px] h-[100px] border border-gray-200 ">
                  <img
                    src={secureUrl}
                    alt="Product image"
                    className="block object-cover h-full object-center"
                  />
                </div>

                <label
                  htmlFor="image"
                  className="mb-2 block text-sm font-medium"
                >
                  Image url selected file - "{originalFilename}"
                </label>
                <div className="relative mt-2 rounded-md">
                  <input
                    id="image"
                    name="image"
                    type="text"
                    defaultValue={secureUrl}
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-5 text-sm outline-2 placeholder:text-gray-500"
                  />
                </div>
              </>
            )}
          </div>
        </div>
        <button
          type="submit"
          aria-disabled={pending}
          className="inline-block py-2 px-4 rounded-full font-semibold uppercase text-white bg-green-600 hover:bg-green-500"
        >
          Create
        </button>
      </form>

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
              className="absolute left-28 top-40 inline-block py-2 px-4 rounded-full font-semibold uppercase text-white bg-slate-600 hover:bg-slate-500"
            >
              Upload Image
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
}
