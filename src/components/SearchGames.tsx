import React from "react";
import { Search } from "../assets/game-category";
import useFilter from "@/hooks/useFilter";
import { useRootContext } from "@/context/useRootContext";
import SearchMenu from "../assets/SearchMenu";
import { classNames } from "@/utils/className";
import debounce from "@/utils/debounce";
import Button from "./common/button/Button";

const SearchGames = () => {
  const { dispatch } = useRootContext();
  const { handleSetFilter } = useFilter();

  const handleDebounce = debounce((...args: unknown[]) => {
    const e = args[0] as React.ChangeEvent<HTMLInputElement>;
    handleSetFilter({ search: e.target.value });
  }, 500);

  return (
    <>
      <div className="flex gap-3 w-full px-4 py-2 sticky top-[98px] bg-white">
        <div
          className={classNames(
            "flex-1 flex gap-1 pl-3 h-fit",
            "ring-1 ring-primary rounded-md items-center"
          )}
        >
          <Search className="flex-none size-5 text-tertiary" />
          <input
            type="search"
            name="search"
            placeholder="Search games"
            className={classNames(
              "w-full h-full flex-1 px-2 py-2 rounded-l-none rounded-r-md",
              "focus:outline-none focus:ring-0 focus:ring-transparent focus:border-primary"
            )}
            onChange={handleDebounce}
          />
        </div>
        <Button
          size="xs"
          className="flex-none ring-1 ring-tertiary rounded-md"
          onClick={() =>
            dispatch({ type: "SET_GAME_PROVIDER_MENU", payload: true })
          }
        >
          <SearchMenu className="size-5 text-tertiary" />
        </Button>
      </div>
    </>
  );
};

export default SearchGames;