"use client";
import clsx from "clsx";
import { useState } from "react";
import { useCartStore } from "../stores/cart";
import CartOption from "./CartMenu/CartOption";
import MaterialIcon from "./MaterialIcon";

export interface ModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const OrderModal = ({ isOpen, setIsOpen }: ModalProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const { cart } = useCartStore();

  const onClickConfirm = async () => {
    try {
      await fetch("/api/send-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart,
          name,
          mail,
          phone,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const closeModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto font-[family-name:var(--font-nunito)]">
      <div className="fixed inset-0 bg-gray-500 opacity-50"></div>
      <div className="flex min-h-screen items-center justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0 md:w-full md:max-w-full">
        <div
          className={clsx(
            "bg-white relative border border-gray-300",
            `inline-block lg:w-[1000px] transform rounded-lg text-left align-bottom shadow-xl transition-all sm:my-8 sm:align-middle`
          )}
        >
          <button onClick={closeModal} className="cursor-pointer">
            <MaterialIcon name="close" className="absolute right-6 top-6" />
          </button>

          <div className="p-8 flex flex-col gap-4">
            <p className="text-3xl">Realizar pedido</p>
            <p className="text-base font-normal">
              Dejanos tus datos y nos contactaremos a la brevedad
            </p>

            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <label className="text-sm">Nombre y apellido</label>
                <input
                  className="border border-gray-400 rounded text-sm py-1 px-2 font-normal"
                  onChange={(ev) => setName(ev.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm">Mail</label>
                <input
                  className="border border-gray-400 rounded text-sm py-1 px-2 font-normal"
                  onChange={(ev) => setMail(ev.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm">Teléfono</label>
                <input
                  className="border border-gray-400 rounded text-sm py-1 px-2 font-normal"
                  onChange={(ev) => setPhone(ev.target.value)}
                />
              </div>
            </div>

            <p className="text-lg font-semibold mt-2">Resumen de pedido</p>
            <div className="px-2 max-h-[200px] overflow-scroll">
              {cart?.map((item) => (
                <CartOption {...item} key={item.name} noRemove />
              ))}
            </div>
          </div>

          <div
            className={clsx(
              "lg:flex-row lg:justify-center gap-4 px-10 py-8 text-center flex flex-col lg:text-right border-t border-t-gray-300"
            )}
          >
            <button
              onClick={closeModal}
              className="flex-grow cursor-pointer font-bold py-2 px-4 rounded-lg text-accent bg-white border-primary-200 border shadow-md"
            >
              Cancelar
            </button>
            <button
              onClick={onClickConfirm}
              disabled={!phone || !mail || !name}
              className="flex-grow cursor-pointer disabled:cursor-not-allowed font-bold py-2 px-4 rounded-lg text-white bg-accent shadow-md disabled:bg-gray-400"
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
