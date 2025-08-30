import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const ProductDetailsSection = (): JSX.Element => {
  const navigationItems = [
    { label: "Shop", href: "#" },
    { label: "Explore", href: "#" },
  ];

  const rightNavigationItems = [
    { label: "About", href: "#" },
    { label: "Rewards", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <div className="relative self-stretch w-full h-auto">
      <div className="w-full bg-[#fbf9f6]">
        <header className="relative w-full max-w-[1360px] mx-auto px-10 py-[18px] bg-transparent">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-8">
              <Button
                variant="outline"
                className="h-[41px] px-[21px] rounded-[50px] border border-solid border-[#313131] bg-transparent hover:bg-[#313131] hover:text-white"
              >
                <span className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131] text-[13px] tracking-[1.95px] leading-[14.3px] whitespace-nowrap hover:text-white">
                  WHICH MANUKA IS FOR ME?
                </span>
              </Button>

              <nav className="flex items-center">
                {navigationItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="px-[22px] py-[34px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131] text-lg tracking-[0] leading-[23.4px] whitespace-nowrap hover:text-[#313131]/70"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex items-center justify-center">
              <img
                className="w-[215px] h-[103px]"
                alt="Link"
                src="/figmaAssets/link-1.svg"
              />
            </div>

            <div className="flex items-center gap-0">
              <nav className="flex items-center">
                {rightNavigationItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="px-[22px] py-[34px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131] text-[17.7px] tracking-[0] leading-[23.4px] whitespace-nowrap hover:text-[#313131]/70"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-1 ml-4">
                <img
                  className="w-11 h-11"
                  alt="Link"
                  src="/figmaAssets/link.svg"
                />

                <img
                  className="w-11 h-11"
                  alt="Details modal"
                  src="/figmaAssets/details-modal---details---slot---button-dialog---search.svg"
                />

                <div className="relative w-11 h-11 flex items-center justify-center">
                  <img
                    className="w-6 h-6"
                    alt="Svg"
                    src="/figmaAssets/svg-5.svg"
                  />
                  <Badge className="absolute -top-1 -right-1 w-[22px] h-[22px] bg-[#f1b434] text-[#313131] text-xs rounded-[11.25px] flex items-center justify-center p-0 hover:bg-[#f1b434]">
                    0
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
