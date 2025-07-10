import { pageQuery } from "../cms/constants";
import { getQuery } from "../cms/getQuery";
import LinkIcon from "./LinkIcon";

interface QueryResponse {
  paginaCollection: {
    items: Array<any>;
  };
}

export default async function Footer() {
  const query = pageQuery("Contacto");
  const data = await getQuery<QueryResponse>({ query });
  const [page] = data.data.paginaCollection.items;

  if (!page || !page.linksContactoCollection.items.length) {
    return null;
  }

  return (
    <footer className="bg-white px-10 py-5 shadow-2xs flex flex-row items-center justify-center gap-4 w-full">
      {page.linksContactoCollection.items.map((item: any) => {
        return (
          <LinkIcon
            key={item.texto}
            link={item.url}
            icon={item.icono.url}
            className="transition-all ease-in hover:scale-110 cursor-pointer"
          />
        );
      })}
    </footer>
  );
}
