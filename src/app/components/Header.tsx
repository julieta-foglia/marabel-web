"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useGetAsset } from "../cms";

export default function Header() {
  const { getAsset, asset } = useGetAsset();

  useEffect(() => {
    getAsset({ title: "logo" });
  }, []);

  return (
    <header className="bg-white px-10 py-5 shadow-2xs font-[family-name:var(--font-quicksand)] flex flex-row items-center justify-between">
      {asset && (
        <Image src={asset?.url} width={100} height={100} alt="logo marabel" />
      )}
      <ol className="flex flex-row gap-5 font-semibold text-shadow-grey-primary text-lg">
        <Link href="/productos">Productos</Link>
        <Link href="/contacto">Contacto</Link>
      </ol>
    </header>
  );
}
