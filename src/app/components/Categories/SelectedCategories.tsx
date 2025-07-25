import { CategoriesProps } from "@/app/types";
import MaterialIcon from "../MaterialIcon";

export default function SelectedCategories({
  selectedCategory,
  setSelectedCategory,
}: CategoriesProps) {
  return (
    <div className="hidden lg:flex flex-col w-max gap-2">
      <p className="text-xl text-primary font-semibold">Filtros aplicados</p>
      <button
        className="flex flex-row items-center gap-2 justify-between py-1 px-3 rounded-lg bg-secondary-opacity cursor-pointer w-fit"
        onClick={() => setSelectedCategory(null)}
      >
        <MaterialIcon name="close" fontSize={16} />
        {selectedCategory}
      </button>
    </div>
  );
}
