import { IBrand } from "@/app/types/brand";
import { BASE_API_URL } from "./constants";
import { Response } from "./types";

export const getBrands = async (): Promise<Response<IBrand[]>> => {
  const result = await fetch(`${BASE_API_URL}/brands`);

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: IBrand[] = await result.json();

  return { isError: false, data };
};
