// "use client";
// const { CldImage: NextCldImage } = require("next-cloudinary");

// const CldImage = (props) => {
//   return <NextCldImage {...props} />;
// };

// module.exports = CldImage;

"use client";
import { CldImage as NextCldImage, CldImageProps } from 'next-cloudinary';

const CldImage = (props: CldImageProps) => {
  return <NextCldImage {...props} />
}

export default CldImage;