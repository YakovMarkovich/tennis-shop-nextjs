"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { IRacket } from "@/types/racket";
import { ToggleFavoriteButton } from "../ToggleFavoriteButton/page";
import {
  useHydrateFavorite,
  useIsFavoriteById,
} from "@/providers/favorite-provider/hooks";

interface RacketItemProps {
  racket: IRacket;
}

const RacketItem = ({ racket }: RacketItemProps) => {
  const { imageUrl, name, id, userData } = racket;

  useHydrateFavorite({ id, isFavoriteInitial: Boolean(userData?.isFavorite) });

  return (
    <div key={id} className={styles.card}>
      <Link href={`/racket/${id}`}>
        <img
          src={imageUrl}
          alt={name}
          width={200}
          height={250}
          className={styles.image}
        />
      </Link>
      <div className={styles.name}>{name}</div>
      <ToggleFavoriteButton
        racketId={id}
        isFavorite={Boolean(userData?.isFavorite)}
      />
    </div>
  );
};

export default RacketItem;
