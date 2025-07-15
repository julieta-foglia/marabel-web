import Link from "next/link";
import MaterialIcon from "./MaterialIcon";

interface BreadcrumbProps {
  title: string;
  initial: {
    title: string;
    link: string;
  };
}

export default async function Breadcrumb({ title, initial }: BreadcrumbProps) {
  return (
    <div className="flex flex-row gap-2 items-center pb-4">
      <Link href={initial.link} className="cursor-pointer text-lg">
        {initial.title}
      </Link>
      <MaterialIcon name="arrow_forward_ios" fontSize={16} />
      <p className="font-bold text-lg">{title}</p>
    </div>
  );
}
