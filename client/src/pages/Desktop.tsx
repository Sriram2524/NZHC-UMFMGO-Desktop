import React from "react";
import { FlavorProfileSection } from "./sections/FlavorProfileSection";
import { ImageGallerySection } from "./sections/ImageGallerySection";
import { ProductDetailsSection } from "./sections/ProductDetailsSection";

// Responsive Manuka Honey Product Page

export const Desktop = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full max-w-[1440px] mx-auto items-start relative bg-[#fbf9f6] min-h-screen">
      <ProductDetailsSection />
      <main className="flex flex-col lg:flex-row items-start gap-6 lg:gap-0 relative self-stretch w-full flex-1 px-4 lg:px-0 py-6 lg:py-0">
        <div className="w-full lg:w-auto lg:flex-shrink-0">
          <ImageGallerySection />
        </div>
        <div className="w-full lg:flex-1 lg:pl-8">
          <FlavorProfileSection />
        </div>
      </main>
    </div>
  );
};
