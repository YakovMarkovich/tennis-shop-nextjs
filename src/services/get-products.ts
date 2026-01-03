import { IRacket } from "@/types/racket";
import { BASE_API_URL } from "./constants";
import { Response } from "./types";
import { cookies } from "next/headers";

type Params = {
  limit: number;
  page: number;
  brand: string | undefined | string[];
};

export const getProducts = async ({
  limit = 10,
  page = 1,
  brand,
}: Params): Promise<Response<IRacket[]>> => {
  const cookieStore = await cookies();

  const query = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  if (brand) {
    query.set("brand", String(brand));
  }

  const result = await fetch(`${BASE_API_URL}/products?${query.toString()}`, {
    headers: {
      Cookie: cookieStore.toString(),
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
