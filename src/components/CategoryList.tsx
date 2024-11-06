'use client'

import { classNames } from "@/utils/className";
import CategoryItem from "./CategoryItem";
import { Search } from "@/assets/game-category";
import CATEGORY_LIST from "./categories";
import { useMemo } from "react";
import useFilter from "@/hooks/useFilter";
import SearchGames from "./SearchGames";

const CategoryList = () => {
  const { filters } = useFilter();

  const isSearchTabActive = useMemo(
    () => filters?.showSearchField,
    [filters?.showSearchField]
  );
  return (
    <>
      <div
        className={classNames(
          "max-w-full h-fit bg-white pl-2 sticky top-[50px]",
          "flex-none flex items-center justify-evenly"
        )}
      >
        <CategoryItem
          title="Search"
          Icon={Search}
          isActive={isSearchTabActive}
        />
        <div className="block w-[1px] h-[30px] bg-[#88888880]" />
        <div className="flex items-center gap-1  overflow-x-auto overflow-y-hidden hide-scrollbar snap-proximity snap-x">
          {CATEGORY_LIST.map(({ title, Icon }, index) => {
            return <CategoryItem key={index} title={title} Icon={Icon} />;
          })}
        </div>
      </div>
      {isSearchTabActive ? <SearchGames /> : null}
    </>
  );
}

export default CategoryList