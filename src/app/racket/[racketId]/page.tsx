import styles from "./page.module.css";
import { rackets } from "@/data/mock";

export const generateStaticParams = () => {
  return [{ racketId: "1" }, { racketId: "2" }, { racketId: "13" }];
};

const RacketPage = async ({ params }: PageProps<"/racket/[racketId]">) => {
  const { racketId } = await params;

  console.log({ racketId });
  const racket = rackets.find((r) => r.id === Number(racketId));

  if (!racket) {
    return <div>{`Racket with id ${racketId} not exists`}</div>;
  }

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

export default RacketPage;
