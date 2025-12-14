import Link from "next/link";
import styles from "./page.module.css";
import { IRacket } from "@/types/racket";

interface Props {
  title: string;
  link: string;
  linkText: string;
  items: IRacket[];
}

const RacketCarousel = ({ title, link, linkText, items }: Props) => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <Link href={link}>{linkText}</Link>
      </div>

      <div className={styles.carousel}>
        {items.map((racket) => (
          <div key={racket.id} className={styles.card}>
            <Link href={`/racket/${racket.id}`}>
              <img
                src={racket.imageUrl}
                alt={racket.name}
                width={200}
                height={250}
                className={styles.image}
              />
            </Link>
            <div className={styles.name}>{racket.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RacketCarousel;
