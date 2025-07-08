import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export interface BannerProps {
  pretitulo: string;
  subtitulo: string;
  titulo: string;
  disposicion: string;
  boton: {
    url: string;
    texto: string;
  };
  imagenCollection: {
    items: {
      link: string;
    };
  };
  archivosCollection: {
    items: Array<{
      url: string;
    }>;
  };
}

const DISPOSICION: Record<string, string> = {
  "imagen a izquierda": "flex-row",
  "imagen a derecha": "flex-row-reverse",
};

export default async function Banner({
  pretitulo,
  subtitulo,
  titulo,
  disposicion,
  boton,
  archivosCollection,
}: BannerProps) {
  return (
    <div
      className={clsx(
        "flex bg-white gap-8 w-full grow py-10 items-center justify-center",
        DISPOSICION[disposicion]
      )}
    >
      <Image
        src={archivosCollection.items[0].url}
        alt={titulo}
        width={400}
        height={400}
      />
      <div className="flex flex-col gap-2 justify-between h-52">
        <div>
          <p className="font-[family-name:var(--font-raleway)] text-lg text-accent font-semibold">
            {pretitulo}
          </p>
          <p className="text-5xl text-primary font-semibold mt-2">{titulo}</p>
          <p className="mt-4">{subtitulo}</p>
        </div>
        <Link
          href={boton.url}
          className="w-fit hover:border bg-secondary hover:bg-white hover:border-accent py-2 px-4 rounded-lg"
        >
          {boton.texto}
        </Link>
      </div>
    </div>
  );
}
