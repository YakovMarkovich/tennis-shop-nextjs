import { Suspense } from "react";
import { RacketItemsContainer } from "@/components/RacketItemsContainer/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "all rackets",
  description: "all rackets description",
};

const RacketsPage = async () => {
  //throw new Error("some bad error");
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <RacketItemsContainer limit={20} page={1} />
    </Suspense>
  );
};

export default RacketsPage;
