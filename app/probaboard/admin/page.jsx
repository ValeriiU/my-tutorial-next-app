import Wiget from "../../ui/admin/UploadWidget";

export const metadata = {
  title: "Admin",
  description: "My Admin Page",
};

const myPreset = process.env.CLOUDINARY_UPLOAD_PRESET;

export default function Page() {
  return (
    <>
      <p>Admin Page</p>
      <Wiget myPreset={myPreset} />
      <Wiget myPreset={myPreset} />
      <Wiget myPreset={myPreset} />
    </>
  );
}
