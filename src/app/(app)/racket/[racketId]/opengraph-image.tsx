import { getProductById } from "@/services/get-product-byId";
import { IRacket } from "@/types/racket";
import { ImageResponse } from "next/og";

export const contentType = "image/png";

interface Props {
  params: Promise<{ racketId: string }>;
}

export const Image = ({ racket }: { racket: IRacket }) => {
  return (
    <div style={{ display: "flex" }}>
      <img
        src={racket.imageUrl}
        style={{ width: "100px", height: "100px" }}
        alt=""
      />
      <div>{racket.name}</div>
    </div>
  );
};

const OGImage = async ({ params }: Props) => {
  const { racketId } = await params;
  const { data } = await getProductById({ id: racketId });

  if (!data) {
    return null;
  }

  return new ImageResponse(<Image racket={data} />, {
    width: 1200,
    height: 630,
  });
};

export default OGImage;
