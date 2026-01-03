import { ClientRacketsContainer } from "../ClientsRacketItemsContainer/page";
import { getBrands } from "@/services/get-brands";

export async function RacketItemsContainer() {
  const response = await getBrands();

  const brands = response.data?.map((br) => br.name) ?? [];

  return <ClientRacketsContainer brands={brands} />;
}
