"use client";

import { useEffect } from "react";
import { useGetPage } from "../cms";
import LinkIcon from "../components/LinkIcon";

export default function Contacto() {
  const { page, getPage } = useGetPage();

  useEffect(() => {
    getPage({ title: "Contacto" });
  }, []);

  if (!page || !page.linksContactoCollection.items.length) {
    return null;
  }

  return (
    <div className="font-[family-name:var(--font-nunito)]">
      <>
        <p className="text-primary font-semibold text-2xl">Contactanos</p>
        <p className="text-grey-primary">
          Te invitamos a seguirnos en redes sociales y contactarnos por whatsapp
        </p>
        <div className="flex flex-col gap-2">
          {page.linksContactoCollection.items.map((item: any) => {
            return (
              <LinkIcon
                text={item.texto}
                link={item.url}
                icon={item.icono.url}
              />
            );
          })}
        </div>
      </>
    </div>
  );
}
