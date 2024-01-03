"use client";
const { CldImage: NextCldImage } = require("next-cloudinary");

const CldImage = (props) => {
  return <NextCldImage {...props} />;
};

module.exports = CldImage;
