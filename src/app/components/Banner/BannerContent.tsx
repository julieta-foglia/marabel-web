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
        "flex flex-col gap-2 lg:justify-between h-52 z-10 text-center items-center justify-center",
        centered ? "text-center justify-center" : ""
      )}
    >
      <div>
        {pretitulo && (
          <p className="font-[family-name:var(--font-raleway)] text-base lg:text-lg text-accent font-semibold">
            {pretitulo}
          </p>
        )}
        {titulo && (
          <p
            className={clsx(
              " text-primary font-semibold mt-2 text-4xl",
              centered ? "lg:text-7xl" : "lg:text-5xl"
            )}
          >
            {titulo}
          </p>
        )}
        {subtitulo && (
          <p
            className={clsx(
              "mt-4",
              dark ? "text-grey-primary font-semibold text-base lg:text-lg" : ""
            )}
          >
            {subtitulo}
          </p>
        )}
      </div>
      {boton && (
        <Link
          href={boton.url}
          className="font-[family-name:var(--font-nunito)] font-bold w-full lg:w-[250px] transition-all ease-in hover:scale-105 py-2 px-4 rounded-lg text-white bg-accent shadow-lg"
        >
          {boton.texto}
        </Link>
      )}
    </div>
  );
}
