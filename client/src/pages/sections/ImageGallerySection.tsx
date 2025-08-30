import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export const ImageGallerySection = (): JSX.Element => {
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

  return (
    <section className="w-full max-w-[585px] mx-auto relative">
      <div className="mb-6">
        <img
          className="w-full h-[617px] object-cover"
          alt="Container"
          src="/figmaAssets/container-1.svg"
        />
      </div>

      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-[10px]">
          <Card className="bg-[#fbf9f6] border-0 overflow-hidden">
            <CardContent className="p-0">
              <div
                className="w-full h-[200px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${galleryImages[0].src})` }}
              />
            </CardContent>
          </Card>

          <Card className="bg-[#fbf9f6] border-0 overflow-hidden">
            <CardContent className="p-0">
              <div
                className="w-full h-[200px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${galleryImages[1].src})` }}
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
                    alt="Image"
                    src="/figmaAssets/image-1.png"
                  />

                  <div className="absolute w-[50px] h-[50px] top-[7px] left-[7px] rounded-[25px] overflow-hidden">
                    <img
                      className="absolute w-10 h-10 top-[5px] left-[5px]"
                      alt="Link photo image of"
                      src="/figmaAssets/link---photo-image-of-new-zealand-honey-co-.png"
                    />
                  </div>

                  <div className="absolute w-[75px] h-[60px] top-0 left-[352px] opacity-90">
                    <div className="relative h-[18px] top-[42px] overflow-hidden">
                      <div className="absolute w-[75px] h-[17px] -top-px left-0 [text-shadow:0px_0px_2px_#00000080] [font-family:'Roboto',Helvetica] font-medium text-[#eeeeee] text-sm text-center tracking-[0] leading-[18.2px] whitespace-nowrap">
                        Watch Later
                      </div>
                    </div>
                  </div>

                  <div className="left-[448px] absolute w-12 h-[60px] top-0 opacity-90">
                    <div className="relative h-[18px] top-[42px]">
                      <div className="absolute w-9 h-[17px] -top-px left-1.5 [text-shadow:0px_0px_2px_#00000080] [font-family:'Roboto',Helvetica] font-medium text-[#eeeeee] text-sm text-center tracking-[0] leading-[18.2px] whitespace-nowrap">
                        Share
                      </div>
                    </div>
                  </div>

                  <div className="left-[516px] absolute w-12 h-[60px] top-0 opacity-90">
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
          <Card className="bg-[#fbf9f6] border-0 overflow-hidden">
            <CardContent className="p-0">
              <div
                className="w-full h-[200px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${galleryImages[2].src})` }}
              />
            </CardContent>
          </Card>

          <Card className="bg-[#fbf9f6] border-0 overflow-hidden">
            <CardContent className="p-0">
              <div
                className="w-full h-[200px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${galleryImages[3].src})` }}
              />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-2 gap-[10px]">
          <Card className="bg-[#fbf9f6] border-0 overflow-hidden">
            <CardContent className="p-0">
              <div
                className="w-full h-[200px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${galleryImages[4].src})` }}
              />
            </CardContent>
          </Card>

          <Card className="bg-[#fbf9f6] border-0 overflow-hidden">
            <CardContent className="p-0">
              <div
                className="w-full h-[200px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${galleryImages[5].src})` }}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
