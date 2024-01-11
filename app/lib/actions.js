import { sql } from "@vercel/postgres";
// import { z } from "zod";

export async function createProduct(formData) {
  const rawFormData = {
    make: formData.get("name"),
    prise: formData.get("price"),
    img_url: formData.get("image"),
  };

  const { make, prise, img_url } = rawFormData;
  console.log(make);
  console.log(prise);
  console.log(img_url);

  try {
    await sql`
          INSERT INTO public.catalog_list (make, prise, img_url)
          VALUES (${make}, ${prise}, ${img_url})
          returning id
        `;
    return {
      message: "Create new product.",
    };
  } catch (error) {
    return {
      message: "Database Error: Failed to Create product.",
    };
  }
}
