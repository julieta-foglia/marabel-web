import { pageQuery } from "../cms/constants";
import { getQuery } from "../cms/getQuery";
import HeroBanner from "../components/Banner/HeroBanner";
import LinkIcon from "../components/LinkIcon";

interface QueryResponse {
  paginaCollection: {
    items: Array<any>;
  };
}

export default async function Contacto() {
  const query = pageQuery("Contacto");
  const data = await getQuery<QueryResponse>({ query });
  const [page] = data.data.paginaCollection.items;

  if (!page || !page.linksContactoCollection.items.length) {
    return null;
  }

  return (
    <div className="font-[family-name:var(--font-nunito)]">
      <HeroBanner title="contacto" />
      <div className="p-12 mb-10">
        <div className="flex flex-col gap-4">
          <p className="text-primary font-semibold text-2xl">Contactanos</p>
          <p className="text-grey-primary">
            Te invitamos a seguirnos en redes sociales y contactarnos por
            whatsapp
          </p>
          <div className="flex flex-col gap-3">
            {page.linksContactoCollection.items.map((item: any) => {
              return (
                <LinkIcon
                  key={item.texto}
                  text={item.texto}
                  link={item.url}
                  icon={item.icono.url}
                  className="hover:underline hover:underline-offset-4 hover:decoration-primary transition-all ease-in"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
