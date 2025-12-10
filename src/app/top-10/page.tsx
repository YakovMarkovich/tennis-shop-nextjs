import { Top10ItemsContainer } from "@/components/top10ItemsContainer/page";
import { Suspense } from "react";

const Top10Page = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Top10ItemsContainer />
    </Suspense>
  );
};

export default Top10Page;
