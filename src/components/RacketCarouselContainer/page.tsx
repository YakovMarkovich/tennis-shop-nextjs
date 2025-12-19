import RacketCarousel from "../RacketCarousel/page";
import { IRacket } from "@/types/racket";

type Fetcher = (params: { limit: number; page: number }) => Promise<{
  isError: boolean;
  data?: IRacket[];
}>;

type Props = {
  title: string;
  link: string;
  linkText: string;
  limit: number;
  page: number;
  fetcher: Fetcher;
};

export async function RacketCarouselContainer({
  title,
  link,
  linkText,
  limit,
  page,
  fetcher,
}: Props) {
  const response = await fetcher({ limit, page });
  const items = response.data ?? [];

  return (
    <RacketCarousel
      title={title}
      link={link}
      linkText={linkText}
      items={items}
    />
  );
}
