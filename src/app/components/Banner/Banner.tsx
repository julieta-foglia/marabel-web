import BannerFondo from "./BannerFondo";
import BannerImagen from "./BannerImagen";
import BannerProductos from "./BannerProductos";
import HeroBanner from "./HeroBanner";

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
    items: Array<{
      link: string;
      titulo: string;
      archivo: {
        url: string;
      };
    }>;
  };
  archivosCollection: {
    items: Array<{
      url: string;
    }>;
  };
}

export default async function Banner(props: BannerProps) {
  const { titulo, disposicion } = props;

  const Content = () => {
    switch (disposicion) {
      case "carrusel":
        return <HeroBanner title={titulo} />;
      case "fondo":
        return <BannerFondo {...props} />;
      case "productos":
        return <BannerProductos {...props} />;
      default:
        return <BannerImagen {...props} />;
    }
  };

  return <div className="w-full flex flex-col items-center">{Content()}</div>;
}
