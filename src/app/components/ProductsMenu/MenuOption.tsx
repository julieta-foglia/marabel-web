"use client";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import MaterialIcon from "../MaterialIcon";

export interface MenuOptionProps {
  nombre: string;
  icono: string;
  onClick?: () => void;
}

export default function MenuOption({
  nombre,
  icono,
  onClick,
}: MenuOptionProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      onClick={onClick}
      href={`/productos?categoria=${nombre}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={clsx(
        "cursor-pointer flex flex-row gap-4 items-center px-4 pt-2 pb-2 h-12"
      )}
    >
      <MaterialIcon
        name={icono}
        className={isHovered ? "animate-wiggle fill-mode-both" : ""}
      />
      <p className="hover:underline hover:underline-offset-4 hover:decoration-accent">
        {nombre}
      </p>
    </Link>
  );
}
