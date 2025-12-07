import { RacketCarouselContainer } from "@/components/RacketCarouselContainer/page";
import { Suspense } from "react";
import { getProducts } from "@/services/get-products";
import { getTop10Products } from "@/services/get-top10-products";

const HomePage = async () => {
  return (
    <>
      <Suspense fallback={<div>Загрузка...</div>}>
        <RacketCarouselContainer
          title="Ракетки"
          link="/rackets"
          linkText={"Все"}
          limit={10}
          page={1}
          fetcher={getProducts}
        />
      </Suspense>
      <Suspense fallback={<div>Загрузка...</div>}>
        <RacketCarouselContainer
          title="Top-10"
          link="/top-10"
          linkText={"Top-10"}
          limit={10}
          page={1}
          fetcher={getTop10Products}
        />
      </Suspense>
    </>
  );
};

export default HomePage;
