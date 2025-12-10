import { Suspense } from "react";
import { RacketItemsContainer } from "@/components/RacketItemsContainer/page";

const RacketsPage = async () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <RacketItemsContainer limit={20} page={1} />
    </Suspense>
  );
};

export default RacketsPage;
