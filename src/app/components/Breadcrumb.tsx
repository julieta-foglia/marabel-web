import Link from "next/link";
import MaterialIcon from "./MaterialIcon";

interface BreadcrumbProps {
  title: string;
}

export default async function Breadcrumb({ title }: BreadcrumbProps) {
  return (
    <div className="flex flex-row gap-2 items-center pb-4">
      <Link href="/productos" className="cursor-pointer text-lg">
        Productos
      </Link>
      <MaterialIcon name="arrow_forward_ios" fontSize={16} />
      <p className="font-bold text-lg">{title}</p>
    </div>
  );
}
