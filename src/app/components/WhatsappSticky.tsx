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
    <Link href={link} className="fixed bottom-12 right-12 w-fit z-50">
      <Image
        src="/whatsapp.png"
        width={60}
        height={60}
        alt="contactar por whatsapp"
      />
    </Link>
  );
}
