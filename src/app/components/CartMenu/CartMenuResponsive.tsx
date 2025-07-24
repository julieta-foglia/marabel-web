"use client";
import { useCartStore } from "@/app/stores/cart";
import { useRef, useState } from "react";
import MaterialIcon from "../MaterialIcon";
import { OrderModal } from "../OrderModal";
import CartOption from "./CartOption";

export default function CartMenuResponsive() {
  const menuRef = useRef(null);
  const { cart, clearCart } = useCartStore();
  const [showProductsMenu, setShowProductsMenu] = useState(false);
  const [isOrderModalToggled, toggleOrderModal] = useState(false);

  return (
    <div className="flex lg:hidden">
      {isOrderModalToggled && (
        <OrderModal isOpen={isOrderModalToggled} setIsOpen={toggleOrderModal} />
      )}
      <div className="relative inline-block z-20 w-full">
        <button
          className="cursor-pointer relative"
          onClick={() => setShowProductsMenu(true)}
        >
          <MaterialIcon name="shopping_cart" fontSize={20} />
          {Boolean(cart?.length) && cart && (
            <div className="absolute -top-2 left-3 w-2 h-2 p-2 rounded-full bg-accent text-white flex items-center justify-center">
              {cart.length}
            </div>
          )}
        </button>
        {showProductsMenu && (
          <div
            ref={menuRef}
            className="flex flex-col justify-between fixed top-0 right-0 w-[350px] h-screen bg-white z-10 shadow-md rounded-lg text-grey-secondary text-md border border-secondary-opacity"
          >
            <button
              onClick={() => setShowProductsMenu(false)}
              className="absolute right-3 top-3"
            >
              <MaterialIcon name="close" fontSize={30} />
            </button>
            <div className="mt-8 py-8">
              <p className="px-6 font-semibold">Carrito</p>
              {!cart || !cart.length ? (
                <div className="p-8 text-center">
                  <p>No hay productos en el carrito!</p>
                </div>
              ) : (
                cart?.map((item) => (
                  <CartOption
                    {...item}
                    key={`${item.name}-${item.fragrance}`}
                  />
                ))
              )}
            </div>
            {Boolean(cart?.length) && (
              <div className="flex py-4 px-6 gap-4 flex-col border-t border-t-gray-300">
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
    </div>
  );
}
