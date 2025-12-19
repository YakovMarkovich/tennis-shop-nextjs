import styles from "./page.module.css";
import { IRacket } from "@/types/racket";
import RacketItem from "../RacketItem/page";

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
          <RacketItem key={racket.id} racket={racket} />
        ))}
      </div>
    </section>
  );
};

export default RacketItems;
