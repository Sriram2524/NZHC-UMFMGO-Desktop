import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { MinusIcon, PlusIcon, TrashIcon } from 'lucide-react';

export function CartSidebar({ children }: { children: React.ReactNode }) {
  const { 
    cartItems, 
    cartCount, 
    isLoading, 
    updateQuantity, 
    removeItem, 
    clearCart, 
    isCartOpen, 
    setIsCartOpen 
  } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.productPrice) * item.quantity,
    0
  );

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg mobile-scroll">
        <SheetHeader>
          <SheetTitle className="text-left text-[#313131]">
            Shopping Cart ({cartCount} items)
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col h-full">
          <ScrollArea className="flex-1 mt-6">
            {isLoading ? (
              <div className="flex items-center justify-center py-8">
                <div className="text-[#313131]">Loading cart...</div>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <img
                  className="w-16 h-16 mb-4 opacity-50"
                  alt="Empty Cart"
                  src="/figmaAssets/svg-5.svg"
                />
                <p className="text-[#313131] text-lg mb-2">Your cart is empty</p>
                <p className="text-[#666] text-sm">Add some delicious Manuka honey to get started!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 bg-[#fbf9f6] p-4 rounded-lg">
                    <img
                      src={item.productImage}
                      alt={item.productName}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[#313131] font-medium text-sm truncate">
                        {item.productName}
                      </h4>
                      <p className="text-[#666] text-xs mt-1">
                        {item.productVariant}
                      </p>
                      <p className="text-[#313131] font-semibold text-sm mt-1">
                        ${item.productPrice}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 p-0 touch-target mobile-press"
                        data-testid={`decrease-quantity-${item.id}`}
                      >
                        <MinusIcon className="h-3 w-3" />
                      </Button>
                      <span className="text-[#313131] font-medium min-w-[2rem] text-center">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 p-0 touch-target mobile-press"
                        data-testid={`increase-quantity-${item.id}`}
                      >
                        <PlusIcon className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="w-8 h-8 p-0 text-red-500 hover:text-red-700 touch-target mobile-press"
                        data-testid={`remove-item-${item.id}`}
                      >
                        <TrashIcon className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>

          {cartItems.length > 0 && (
            <div className="border-t pt-6 mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[#313131] font-medium">Total:</span>
                <span className="text-[#313131] font-bold text-lg">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              
              <div className="space-y-3">
                <Button 
                  className="w-full bg-[#f1b434] hover:bg-[#f1b434]/90 text-[#313131] font-semibold h-12 touch-target mobile-press"
                  data-testid="checkout-button"
                >
                  Proceed to Checkout
                </Button>
                <Button 
                  variant="outline" 
                  onClick={clearCart}
                  className="w-full border-[#313131] text-[#313131] hover:bg-[#313131] hover:text-white h-10 touch-target mobile-press"
                  data-testid="clear-cart-button"
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}