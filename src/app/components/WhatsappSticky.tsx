import Image from "next/image";
import Link from "next/link";
import { whatsappQuery } from "../cms/constants";
import { getQuery } from "../cms/getQuery";
import { PageQueryResponse } from "../types";

export default async function WhatsappSticky() {
  const data = await getQuery<PageQueryResponse>({ query: whatsappQuery });
  const [page] = data.data.paginaCollection.items;

  if (!page || !page.linksContactoCollection.items.length) {
    return null;
  }

  const link = page.linksContactoCollection.items[0].url;

  return (
    <Link
      href={link}
      className="fixed bottom-5 right-5 lg:bottom-12 lg:right-12 z-50 w-12 h-12 lg:w-16 lg:h-16"
    >
      <Image
        src="/whatsapp.png"
        fill
        className="object-contain"
        alt="contactar por whatsapp"
      />
    </Link>
  );
}
