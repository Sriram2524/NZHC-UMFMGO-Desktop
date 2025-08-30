import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon, XIcon } from "lucide-react";

export const ProductDetailsSection = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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
        <header className="relative w-full max-w-[1360px] mx-auto px-4 md:px-10 py-[18px] bg-transparent">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between w-full">
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
                    data-testid={`nav-link-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex items-center justify-center">
              <img
                className="w-[215px] h-[103px]"
                alt="Company Logo"
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
                    data-testid={`nav-link-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-1 ml-4">
                <img
                  className="w-11 h-11"
                  alt="Search"
                  src="/figmaAssets/link.svg"
                />

                <img
                  className="w-11 h-11"
                  alt="User Account"
                  src="/figmaAssets/details-modal---details---slot---button-dialog---search.svg"
                />

                <div className="relative w-11 h-11 flex items-center justify-center">
                  <img
                    className="w-6 h-6"
                    alt="Shopping Cart"
                    src="/figmaAssets/svg-5.svg"
                  />
                  <Badge className="absolute -top-1 -right-1 w-[22px] h-[22px] bg-[#f1b434] text-[#313131] text-xs rounded-[11.25px] flex items-center justify-center p-0 hover:bg-[#f1b434]" data-testid="cart-badge">
                    0
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2"
                  data-testid="mobile-menu-trigger"
                >
                  <MenuIcon className="h-6 w-6 text-[#313131]" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] bg-[#fbf9f6]">
                <div className="flex flex-col space-y-6 pt-8">
                  <Button
                    variant="outline"
                    className="h-[41px] px-[21px] rounded-[50px] border border-solid border-[#313131] bg-transparent hover:bg-[#313131] hover:text-white w-full"
                    data-testid="mobile-manuka-guide-button"
                  >
                    <span className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131] text-[13px] tracking-[1.95px] leading-[14.3px] hover:text-white">
                      WHICH MANUKA IS FOR ME?
                    </span>
                  </Button>
                  
                  <nav className="flex flex-col space-y-4">
                    {navigationItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="px-4 py-3 [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131] text-lg leading-[23.4px] hover:text-[#313131]/70 border-b border-[#313131]/10"
                        data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                    {rightNavigationItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="px-4 py-3 [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131] text-lg leading-[23.4px] hover:text-[#313131]/70 border-b border-[#313131]/10"
                        data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>

            <div className="flex items-center justify-center flex-1">
              <img
                className="w-[120px] h-[58px] md:w-[160px] md:h-[77px]"
                alt="Company Logo"
                src="/figmaAssets/link-1.svg"
              />
            </div>

            <div className="flex items-center gap-2">
              <img
                className="w-8 h-8 md:w-10 md:h-10"
                alt="Search"
                src="/figmaAssets/link.svg"
              />
              
              <div className="relative flex items-center justify-center">
                <img
                  className="w-6 h-6 md:w-7 md:h-7"
                  alt="Shopping Cart"
                  src="/figmaAssets/svg-5.svg"
                />
                <Badge className="absolute -top-1 -right-1 w-4 h-4 md:w-[18px] md:h-[18px] bg-[#f1b434] text-[#313131] text-[10px] md:text-xs rounded-full flex items-center justify-center p-0 hover:bg-[#f1b434]" data-testid="mobile-cart-badge">
                  0
                </Badge>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
