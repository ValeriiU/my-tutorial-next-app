import { revalidatePath } from "next/cache";
import { v2 as cloudinary } from "cloudinary";
import { CldUploadWidget } from "next-cloudinary";

import CldImage from "../../ui/admin/CldImage";
import Button from "../../ui/admin/Button";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const metadata = {
  title: "Admin",
  description: "My Admin Page",
};

interface CloudinaryResource {
  context?: {
    alt?: string;
    caption?: string;
  };
  public_id: string;
  secure_url: string;
}

async function AdminPage() {
  // const { CLOUDINARY_UPLOAD_PRESET } = process.env;
  // console.log(CLOUDINARY_UPLOAD_PRESET);
  // const myPreset = process.env.CLOUDINARY_UPLOAD_PRESET;
  // console.log(myPreset);

  const { resources: images } = await cloudinary.api.resources_by_tag(
    "nextjs-server-actions-upload-images",
    { context: true }
  );

  async function create(formData: FormData) {
    "use server";
    const file = formData.get("image") as File;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            tags: ["nextjs-server-actions-upload-images"],
          },
          function (error, result) {
            if (error) {
              reject(error);
              return;
            }
            resolve(result);
          }
        )
        .end(buffer);
    });
    revalidatePath("/");
  }

  return (
    <>
      <p>Admin Page</p>;
      <h2 className="text-xl font-bold mb-4">Add a New Image</h2>
      <form
        action={create}
        className="bg-white border border-slate-200 dark:border-slate-500 rounded p-6 mb-6"
      >
        <p className="mb-6">
          <label htmlFor="image" className="block font-semibold text-sm mb-2">
            Select an Image to Upload
          </label>
          <input
            id="image"
            className="block w-full border-slate-400 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="file"
            name="image"
            required
          />
        </p>

        <Button>Submit</Button>
      </form>
      <h2 className="text-xl font-bold mb-4">Images</h2>
      <ul className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {images.map((image: CloudinaryResource) => {
          return (
            <li
              key={image.public_id}
              className="rounded overflow-hidden bg-white dark:bg-slate-700"
            >
              <div className="relative">
                <CldImage
                  width={400}
                  height={300}
                  src={image.public_id}
                  alt={image.context?.alt || ""}
                />
              </div>

              {image.context?.caption && (
                <div className="py-4 px-5">
                  <p className="mb-1 text-md font-bold leading-tight text-neutral-800 dark:text-neutral-50">
                    {image.context?.caption || ""}
                  </p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default AdminPage;
