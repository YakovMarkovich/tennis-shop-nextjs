import { BASE_API_URL } from "@/services/constants";
import { Props } from "./types";

export const handleFavorite = async ({ isFavorite, racketId }: Props) => {
  const url = `${BASE_API_URL}/product/${racketId}/favorite`;

  return isFavorite
    ? fetch(url, { credentials: "include", method: "DELETE" })
    : fetch(url, { credentials: "include", method: "POST" });
};
