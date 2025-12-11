import { getProducts } from "@/services/get-products";
import { ClientRacketsContainer } from "../ClientsRacketItemsContainer/page";
import { getBrands } from "@/services/get-brands";

type Props = {
  limit: number;
  page: number;
};

export async function RacketItemsContainer({ limit, page }: Props) {
  const response = await getProducts({ limit, page });
  const items = response.data ?? [];
  const responseBrands = await getBrands();
  const brands = responseBrands.data?.map((br) => br.name) ?? [];

  return <ClientRacketsContainer items={items} brands={brands} />;
}
