import clsx from "clsx";
import Link from "next/link";

export interface BannerContentProps {
  pretitulo?: string;
  subtitulo?: string;
  titulo?: string;
  boton?: {
    url: string;
    texto: string;
  };
  centered?: boolean;
  dark?: boolean;
}

export default function BannerContent({
  pretitulo,
  subtitulo,
  titulo,
  boton,
  centered,
  dark,
}: BannerContentProps) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-2 md:text-left md:justify-between h-52 z-10 text-center items-center justify-center",
        centered ? "text-center justify-center" : ""
      )}
    >
      <div>
        {pretitulo && (
          <p className="font-[family-name:var(--font-raleway)] text-sm md:text-lg text-accent font-semibold">
            {pretitulo}
          </p>
        )}
        {titulo && (
          <p
            className={clsx(
              " text-primary font-semibold mt-2 text-3xl",
              centered ? "md:text-7xl" : "md:text-5xl"
            )}
          >
            {titulo}
          </p>
        )}
        {subtitulo && (
          <p
            className={clsx(
              "mt-4",
              dark ? "text-grey-primary font-semibold text-base md:text-lg" : ""
            )}
          >
            {subtitulo}
          </p>
        )}
      </div>
      {boton && (
        <Link
          href={boton.url}
          className="font-[family-name:var(--font-nunito)] font-bold w-full md:w-fit hover:border cursor-box zoom-in py-2 px-4 rounded-lg text-white bg-accent shadow-lg"
        >
          {boton.texto}
        </Link>
      )}
    </div>
  );
}
