import { RacketItemsContainer } from "@/components/RacketItemsContainer/page";
import { Metadata } from "next";
import { SWRConfig } from "swr";
import { LIMIT } from "./constants";
import { getProducts } from "@/services/get-products";

export const metadata: Metadata = {
  title: "all rackets",
  description: "all rackets description",
};

const RacketsPage = async ({ searchParams }: PageProps<"/rackets">) => {
  const { page = "1", brand } = await searchParams;

  let pageNumber = 1;

  if (typeof page === "string") {
    pageNumber = parseInt(page || "") || 1;
  }

  return (
    <SWRConfig
      value={{
        fallback: {
          [`products?page=${page}&limit=${LIMIT}&brand=${brand}`]:
            await getProducts({
              page: pageNumber,
              limit: LIMIT,
              brand: brand,
            }),
        },
      }}
    >
      <RacketItemsContainer />
    </SWRConfig>
  );
};

export default RacketsPage;
