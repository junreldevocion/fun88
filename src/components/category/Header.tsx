
import React, { useMemo } from "react";
import { useRootContext } from "@/context/useRootContext";
import { classNames } from "@/utils/className";
import SearchMenu from "@/assets/SearchMenu";
import Button from "../common/button/Button";
import SVGWrapper from "../common/wrapper/SVGWrapper";

const GameProviderHeader = () => {
  const { state, dispatch } = useRootContext();

  const providerCount = useMemo(
    (): number => state?.gameProvider?.data?.length ?? 0,
    [state?.gameProvider?.data]
  );

  const isFetching = useMemo(
    (): boolean => state?.gameProvider?.isFetching ?? false,
    [state?.gameProvider?.isFetching]
  );

  return (
    <div
      className={classNames(
        "px-3 py-2 flex items-center justify-between",
        "bg-primary sticky top-0 text-white"
      )}
    >
      <div className="flex items-center gap-2">
        <SearchMenu className="size-6" />
        <span className="text-base">Game Provider</span>
        {isFetching ? (
          <span
            className={classNames(
              "h-5 w-8 py-auto rounded-full",
              "bg-gray-300 animate-pulse"
            )}
          />
        ) : (
          <span
            className={classNames(
              "px-3 py-auto rounded-full",
              "ring-1 ring-white text-sm"
            )}
          >
            {providerCount}
          </span>
        )}
      </div>
      <Button
        size="xs"
        onClick={() =>
          dispatch({ type: "SET_GAME_PROVIDER_MENU", payload: false })
        }
      >
        <SVGWrapper alt="Close" src="/assets/close.svg" className="size-4" />
      </Button>
    </div>
  );
};

export default GameProviderHeader;