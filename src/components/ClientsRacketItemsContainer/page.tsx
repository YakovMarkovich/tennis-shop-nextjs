"use client";

import RacketItems from "../RacketItems/page";
import { RacketsSidebar } from "../RacketsSideBar/page";
import { IRacket } from "@/types/racket";
import { BASE_API_URL } from "@/services/constants";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { LIMIT } from "@/app/(app)/rackets/constants";

type ClientRacketsProps = {
  brands: string[];
};

const fetcher = async (path: string) => {
  const result = await fetch(`${BASE_API_URL}/${path}`, {
    credentials: "include",
  });

  return { data: await result.json() };
};

export function ClientRacketsContainer({ brands }: ClientRacketsProps) {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") || "") || 1;
  const limit = parseInt(searchParams.get("limit") || "") || LIMIT;
  const brandParam = searchParams.get("brand");
  const brand = brandParam ? brandParam : null;

  const query = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  if (brand) {
    query.set("brand", String(brand));
  }

  const { data, isLoading, error } = useSWR<{ data: IRacket[] }>(
    `products?${query.toString()}`,
    fetcher,
    { revalidateIfStale: false, revalidateOnFocus: false }
  );

  const rackets = data?.data;

  const updatePage = (page: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", String(page));
    window.history.pushState({}, "", `?${params.toString()}`);
  };

  const updateBrand = (brand: string | null) => {
    const params = new URLSearchParams(window.location.search);

    if (brand) {
      params.set("brand", brand);
    } else {
      params.delete("brand");
    }

    params.set("page", "1"); // reset page when changing brand

    window.history.pushState({}, "", `?${params.toString()}`);
  };

  if (isLoading) {
    return "loading...";
  }

  if (error) {
    return "error";
  }

  if (!rackets?.length) {
    return "no rackets";
  }

  return (
    <div style={{ display: "flex" }}>
      <RacketsSidebar
        brands={brands}
        selectedBrand={brand}
        onSelectBrand={updateBrand}
      />

      <RacketItems items={rackets} title={"Ракетки"} />

      <div>
        {page > 1 && <button onClick={() => updatePage(page - 1)}>prev</button>}
        <span>{page}</span>
        {rackets.length >= LIMIT && (
          <button onClick={() => updatePage(page + 1)}>next</button>
        )}
      </div>
    </div>
  );
}
