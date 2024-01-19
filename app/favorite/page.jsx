import TrendingSlider from "../ui/TrendingSlider/TrendingSlider";
import React from "react";
export const metadata = {
  title: "Favorite",
  description: "My Favorite Page",
};

export default function FavoritePage() {
  return (
    <div className="flex flex-row h-100 w-450 p-5">
      <TrendingSlider />
    </div>
  );
}
