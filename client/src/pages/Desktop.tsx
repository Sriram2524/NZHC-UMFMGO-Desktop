import React from "react";
import { FlavorProfileSection } from "./sections/FlavorProfileSection";
import { ImageGallerySection } from "./sections/ImageGallerySection";
import { ProductDetailsSection } from "./sections/ProductDetailsSection";

export const Desktop = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full max-w-[1440px] items-start relative bg-[#fbf9f6] min-h-screen">
      <ProductDetailsSection />
      <div className="flex items-start gap-0 relative self-stretch w-full flex-1">
        <ImageGallerySection />
        <FlavorProfileSection />
      </div>
    </div>
  );
};
