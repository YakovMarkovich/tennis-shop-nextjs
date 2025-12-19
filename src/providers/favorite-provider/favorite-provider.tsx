"use client";

import { IRacket } from "@/types/racket";
import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useState,
} from "react";

interface SetFavoriteParams {
  id: IRacket["id"];
  isFavorite: boolean;
}

interface FavoriteContextType {
  favorites: Record<IRacket["id"], boolean>;
  setIsFavorite: (params: SetFavoriteParams) => void;
}

export const FavoriteContext = createContext<FavoriteContextType>({
  favorites: [],
  setIsFavorite: () => {},
});

export const FavoriteProvider: FC<PropsWithChildren> = ({ children }) => {
  const [favorites, setFavorites] = useState<FavoriteContextType["favorites"]>(
    {}
  );

  const setIsFavorite = useCallback(({ isFavorite, id }: SetFavoriteParams) => {
    setFavorites((prev) => {
      if (prev[id] === isFavorite) {
        return prev;
      }

      return {
        ...prev,
        [id]: isFavorite,
      };
    });
  }, []);

  return (
    <FavoriteContext value={{ favorites, setIsFavorite }}>
      {children}
    </FavoriteContext>
  );
};
