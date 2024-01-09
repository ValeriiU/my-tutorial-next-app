"use client";

import React from "react";
import { useRouter } from "next/navigation";

 const NavigateToBack = () => {
  const router = useRouter();

  const handleToBack = () => {
    router.back();
  };

  return <button className="flex flex-row border w-16 h-6 m-2 shadow-lg hover:shadow-blue-500/50 hover:border-blue-600 rounded-lg border-solid border-gray-300 aspect-square p-auto items-center justify-center text-neutral-500 hover:text-blue-600 group-invalid:pointer-events-none group-invalid:opacity-80" onClick={handleToBack} >to back</button>;
};

export default NavigateToBack