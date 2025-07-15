import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface LinkIconProps {
  text?: string;
  icon: string;
  link: string;
  className?: string;
}

export default function LinkIcon({
  text,
  icon,
  link,
  className,
}: LinkIconProps) {
  return (
    <Link
      href={link}
      className={clsx(
        "flex flex-row text-grey-primary items-center gap-4",
        className
      )}
    >
      <Image src={icon} width={40} height={40} alt={text ?? ""} />
      {text}
    </Link>
  );
}
