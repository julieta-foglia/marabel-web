import { BannerProps } from "@/app/types";
import BannerFondo from "./BannerFondo";
import BannerImagen from "./BannerImagen";
import BannerProductos from "./BannerProductos";
import HeroBanner from "./HeroBanner";

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
