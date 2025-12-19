import { useContext, useEffect } from "react";
import { FavoriteContext } from "./favorite-provider";
import { IRacket } from "@/types/racket";

export const useIsFavoriteById = ({
  id,
  isFavoriteInitial,
}: {
  id: IRacket["id"];
  isFavoriteInitial: boolean;
}) => {
  const { favorites } = useContext(FavoriteContext);

  const isFavoriteGlobal = favorites[id] ?? null;

  const isFavorite = isFavoriteGlobal ?? isFavoriteInitial;

  return isFavorite;
};

export const useSetIsFavorite = () => {
  const { setIsFavorite } = useContext(FavoriteContext);

  return setIsFavorite;
};

export const useHydrateFavorite = ({
  id,
  isFavoriteInitial,
}: {
  id: IRacket["id"];
  isFavoriteInitial: boolean;
}) => {
  const { favorites } = useContext(FavoriteContext);
  const setIsFavorite = useSetIsFavorite();

  useEffect(() => {
    if (favorites[id] === undefined && typeof isFavoriteInitial === "boolean") {
      setIsFavorite({ isFavorite: isFavoriteInitial, id });
    }
  }, [id, isFavoriteInitial, favorites, setIsFavorite]);
};
