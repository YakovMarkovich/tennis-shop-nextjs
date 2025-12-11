import { Racket } from "@/components/Racket/page";
import { getProductById } from "@/services/get-product-byId";
import notFound from "./not-found";
import { Metadata } from "next";
import { getMetaRacketById } from "@/services/get-meta-racket-by-id";

export async function generateMetadata({
  params,
}: PageProps<"/racket/[racketId]">): Promise<Metadata> {
  const { racketId } = await params;

  const { isError, data } = await getMetaRacketById({ id: racketId });

  if (isError || !data) {
    return {
      title: "default title",
      description: "default description",
    };
  }

  return {
    title: data.name,
    description: data.description,
  };
}

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
