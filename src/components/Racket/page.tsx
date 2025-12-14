"use client";

import { IRacket } from "@/types/racket";
import styles from "./page.module.css";
import { use } from "react";
import { UserContext } from "@/providers/user-provider";

type Props = {
  racket: IRacket;
};
export const Racket = ({ racket }: Props) => {
  const user = use(UserContext);

  function handleClick() {
    // TODO toggle favorites
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
        {!!user && (
          <button onClick={handleClick}>
            {!!racket?.userData?.isFavorite
              ? "remove from favorites"
              : "add to favorites"}
          </button>
        )}
      </div>
    </div>
  );
};
