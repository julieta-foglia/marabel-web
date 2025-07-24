"use client";
import { useCartStore } from "@/app/stores/cart";
import clsx from "clsx";
import Image from "next/image";
import MaterialIcon from "../MaterialIcon";

interface CartOptionProps {
  name: string;
  fragrance: string;
  quantity: number;
  image: string;
  noRemove?: boolean;
}

export default function CartOption({
  name,
  fragrance,
  quantity,
  image,
  noRemove,
}: CartOptionProps) {
  const { removeFromCart } = useCartStore();

  return (
    <div
      className={clsx(
        "cursor-pointer flex flex-row items-center justify-between gap-10",
        noRemove ? "" : "px-4 py-4"
      )}
    >
      <div className="flex flex-row gap-2 items-center">
        <Image src={image} width={50} height={50} alt={name} />
        <div>
          <p className="text-base">{name}</p>
          <p className="text-xs text-shadow-grey-secondary">
            Fragancia: {fragrance}
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center justify-center">
        <p className="text-xl">{quantity}</p>
        {!noRemove && (
          <button
            className="cursor-pointer"
            onClick={() => removeFromCart({ name, fragrance })}
          >
            <MaterialIcon name="close" fontSize={20} />
          </button>
        )}
      </div>
    </div>
  );
}
