// import Wiget from "../../ui/admin/UploadWidget";
import CreateForm from "../../ui/admin/create-form";

export const metadata = {
  title: "Admin",
  description: "My Admin Page",
};

const myPreset = process.env.CLOUDINARY_UPLOAD_PRESET;

export default function Page() {
  return (
    <>
      <p>Admin Page</p>
      <CreateForm myPreset={myPreset} />
      {/* <Wiget myPreset={myPreset} />
      <Wiget myPreset={myPreset} />
      <Wiget myPreset={myPreset} /> */}
    </>
  );
}
