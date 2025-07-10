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
        "flex flex-col gap-2 justify-between h-52 z-10",
        centered ? "text-center justify-center" : ""
      )}
    >
      <div>
        {pretitulo && (
          <p className="font-[family-name:var(--font-raleway)] text-lg text-accent font-semibold">
            {pretitulo}
          </p>
        )}
        {titulo && (
          <p className="text-5xl text-primary font-semibold mt-2">{titulo}</p>
        )}
        {subtitulo && (
          <p
            className={clsx(
              "mt-4",
              dark ? "text-grey-primary font-semibold text-lg" : ""
            )}
          >
            {subtitulo}
          </p>
        )}
      </div>
      {boton && (
        <Link
          href={boton.url}
          className="font-[family-name:var(--font-raleway)] font-semibold w-fit hover:border cursor-box zoom-in py-2 px-4 rounded-lg text-grey-primary"
        >
          {boton.texto}
        </Link>
      )}
    </div>
  );
}
