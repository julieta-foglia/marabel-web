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
    }
  }
}
`;
