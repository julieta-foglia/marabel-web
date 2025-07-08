import clsx from "clsx";

interface MaterialIconProps {
  name: string;
  className?: string;
}

export default function MaterialIcon({ name, className }: MaterialIconProps) {
  return (
    <span
      className={clsx("material-symbols-outlined", className)}
      style={{ fontVariationSettings: `"wght" 200` }}
    >
      {name}
    </span>
  );
}
