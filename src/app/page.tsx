import Link from "next/link";
import styles from "./page.module.css";
import { rackets } from "../data/mock";

const HomePage = () => {
  return (
    <>
      <main className={styles.carousel}>
        {rackets.map((racket) => (
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
      </main>
    </>
  );
};

export default HomePage;
