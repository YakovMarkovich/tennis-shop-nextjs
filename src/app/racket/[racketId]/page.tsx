import { Racket } from "@/components/Racket/page";
import { getProductById } from "@/services/get-product-byId";
import notFound from "./not-found";

const RacketPage = async ({ params }: PageProps<"/racket/[racketId]">) => {
  const { racketId } = await params;

  const { isError, data } = await getProductById({ id: racketId });

  if (!isError && !data) {
    return notFound();
  }

  if (isError || !data) {
    return "error";
  }

  return <Racket racket={data} />;
};

export default RacketPage;
