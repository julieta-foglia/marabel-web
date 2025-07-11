import clsx from "clsx";

interface SvgProps {
  className: string;
}

export const OrganicSvg = ({ className }: SvgProps) => {
  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      width={400}
      height={400}
      preserveAspectRatio="xMidYMid meet"
      className={clsx("absolute", className)}
    >
      <path
        fill="#ffb77040"
        d="
M70,200
C100,100 180,60 250,100
C320,140 350,220 300,300
C260,370 160,380 100,320
C40,260 40,280 70,200
Z
"
      />
    </svg>
  );
};
