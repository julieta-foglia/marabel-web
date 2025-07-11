import clsx from "clsx";

interface MaterialIconProps {
  name: string;
  className?: string;
  fontSize?: number;
  color?: string;
}

export default function MaterialIcon({
  name,
  className,
  fontSize,
  color,
}: MaterialIconProps) {
  return (
    <span
      className={clsx("material-symbols-outlined", className)}
      style={{ fontVariationSettings: `"wght" 200`, fontSize, color }}
    >
      {name}
    </span>
  );
}
