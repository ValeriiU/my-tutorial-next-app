import React from "react";
import TrendingSlider from "../../ui/TrendingSlider/TrendingSlider";

export const metadata = {
  title: "Favorites",
  description: "My Favorite Page",
};
export default function Page() {
  return (
    <div className="">
      <TrendingSlider />
    </div>
  );
}
