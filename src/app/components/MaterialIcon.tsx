import clsx from "clsx";

interface MaterialIconProps {
  name: string;
  className?: string;
  fontSize?: number;
}

export default function MaterialIcon({
  name,
  className,
  fontSize,
}: MaterialIconProps) {
  return (
    <span
      className={clsx("material-symbols-outlined", className)}
      style={{ fontVariationSettings: `"wght" 200`, fontSize }}
    >
      {name}
    </span>
  );
}
