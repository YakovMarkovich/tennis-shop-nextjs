import Link from "next/link";
import styles from "./page.module.css";
import { IRacket } from "@/types/racket";

interface Props {
  title: string;
  items: IRacket[];
}

const RacketItems = ({ title, items }: Props) => {
  return (
    <section className={styles.content}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cards}>
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
    </section>
  );
};

export default RacketItems;
