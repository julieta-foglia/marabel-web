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
        "flex flex-row items-center justify-between gap-10",
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
      <div className="flex flex-row gap-4 items-baseline justify-center">
        <p className="text-xl flex self-baseline">{quantity}</p>
        {!noRemove && (
          <button
            className="flex items-center justify-center appearance-none cursor-pointer w-4 h-4 bg-accent rounded-full"
            onClick={() => removeFromCart({ name, fragrance })}
          >
            <MaterialIcon name="close" fontSize={14} className="text-white" />
          </button>
        )}
      </div>
    </div>
  );
}
