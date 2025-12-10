import { IRacket } from "@/app/types/racket";
import { BASE_API_URL } from "./constants";
import { Response } from "./types";

type Params = {
  limit: number;
  page: number;
};

export const getProducts = async ({
  limit = 10,
  page = 1,
}: Params): Promise<Response<IRacket[]>> => {
  const result = await fetch(
    `${BASE_API_URL}/products?page=${page}&limit=${limit}`
  );

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: IRacket[] = await result.json();

  return { isError: false, data };
};
