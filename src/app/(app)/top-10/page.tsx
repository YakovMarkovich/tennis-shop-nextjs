import { Top10ItemsContainer } from "@/components/top10ItemsContainer/page";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "top 10 rackets",
  description: "top 10 rackets description",
};

const Top10Page = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Top10ItemsContainer />
    </Suspense>
  );
};

export default Top10Page;
