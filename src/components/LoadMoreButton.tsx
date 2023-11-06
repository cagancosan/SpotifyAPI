import React from "react";
import { Button } from "./ui/button";
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import { Artist, Page } from "@spotify/web-api-ts-sdk";

type LoadMoreButtonProps = {
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<
    InfiniteQueryObserverResult<InfiniteData<Page<Artist>, unknown>, Error>
  >;
};

export const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}) => {
  return (
    <Button
      className="flex items-center text-white transition-all duration-500 bg-black w-300 bg-opacity-80 hover:scale-110"
      onClick={async (e) => {
        e.preventDefault();
        await fetchNextPage();
      }}
    >
      {isFetchingNextPage
        ? "Loading More..."
        : hasNextPage
        ? "Load More"
        : "Nothing to Load"}
    </Button>
  );
};