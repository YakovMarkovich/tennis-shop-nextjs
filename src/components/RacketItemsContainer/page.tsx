import { getProducts } from "@/services/get-products";
import { ClientRacketsContainer } from "../ClientsRacketItemsContainer/page";

type Props = {
  limit: number;
  page: number;
};

export async function RacketItemsContainer({ limit, page }: Props) {
  const response = await getProducts({ limit, page });
  const items = response.data ?? [];
  const brands = Array.from(new Set(items.map((r) => r.brand.name)));

  return <ClientRacketsContainer items={items} brands={brands} />;
}
