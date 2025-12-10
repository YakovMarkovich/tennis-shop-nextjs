import RacketItems from "../RacketItems/page";
import { getTop10Products } from "@/services/get-top10-products";

export async function Top10ItemsContainer() {
  const response = await getTop10Products();
  const items = response.data ?? [];
  return <RacketItems items={items} title={"Top-10 ракеток"} />;
}
