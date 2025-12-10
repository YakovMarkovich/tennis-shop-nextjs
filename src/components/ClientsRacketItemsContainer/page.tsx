"use client";

import { useState } from "react";
import RacketItems from "../RacketItems/page";
import { RacketsSidebar } from "../RacketsSideBar/page";
import { IRacket } from "@/app/types/racket";

type ClientRacketsProps = {
  items: IRacket[];
  brands: string[];
};

export function ClientRacketsContainer({ items, brands }: ClientRacketsProps) {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const filtered = selectedBrand
    ? items.filter((r) => r.brand.name === selectedBrand)
    : items;

  return (
    <div style={{ display: "flex" }}>
      <RacketsSidebar
        brands={brands}
        selectedBrand={selectedBrand}
        onSelectBrand={setSelectedBrand}
      />

      <RacketItems items={filtered} title={"Ракетки"} />
    </div>
  );
}
