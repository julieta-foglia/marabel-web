"use client";

import Image from "next/image";
import Link from "next/link";

interface LinkIconProps {
  text: string;
  icon: string;
  link: string;
}

export default function LinkIcon({ text, icon, link }: LinkIconProps) {
  return (
    <Link
      href={link}
      className="flex flex-row text-grey-primary items-center gap-4"
    >
      <Image src={icon} width={30} height={30} alt={text} />
      {text}
    </Link>
  );
}
