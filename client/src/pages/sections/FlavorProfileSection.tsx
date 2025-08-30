import { ChevronDownIcon, InfoIcon, StarIcon, XIcon } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

export const FlavorProfileSection = (): JSX.Element => {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState("one-time");
  const [quantity, setQuantity] = useState(1);
  const [bundleUmf20Size, setBundleUmf20Size] = useState(1); // Index for 250g
  const [bundleUmf24Size, setBundleUmf24Size] = useState(1); // Index for 250g
  const [isUmfMgoModalOpen, setIsUmfMgoModalOpen] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const bundleSizes = ["50g", "250g", "500g", "1kg"];
  const bundlePrices = {
    "UMF 20+": ["45.00", "120.00", "220.00", "400.00"],
    "UMF 24+": ["65.00", "180.00", "320.00", "580.00"]
  };

  // Calculate dynamic bundle pricing
  const woodenSpoonPrice = 15.00;
  const umf20Price = parseFloat(bundlePrices["UMF 20+"][bundleUmf20Size]);
  const umf24Price = parseFloat(bundlePrices["UMF 24+"][bundleUmf24Size]);
  const originalBundleTotal = umf20Price + umf24Price + woodenSpoonPrice;
  const discountedBundleTotal = originalBundleTotal * 0.9; // 10% discount
  const savings = originalBundleTotal - discountedBundleTotal;

  const handleAddToCart = async () => {
    try {
      const selectedProduct = productVariants[selectedVariant];
      await addToCart({
        productId: selectedVariant + 1, // Simple ID based on variant index
        productName: "Manuka Honey UMF 15+",
        productPrice: selectedPayment === "subscribe" ? "45.00" : "50.00",
        productImage: selectedProduct.image,
        productVariant: selectedProduct.size,
        quantity: quantity,
      });
      
      toast({
        title: "Added to cart!",
        description: `${quantity} × Manuka Honey UMF 15+ (${selectedProduct.size}) added to your cart.`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add item to cart. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleAddBundleToCart = async () => {
    try {
      const umf20Size = bundleSizes[bundleUmf20Size];
      const umf24Size = bundleSizes[bundleUmf24Size];
      
      // Add UMF 20+ honey with selected size
      await addToCart({
        productId: 101, // Unique ID for UMF 20+
        productName: "Manuka Honey UMF 20+",
        productPrice: bundlePrices["UMF 20+"][bundleUmf20Size],
        productImage: "/figmaAssets/image-3.svg",
        productVariant: umf20Size,
        quantity: 1,
      });

      // Add UMF 24+ honey with selected size
      await addToCart({
        productId: 102, // Unique ID for UMF 24+
        productName: "Manuka Honey UMF 24+",
        productPrice: bundlePrices["UMF 24+"][bundleUmf24Size],
        productImage: "/figmaAssets/image-151.svg",
        productVariant: umf24Size,
        quantity: 1,
      });

      // Add Wooden Spoon
      await addToCart({
        productId: 103, // Unique ID for Wooden Spoon
        productName: "Wooden Spoon",
        productPrice: "15.00",
        productImage: "/figmaAssets/image-152.svg",
        productVariant: "Standard",
        quantity: 1,
      });
      
      toast({
        title: "Beauty Bundle Added!",
        description: `UMF 20+ (${umf20Size}), UMF 24+ (${umf24Size}) and Wooden Spoon added to your cart with 10% savings!`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add bundle to cart. Please try again.",
        variant: "destructive",
      });
    }
  };

  const productVariants = [
    {
      size: "125g | 4.4oz",
      image: "/figmaAssets/label---label-paints.png",
      selected: true,
    },
    {
      size: "250g | 8.8oz",
      image: "/figmaAssets/label---label-paints-2.svg",
      selected: false,
    },
    {
      size: "500g | 17.6oz",
      image: "/figmaAssets/label---label-paints-5.svg",
      selected: false,
    },
    {
      size: "1kg | 35.2oz",
      image: "/figmaAssets/label---label-paints-3.svg",
      selected: false,
    },
    {
      size: "125g | 4.4oz",
      image: "/figmaAssets/label---label-paints-6.svg",
      selected: false,
    },
    {
      size: "250g | 8.8oz",
      image: "/figmaAssets/label---label-paints-1.svg",
      selected: false,
    },
    {
      size: "500g | 17.6oz",
      image: "/figmaAssets/label---label-paints-4.svg",
      selected: false,
    },
  ];

  const certifications = [
    "/figmaAssets/certifications.png",
    "/figmaAssets/certifications-1.png",
    "/figmaAssets/certifications-2.png",
    "/figmaAssets/certifications-3.png",
    "/figmaAssets/certifications-4.png",
    "/figmaAssets/certifications-5.png",
  ];

  const umfScaleItems = [
    { label: "UMF™ 10+", color: "#e87722" },
    { label: "UMF™ 15+", color: "#e10600" },
    { label: "UMF™ 20+", color: "#ce0f69" },
    { label: "UMF™ 24+", color: "#830065", active: true },
    { label: "UMF™ 26+", color: "#0085ca" },
    { label: "UMF™ 28+", color: "#3bad4e" },
    { label: "UMF™ 30+", color: "#203e96" },
  ];

  const stars = Array(5).fill(0);

  return (
    <div className="w-full max-w-[650px] mx-auto relative px-4 lg:px-0">
      <header className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-[40px] leading-8 md:leading-[48px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131] mb-3 md:mb-4">
          Manuka Honey
        </h1>

        <div className="flex items-baseline gap-2 mb-3 md:mb-4">
          <div className="flex items-baseline">
            <span className="text-2xl md:text-[38.3px] leading-7 md:leading-10 [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131]">
              UMF
            </span>
            <span className="text-sm md:text-lg leading-4 md:leading-[18px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131]">
              ™
            </span>
          </div>
          <span className="text-3xl md:text-[56.1px] leading-8 md:leading-[52.8px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131]">
            24+
          </span>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-2xl md:text-[40px] leading-7 md:leading-10 [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131]">
            MGO
          </span>
          <span className="text-3xl md:text-[50.7px] leading-8 md:leading-[52.8px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131]">
            1122+
          </span>
        </div>
      </header>

      <Button
        variant="secondary"
        onClick={() => setIsUmfMgoModalOpen(true)}
        className="inline-flex items-center gap-2 px-3 py-2.5 bg-[#66666626] rounded-[99px] mb-8 md:mb-12 h-auto w-full md:w-auto justify-center md:justify-start"
        data-testid="umf-mgo-info-button"
      >
        <img
          className="w-4 h-[17px]"
          alt="Info icon"
          src="/figmaAssets/button---learn-more-about-afterpay---opens-a-dialog---svg.svg"
        />
        <span className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#666666] text-[13.9px] leading-[25px]">
          What is UMF and MGO?
        </span>
      </Button>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:mb-8 space-y-3 md:space-y-0">
        <span className="text-lg leading-[23.9px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131]">
          The Optimiser
        </span>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            {stars.map((_, index) => (
              <StarIcon
                key={index}
                className="w-[18px] h-4 fill-current text-yellow-400"
                data-testid={`star-${index}`}
              />
            ))}
          </div>
          <span className="text-xs tracking-[2.00px] leading-5 [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131]">
            825 REVIEWS
          </span>
        </div>
      </div>

      <div className="mb-6 md:mb-8">
        <p className="text-base md:text-lg leading-6 md:leading-[27px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131]">
          For those times in life when quality comes first. This pure UMF™ 24+
          Manuka Honey is powerfully active, sourced from wild and rugged locations
          around Aotearoa New Zealand and great for almost all uses. It has a full,
          delicious flavour and your body will love you for it.
        </p>
      </div>

      <div className="grid grid-cols-3 md:flex md:items-center gap-4 md:gap-[40px] mb-10 md:mb-16 justify-items-center">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${cert})` }}
            data-testid={`certification-${index}`}
          />
        ))}
      </div>

      <section className="mb-12">
        <div className="mb-2">
          <span className="text-sm tracking-[1.50px] leading-[21px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131]">
            SIZE (SELECT ONE)
          </span>
        </div>

        <div className="mb-6">
          <span className="text-lg leading-[23.9px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131]">
            Variant: 125g | 4.4oz
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-[9px] mb-8">
          {productVariants.map((variant, index) => (
            <button
              key={index}
              onClick={() => setSelectedVariant(index)}
              className={`w-full aspect-square max-w-[130px] mx-auto rounded-[25px] bg-cover bg-center bg-no-repeat border transition-all hover:scale-105 touch-target mobile-press mobile-optimized ${
                index === selectedVariant ? "border-[#e87722] ring-2 ring-[#e87722]/30" : "border-transparent"
              }`}
              style={{ backgroundImage: `url(${variant.image})` }}
              data-testid={`variant-${index}`}
            />
          ))}
        </div>
      </section>

      <section className="mb-8">
        <div className="mb-4">
          <span className="text-sm tracking-[1.50px] leading-[18.6px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131]">
            PAYMENT OPTIONS (SELECT ONE)
          </span>
        </div>

        <Card className="bg-[#f2f2f2] rounded-[25px] border-0 p-4 md:p-7">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-6">
              <Button
                onClick={() => setSelectedPayment("one-time")}
                className={`flex-1 h-[65px] rounded-[50px] border transition-all touch-target mobile-press ${
                  selectedPayment === "one-time"
                    ? "bg-[#f1b434] border-[#f1b434] text-white"
                    : "bg-white border-[#f1b434] text-[#313131] hover:bg-[#f1b434]/10"
                }`}
                data-testid="one-time-payment-button"
              >
                <div className="text-center">
                  <div className="text-sm md:text-base leading-[17.6px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal">
                    One-time purchase
                  </div>
                  <div className="text-base leading-[17.6px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal">
                    $55.88 USD
                  </div>
                </div>
              </Button>

              <Button
                onClick={() => setSelectedPayment("subscribe")}
                className={`flex-1 h-[65px] rounded-[50px] border transition-all touch-target mobile-press ${
                  selectedPayment === "subscribe"
                    ? "bg-[#f1b434] border-[#f1b434] text-white"
                    : "bg-white border-[#f1b434] text-[#313131] hover:bg-[#f1b434]/10"
                }`}
                data-testid="subscribe-payment-button"
              >
                <div className="text-center">
                  <div className="text-sm md:text-[15.9px] leading-[17.6px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal">
                    Subscribe & save 20%
                  </div>
                  <div className="text-base leading-[17.6px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal">
                    $44.70 USD
                  </div>
                </div>
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <InfoIcon className="w-4 h-4" />
              <span className="text-sm text-center [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131]">
                What is a Subscription?
              </span>
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-[55px] mb-8">
        <div className="flex flex-col gap-2">
          <span className="text-[13px] tracking-[0.40px] leading-[19.5px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131]">
            SELECT QUANTITY
          </span>

          <div className="flex items-center bg-[#f1b434] rounded-[50px] border border-white w-full md:w-[195px] h-[47px]">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="text-white text-lg tracking-[2.70px] leading-[19.8px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal h-auto p-0 w-[55px] hover:bg-white/20"
              data-testid="decrease-quantity-button"
            >
              -
            </Button>

            <div className="flex-1 text-center">
              <span className="text-white text-base leading-[18.4px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal" data-testid="quantity-display">
                {quantity}
              </span>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setQuantity(quantity + 1)}
              className="text-white text-lg tracking-[2.70px] leading-[19.8px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal h-auto p-0 w-[55px] hover:bg-white/20"
              data-testid="increase-quantity-button"
            >
              +
            </Button>
          </div>
        </div>

        <Button 
          onClick={handleAddToCart}
          className="bg-[#313131] rounded-[41px] border border-solid w-full md:w-[400px] h-[47px] text-white text-[15px] text-center tracking-[1.00px] leading-[18px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal hover:bg-[#313131]/90 transition-colors touch-target mobile-press mobile-optimized" 
          data-testid="add-to-cart-button"
        >
          ADD TO CART
        </Button>
      </div>

      <Card className="bg-[#f2f2f2] rounded-3xl p-4 md:p-5 mb-8">
        <CardContent className="p-0">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img
              className="w-6 h-6"
              alt="Bundle decoration"
              src="/figmaAssets/frame-1484578602.svg"
            />
            <h3 className="text-lg md:text-xl text-center [font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-[#313131]">
              Beauty Bundle
            </h3>
            <img
              className="w-6 h-6"
              alt="Bundle decoration"
              src="/figmaAssets/frame-1484578601.svg"
            />
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="grid grid-cols-3 md:flex md:items-start gap-2 md:gap-1 flex-1 w-full">
              <div className="flex flex-col items-center gap-2.5 flex-1">
                <img
                  className="w-full h-[70px] md:h-[94.67px] object-contain"
                  alt="UMF 20+ Product"
                  src="/figmaAssets/image-3.svg"
                />
                <span className="text-sm md:text-lg text-center [font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-[#313131]">
                  UMF 20+
                </span>
                <Button
                  variant="outline"
                  onClick={() => setBundleUmf20Size((prev) => (prev + 1) % bundleSizes.length)}
                  className="inline-flex items-center justify-center gap-1 px-2 md:px-3 py-1 rounded-[20px] border border-[#cdcdcd] h-auto text-xs md:text-sm"
                  data-testid="bundle-umf20-size-selector"
                >
                  <span className="text-xs md:text-sm text-center [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131]">
                    {bundleSizes[bundleUmf20Size]}
                  </span>
                  <ChevronDownIcon className="w-3 h-3 md:w-4 md:h-4" />
                </Button>
              </div>

              <div className="hidden md:flex w-[13px] h-[97px] items-center justify-center">
                <span className="text-lg text-center [font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-[#313131]">
                  +
                </span>
              </div>

              <div className="flex flex-col items-center gap-2.5 flex-1">
                <img
                  className="w-full h-[70px] md:h-[94.67px] object-contain"
                  alt="UMF 24+ Product"
                  src="/figmaAssets/image-2.svg"
                />
                <span className="text-sm md:text-lg text-center [font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-[#313131]">
                  UMF 24+
                </span>
                <Button
                  variant="outline"
                  onClick={() => setBundleUmf24Size((prev) => (prev + 1) % bundleSizes.length)}
                  className="inline-flex items-center justify-center gap-1 px-2 md:px-3 py-1 rounded-[20px] border border-[#cdcdcd] h-auto text-xs md:text-sm"
                  data-testid="bundle-umf24-size-selector"
                >
                  <span className="text-xs md:text-sm text-center [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131]">
                    {bundleSizes[bundleUmf24Size]}
                  </span>
                  <ChevronDownIcon className="w-3 h-3 md:w-4 md:h-4" />
                </Button>
              </div>

              <div className="hidden md:flex w-[13px] h-[97px] items-center justify-center">
                <span className="text-lg text-center [font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-[#313131]">
                  +
                </span>
              </div>

              <div className="flex flex-col items-center gap-2.5 flex-1">
                <img
                  className="w-full h-[70px] md:h-[94.67px] object-contain"
                  alt="Wooden Spoon"
                  src="/figmaAssets/image-152.svg"
                />
                <span className="text-sm md:text-lg text-center [font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-[#313131] w-full">
                  Wooden Spoon
                </span>
              </div>
            </div>

            <div className="flex flex-col w-full lg:w-[260px] items-center gap-3">
              <div className="flex flex-wrap items-baseline justify-center gap-2">
                <span className="text-sm text-center [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131] line-through">
                  ${originalBundleTotal.toFixed(2)} USD
                </span>
                <span className="text-lg text-center [font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-[#313131]">
                  ${discountedBundleTotal.toFixed(2)} USD
                </span>
                <Badge className="bg-transparent text-[#087f1a] text-sm [font-family:'Segoe_UI-Semibold',Helvetica] font-normal">
                  Save ${savings.toFixed(2)}
                </Badge>
              </div>

              <Button 
                onClick={handleAddBundleToCart}
                className="w-full bg-[#313131] rounded-[50px] border border-solid text-white text-sm md:text-base text-center tracking-[1.50px] leading-[17.6px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal h-auto py-3.5 hover:bg-[#313131]/90 transition-colors" 
                data-testid="add-bundle-to-cart-button"
              >
                ADD BUNDLE TO CART
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div
            className="w-10 h-[39px] rounded-[19.77px] bg-cover bg-center"
            style={{ backgroundImage: "url(/figmaAssets/colourclub-logo.svg)" }}
          />
          <span className="text-sm [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131]">
            Colourclub members earn up to
          </span>
          <div className="w-[41px] h-[34px] bg-white rounded-[18.69px] flex items-center justify-center">
            <span className="text-lg leading-[23.9px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#f39c12]">
              56
            </span>
          </div>
          <span className="text-sm [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131]">
            reward points when buy this item.
          </span>
          <span className="text-[13.8px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131]">
            Sign up or log in
          </span>
        </div>

        <div>
          <div className="mb-4">
            <span className="text-sm tracking-[1.50px] leading-[18.6px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131]">
              DELIVERY
            </span>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131] mb-2">
                FREE DELIVERY ON ORDERS OVER $30
              </p>
            </div>
            <div className="text-right">
              <p className="text-[13.9px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131]">
                ESTIMATED DELIVERY DATE:
                <br />
                Jun 9 - Jun 13 to
              </p>
            </div>
          </div>
        </div>

        <Separator className="border-t-[0.8px] border-[#313131]" />

        <div>
          <div className="mb-4">
            <span className="text-sm tracking-[1.50px] leading-[18.6px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131]">
              AFTER PAY
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131]">
              or 4 interest-free payments of $13.97 with
            </span>
            <img
              className="w-[90px] h-[22px]"
              alt="Afterpay logo"
              src="/figmaAssets/button---afterpay-logo---opens-a-dialog---svg.svg"
            />
            <img
              className="w-3.5 h-3.5"
              alt="Learn more"
              src="/figmaAssets/button---learn-more-about-afterpay---opens-a-dialog---svg.svg"
            />
          </div>
        </div>

        <Separator className="border-t-[0.8px] border-[#313131]" />

        <div>
          <div className="mb-8">
            <span className="text-sm tracking-[1.50px] leading-[18.6px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131]">
              UMF™ SCALE
            </span>
          </div>

          <div className="overflow-x-auto mb-12">
            <div className="flex gap-[5px] min-w-[616px]">
              {umfScaleItems.map((item, index) => (
                <div
                  key={index}
                  className="w-[88px] h-6 border-b-[0.8px] border-solid relative"
                  style={{ borderBottomColor: item.color }}
                  data-testid={`umf-scale-${index}`}
                >
                  <span
                    className={`absolute -top-0.5 left-2 text-[13.2px] text-center tracking-[1.00px] leading-[14px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal ${
                      item.active ? `text-[${item.color}]` : "text-[#313131]"
                    }`}
                  >
                    {item.label}
                  </span>
                  {item.active && (
                    <div
                      className="absolute top-5 left-0 w-[88px] h-[3px]"
                      style={{ backgroundColor: item.color }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <span className="text-sm tracking-[1.50px] leading-[18.6px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131] mb-4 block">
              TASTE PROFILE
            </span>
            <img
              className="w-full h-px mb-4"
              alt="Taste profile scale"
              src="/figmaAssets/input.svg"
            />
            <div className="flex justify-between">
              <span className="text-[13.9px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131]">
                Clean & Intense
              </span>
              <span className="text-[13.3px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131]">
                Bold & Intense
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* UMF and MGO Info Modal */}
      <Dialog open={isUmfMgoModalOpen} onOpenChange={setIsUmfMgoModalOpen}>
        <DialogContent className="max-w-[90vw] sm:max-w-[400px] max-h-[90vh] overflow-y-auto p-0 bg-[#f5f5f5] border-none">
          <DialogHeader className="sr-only">
            <DialogTitle>UMF and MGO Information</DialogTitle>
            <DialogDescription>Learn about UMF and MGO ratings for Manuka honey</DialogDescription>
          </DialogHeader>
          
          <div className="p-4 sm:p-6">
            {/* UMF Section */}
            <div className="mb-6">
              <p className="text-sm sm:text-base text-[#313131] mb-3 font-normal">
                <strong>UMF</strong> is the strength and purity rating of Manuka honey.
              </p>
              
              {/* UMF Rating Scale */}
              <div className="flex flex-wrap items-center gap-1 mb-3">
                {[
                  { label: "10+", color: "#ff6b35" },
                  { label: "15+", color: "#ff6b35" },
                  { label: "20+", color: "#ff6b35" },
                  { label: "24+", color: "#ff6b35" },
                  { label: "26+", color: "#1fb5a6" },
                  { label: "28+", color: "#1fb5a6" },
                  { label: "30+", color: "#1fb5a6" }
                ].map((item, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs font-medium text-white rounded text-center min-w-[36px]"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.label}
                  </span>
                ))}
              </div>
              
              <p className="text-xs sm:text-sm text-[#666] mb-4">
                The higher the number, the greater the potency and rarity of Manuka honey.
              </p>
            </div>

            {/* MGO Section */}
            <div className="mb-6">
              <p className="text-sm sm:text-base text-[#313131] mb-3 font-normal">
                <strong>MGO</strong> is the key natural compound that gives Manuka honey its special antibacterial strength.
              </p>
              
              {/* MGO Rating Scale */}
              <div className="flex flex-wrap items-center gap-1 mb-3">
                {[
                  { label: "263+", color: "#ff6b35" },
                  { label: "514+", color: "#ff6b35" },
                  { label: "829+", color: "#ff6b35" },
                  { label: "1122+", color: "#6366f1" },
                  { label: "1282+", color: "#1fb5a6" },
                  { label: "1450+", color: "#1fb5a6" },
                  { label: "1620+", color: "#1fb5a6" }
                ].map((item, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs font-medium text-white rounded text-center min-w-[42px]"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.label}
                  </span>
                ))}
              </div>
              
              <p className="text-xs sm:text-sm text-[#666] mb-4">
                The higher the number, the higher the antibacterial properties in the honey.
              </p>
            </div>

            {/* Close Button */}
            <div className="flex justify-center mb-4">
              <Button
                onClick={() => setIsUmfMgoModalOpen(false)}
                className="px-6 py-2 bg-[#313131] text-white rounded-lg hover:bg-[#313131]/90 text-sm"
                data-testid="close-umf-mgo-modal"
              >
                Close
              </Button>
            </div>

            {/* Product Images */}
            <div className="flex justify-center items-center gap-4">
              <img
                src="/figmaAssets/image-3.svg"
                alt="Manuka Honey UMF 20+"
                className="w-12 h-16 sm:w-16 sm:h-20 object-contain"
              />
              <img
                src="/figmaAssets/image-2.svg"
                alt="Manuka Honey UMF 24+"
                className="w-12 h-16 sm:w-16 sm:h-20 object-contain"
              />
              <img
                src="/figmaAssets/label---label-paints.png"
                alt="Manuka Honey UMF 15+"
                className="w-12 h-16 sm:w-16 sm:h-20 object-contain"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
