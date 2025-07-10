import { gql } from "@apollo/client";

export const imageFileQuery = (title: string) => gql`query MyQuery {
  assetCollection(where: { title: "${title}" }) {
    items {
      contentType
      description
      fileName
      height
      size
      url
      width
      title
    }
  }
}
`;

export const bannerQuery = (title: string) => gql`
query MyQuery {
  bannerCollection(where: { titulo_contains:"${title}"}) {
    items {
      disposicion
      pretitulo
      subtitulo
      titulo
      archivosCollection {
        items {
          url
        }
      }
    }
  }
}
`;

export const pageQuery = (title: string) => gql`
query MyQuery {
  paginaCollection(where: {tituloPagina_contains: "${title}"}) {
    items {
      linksContactoCollection(limit: 10) {
        items {
          id
          url
          texto
          icono {
            url
          }
        }
      }
      tituloPagina
      tituloPagina
      heroBanner {
        disposicion
        pretitulo
        subtitulo
        titulo
      }
      bannerCollection(limit: 8) {
        items {
          pretitulo
          subtitulo
          titulo
          disposicion
          boton {
            url
            texto
          }
          imagenCollection(limit: 4) {
            items {
              link
              titulo
              archivo {
                url
              }
            }
          }
          archivosCollection(limit: 1) {
            items {
              url
            }
          }
        }
      }
    }
  }
}
`;

export const productsQuery = (category?: string) => gql`
query MyQuery {
  productoCollection${
    Boolean(category) ? `(where: {categoria: "${category}"})` : ""
  } {
    items {
      titulo
      categoria {
        nombre
        icono
      }
      imagenCollection(limit: 1) {
        items {
          url
        }
      }
    }
  }
}
`;

export const productQuery = (title: string) => gql`
query MyQuery {
  productoCollection(where: {titulo: "${title}"}) {
    items {
      titulo
      categoria {
        nombre
      }
      descripcion
      contenido
      presentacion
      imagenCollection(limit: 1) {
        items {
          url
        }
      }
    }
  }
}
`;

export const categoryQuery = gql`
  query MyQuery {
    categoriaCollection {
      items {
        icono
        nombre
      }
    }
  }
`;
