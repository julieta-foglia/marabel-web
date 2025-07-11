export interface LinkProps {
  id: string;
  url: string;
  texto: string;
  icono: {
    url: string;
  };
}

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

export interface PageProps {
  linksContactoCollection: {
    items: Array<LinkProps>;
  };
  tituloPagina: string;
  heroBanner: {
    disposicion: string;
    pretitulo: string;
    subtitulo: string;
    titulo: string;
  };
  bannerCollection: {
    items: Array<BannerProps>;
  };
}

export interface PageQueryResponse {
  paginaCollection: {
    items: Array<PageProps>;
  };
}

export interface ProductProps {
  titulo: string;
  categoria: {
    nombre: string;
    icono: string;
  };
  imagenCollection: {
    items: Array<{ url: string }>;
  };
  presentacion?: string;
  contenido?: string;
  descripcion?: string;
}

export interface ProductQueryResponse {
  productoCollection: {
    items: Array<ProductProps>;
  };
}

export interface CategoryProps {
  nombre: string;
  icono: string;
}

interface AssetProps {
  contentType: string;
  description: string;
  fileName: string;
  height: string;
  size: string;
  url: string;
  width: string;
  title: string;
}

export interface AssetQueryResponse {
  assetCollection: {
    items: Array<AssetProps>;
  };
}

export interface CategoryQueryResponse {
  categoriaCollection: {
    items: Array<CategoryProps>;
  };
}

export interface MenuOptionProps {
  nombre: string;
  icono: string;
  onClick?: () => void;
}

export interface BannerQueryResponse {
  bannerCollection: {
    items: Array<BannerProps>;
  };
}
