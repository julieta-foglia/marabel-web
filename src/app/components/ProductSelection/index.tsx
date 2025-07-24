"use client";
import { useCartStore } from "@/app/stores/cart";
import { useEffect, useRef, useState } from "react";
import MaterialIcon from "../MaterialIcon";

interface ProductSelectionProps {
  name: string;
  image: string;
  fragrances: Array<string>;
}

export default function ProductSelection({
  name,
  image,
  fragrances,
}: ProductSelectionProps) {
  const listRef = useRef(null);
  const { updateCart } = useCartStore();
  const [quantity, setQuantity] = useState(1);
  const [fragrance, setFragrance] = useState<string>("");
  const [open, setOpen] = useState(false);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    } else if (e.target.value === "") {
      setQuantity(0);
    }
  };

  const handleBlur = () => {
    if (quantity < 1) {
      setQuantity(1);
    }
  };

  const handleAddToCart = () => {
    updateCart({ name, quantity, fragrance, image });
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (listRef.current && !listRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open, setOpen]);

  return (
    <div className="flex flex-row justify-between gap-4">
      <div className="relative inline-block w-64">
        <button
          onClick={() => setOpen(!open)}
          className="cursor-pointer w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-left text-gray-700 hover:border-gray-400 focus:outline-none"
        >
          {fragrance || "Seleccioná una fragancia"}
          <span className="float-right">&#x25BC;</span>
        </button>

        {open && (
          <ul
            ref={listRef}
            className="cursor-pointer absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg"
          >
            {fragrances?.map((frag) => (
              <li
                key={frag}
                onClick={() => {
                  setFragrance(frag);
                  setOpen(false);
                }}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                {frag}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex flex-row gap-8 items-center">
        <div className="flex items-center space-x-2 h-10">
          <button
            disabled={!fragrance}
            onClick={decrement}
            className="disabled:bg-gray-400  flex items-center justify-center cursor-pointer w-8 h-8 rounded-full bg-accent border border-gray-300 text-white hover:bg-primary-300"
          >
            <MaterialIcon name="remove" />
          </button>

          <input
            onChange={handleInputChange}
            onBlur={handleBlur}
            min={1}
            type="number"
            value={quantity}
            className="[&::-webkit-inner-spin-button]:appearance-none 
        [&::-webkit-outer-spin-button]:appearance-none 
        [appearance:textfield] w-16 h-full text-center border border-gray-300 rounded bg-white"
          />

          <button
            disabled={!fragrance}
            onClick={increment}
            className="disabled:bg-gray-400  flex items-center justify-center cursor-pointer w-8 h-8 rounded-full bg-accent border border-gray-300 text-white hover:bg-primary-300"
          >
            <MaterialIcon name="add" />
          </button>
        </div>
        <button
          disabled={!fragrance}
          onClick={handleAddToCart}
          className="disabled:bg-gray-400 cursor-pointer self-end font-bold w-full lg:w-fit transition-all ease-in hover:scale-105 py-2 px-4 rounded-lg text-white bg-accent shadow-lg"
        >
          Agregar
        </button>
      </div>
    </div>
  );
}
