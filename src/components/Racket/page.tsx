import { IRacket } from "@/app/types/racket";
import styles from "./page.module.css";

type Props = {
  racket: IRacket;
};
export const Racket = ({ racket }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.brand}>{racket.brand.name}</div>
        <div className={styles.name}>{racket.name}</div>
        <div className={styles.description}>{racket.description}</div>
      </div>

      <div className={styles.center}>
        <img src={racket.imageUrl} alt={racket.name} className={styles.image} />
      </div>

      <div className={styles.right}>
        <div className={styles.price}>${racket.price}</div>
      </div>
    </div>
  );
};
