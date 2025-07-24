"use client";
import { useCartStore } from "@/app/stores/cart";
import { useRef, useState } from "react";
import MaterialIcon from "../MaterialIcon";
import { OrderModal } from "../OrderModal";
import CartOption from "./CartOption";

export default function CartMenu() {
  const menuRef = useRef(null);
  const { cart, clearCart } = useCartStore();
  const [showProductsMenu, setShowProductsMenu] = useState(false);
  const [isOrderModalToggled, toggleOrderModal] = useState(false);

  return (
    <>
      {isOrderModalToggled && (
        <OrderModal isOpen={isOrderModalToggled} setIsOpen={toggleOrderModal} />
      )}
      <div
        className="relative inline-block z-20"
        onMouseEnter={() => setShowProductsMenu(true)}
        onMouseLeave={() => setShowProductsMenu(false)}
      >
        <div className="cursor-pointer relative">
          <MaterialIcon name="shopping_cart" fontSize={30} />
          {Boolean(cart?.length) && cart && (
            <div className="absolute -top-2 left-5 w-5 h-5 p-3 rounded-full bg-accent text-white flex items-center justify-center">
              {cart.length}
            </div>
          )}
        </div>
        {showProductsMenu && (
          <div
            ref={menuRef}
            className="flex flex-col absolute min-w-[400px] top-6 right-0 bg-white z-10 shadow-md rounded-lg text-grey-secondary text-md border border-secondary-opacity"
          >
            {!cart || !cart.length ? (
              <div className="p-8 text-center">
                <p>No hay productos en el carrito!</p>
              </div>
            ) : (
              cart?.map((item) => (
                <CartOption {...item} key={`${item.name}-${item.fragrance}`} />
              ))
            )}

            {Boolean(cart?.length) && (
              <div className="flex py-4 px-6 gap-4 flex-col border-t border-t-grey-secondary">
                <button
                  onClick={clearCart}
                  className="cursor-pointer font-bold w-full py-2 px-4 rounded-lg text-accent bg-white border border-accent shadow-md"
                >
                  Eliminar todo
                </button>
                <button
                  onClick={() => toggleOrderModal((prev) => !prev)}
                  className="cursor-pointer font-bold w-full py-2 px-4 rounded-lg text-white bg-accent shadow-md"
                >
                  Realizar pedido
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
