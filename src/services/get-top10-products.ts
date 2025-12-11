import { IRacket } from "@/app/types/racket";
import { BASE_API_URL } from "./constants";
import { Response } from "./types";

export const getTop10Products = async (): Promise<Response<IRacket[]>> => {
  const result = await fetch(`${BASE_API_URL}/top-10`, {
    next: {
      tags: ["getTop10Rackets"],
    },
  });

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: IRacket[] = await result.json();

  return { isError: false, data };
};
