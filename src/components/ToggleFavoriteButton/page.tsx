"use client";

import {
  useIsFavoriteById,
  useSetIsFavorite,
} from "@/providers/favorite-provider/hooks";
import { FC } from "react";
import { handleFavorite } from "./handleFavorite";
import { Props } from "./types";

export const ToggleFavoriteButton: FC<Props> = ({
  isFavorite: isFavoriteInitial,
  racketId,
}) => {
  const isFavorite = useIsFavoriteById({ id: racketId, isFavoriteInitial });
  const setIsFavorite = useSetIsFavorite();

  const handleClick = async () => {
    setIsFavorite({ id: racketId, isFavorite: !isFavorite });

    await handleFavorite({ isFavorite, racketId });
  };

  return (
    <button onClick={handleClick}>
      {isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
    </button>
  );
};
