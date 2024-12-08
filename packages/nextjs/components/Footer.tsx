import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";

export const Footer = () => {
  return (
    <div className="min-h-0 py-5 px-1 mb-11 lg:mb-0">
      <div className="w-full flex justify-center items-center">
        <p className="text-sm text-center">
          Desarrollado con <HeartIcon className="inline-block h-4 w-4 text-red-500" /> por CS - SE - GB ~ Hackathon
          ETH-Kipu ~ 2024
        </p>
      </div>
    </div>
  );
};
