import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ImageGallerySection = (): JSX.Element => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const galleryImages = [
    {
      id: 1,
      src: "/figmaAssets/1-manuka-honey-web-24--5-png.png",
      className: "col-span-1",
    },
    {
      id: 2,
      src: "/figmaAssets/1-manuka-honey-web-24-png.png",
      className: "col-span-1",
    },
    {
      id: 3,
      src: "/figmaAssets/1-manuka-honey-web-24--1-png.png",
      className: "col-span-1",
    },
    {
      id: 4,
      src: "/figmaAssets/1-manuka-honey-web-24--3-png.png",
      className: "col-span-1",
    },
    {
      id: 5,
      src: "/figmaAssets/us-24-product-tiles-250g--2000-x-2000-06-jpg.png",
      className: "col-span-1",
    },
    {
      id: 6,
      src: "/figmaAssets/newzealandmanukahoneyumf24--06-136149-png.png",
      className: "col-span-1",
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="w-full max-w-[585px] mx-auto relative px-4 lg:px-0">
      {/* Main Product Image */}
      <div className="mb-6 relative">
        <img
          className="w-full h-[400px] md:h-[500px] lg:h-[617px] object-cover rounded-lg"
          alt="Main Product Image"
          src="/figmaAssets/container-1.svg"
        />
        
        {/* Mobile Image Navigation Overlay */}
        <div className="md:hidden absolute inset-0 flex items-center justify-between px-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={prevImage}
            className="bg-black/20 text-white hover:bg-black/40 rounded-full p-2 touch-target mobile-press mobile-optimized"
            data-testid="prev-image-button"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={nextImage}
            className="bg-black/20 text-white hover:bg-black/40 rounded-full p-2 touch-target mobile-press mobile-optimized"
            data-testid="next-image-button"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </Button>
        </div>
        
        {/* Mobile Image Indicators */}
        <div className="md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full touch-target mobile-press transition-all ${
                index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
              data-testid={`image-indicator-${index}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Gallery Grid - Hidden on mobile */}
      <div className="hidden md:block space-y-5">
        <div className="grid grid-cols-2 gap-[10px]">
          <Card className="bg-[#fbf9f6] border-0 overflow-hidden cursor-pointer hover:scale-105 transition-transform">
            <CardContent className="p-0">
              <div
                className="w-full h-[200px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${galleryImages[0].src})` }}
                data-testid="gallery-image-0"
              />
            </CardContent>
          </Card>

          <Card className="bg-[#fbf9f6] border-0 overflow-hidden cursor-pointer hover:scale-105 transition-transform">
            <CardContent className="p-0">
              <div
                className="w-full h-[200px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${galleryImages[1].src})` }}
                data-testid="gallery-image-1"
              />
            </CardContent>
          </Card>
        </div>

        <Card className="bg-black border-0 overflow-hidden">
          <CardContent className="p-0">
            <div className="relative w-full h-[300px]">
              <ScrollArea className="h-full">
                <div className="relative h-[368px]">
                  <div
                    className="absolute w-full h-[330px] top-[38px] left-0 bg-cover bg-center"
                    style={{ backgroundImage: "url(/figmaAssets/image.png)" }}
                  />

                  <img
                    className="absolute w-full h-[99px] top-0 left-0"
                    alt="Video thumbnail"
                    src="/figmaAssets/image-1.png"
                  />

                  <div className="absolute w-[50px] h-[50px] top-[7px] left-[7px] rounded-[25px] overflow-hidden">
                    <img
                      className="absolute w-10 h-10 top-[5px] left-[5px]"
                      alt="Brand logo"
                      src="/figmaAssets/link---photo-image-of-new-zealand-honey-co-.png"
                    />
                  </div>

                  <div className="absolute w-[75px] h-[60px] top-0 right-[100px] md:left-[352px] opacity-90">
                    <div className="relative h-[18px] top-[42px] overflow-hidden">
                      <div className="absolute w-[75px] h-[17px] -top-px left-0 [text-shadow:0px_0px_2px_#00000080] [font-family:'Roboto',Helvetica] font-medium text-[#eeeeee] text-sm text-center tracking-[0] leading-[18.2px] whitespace-nowrap">
                        Watch Later
                      </div>
                    </div>
                  </div>

                  <div className="absolute w-12 h-[60px] top-0 right-[50px] md:left-[448px] opacity-90">
                    <div className="relative h-[18px] top-[42px]">
                      <div className="absolute w-9 h-[17px] -top-px left-1.5 [text-shadow:0px_0px_2px_#00000080] [font-family:'Roboto',Helvetica] font-medium text-[#eeeeee] text-sm text-center tracking-[0] leading-[18.2px] whitespace-nowrap">
                        Share
                      </div>
                    </div>
                  </div>

                  <div className="absolute w-12 h-[60px] top-0 right-0 md:left-[516px] opacity-90">
                    <div className="w-[22px] h-[17px] top-[41px] left-[13px] [text-shadow:0px_0px_2px_#00000080] [font-family:'Roboto',Helvetica] font-medium text-[#eeeeee] text-sm text-center leading-[18.2px] whitespace-nowrap absolute tracking-[0]">
                      1/1
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-[10px]">
          <Card className="bg-[#fbf9f6] border-0 overflow-hidden cursor-pointer hover:scale-105 transition-transform">
            <CardContent className="p-0">
              <div
                className="w-full h-[200px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${galleryImages[2].src})` }}
                data-testid="gallery-image-2"
              />
            </CardContent>
          </Card>

          <Card className="bg-[#fbf9f6] border-0 overflow-hidden cursor-pointer hover:scale-105 transition-transform">
            <CardContent className="p-0">
              <div
                className="w-full h-[200px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${galleryImages[3].src})` }}
                data-testid="gallery-image-3"
              />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-2 gap-[10px]">
          <Card className="bg-[#fbf9f6] border-0 overflow-hidden cursor-pointer hover:scale-105 transition-transform">
            <CardContent className="p-0">
              <div
                className="w-full h-[200px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${galleryImages[4].src})` }}
                data-testid="gallery-image-4"
              />
            </CardContent>
          </Card>

          <Card className="bg-[#fbf9f6] border-0 overflow-hidden cursor-pointer hover:scale-105 transition-transform">
            <CardContent className="p-0">
              <div
                className="w-full h-[200px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${galleryImages[5].src})` }}
                data-testid="gallery-image-5"
              />
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Mobile Thumbnail Strip */}
      <div className="md:hidden">
        <ScrollArea className="w-full mobile-scroll">
          <div className="flex space-x-3 px-2 py-4">
            {galleryImages.map((image, index) => (
              <Card
                key={image.id}
                className={`bg-[#fbf9f6] border-0 overflow-hidden cursor-pointer transition-all shrink-0 mobile-press mobile-optimized ${
                  index === currentImageIndex ? 'ring-2 ring-[#f1b434] scale-105' : 'hover:scale-105'
                }`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <CardContent className="p-0">
                  <div
                    className="w-20 h-20 bg-cover bg-center bg-no-repeat touch-target"
                    style={{ backgroundImage: `url(${image.src})` }}
                    data-testid={`mobile-thumbnail-${index}`}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};
