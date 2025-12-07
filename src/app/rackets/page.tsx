"use client";

import { useState } from "react";
import Link from "next/link";
import { rackets } from "../../data/mock";
import styles from "./page.module.css";

const RacketsPage = () => {
  const brands = Array.from(new Set(rackets.map((r) => r.brand.name)));

  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const filteredRackets = selectedBrand
    ? rackets.filter((r) => r.brand.name === selectedBrand)
    : rackets;

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <h3 className={styles.sidebarHeader}>Брэнд</h3>
        <ul className={styles.brandList}>
          <li
            className={`${styles.brandItem} ${
              selectedBrand === null ? styles.active : ""
            }`}
            onClick={() => setSelectedBrand(null)}
          >
            All
          </li>
          {brands.map((brand) => (
            <li
              key={brand}
              className={`${styles.brandItem} ${
                selectedBrand === brand ? styles.active : ""
              }`}
              onClick={() => setSelectedBrand(brand)}
            >
              {brand}
            </li>
          ))}
        </ul>
      </aside>

      <section className={styles.content}>
        <h2 className={styles.title}>Ракетки</h2>
        <div className={styles.cards}>
          {filteredRackets.map((racket) => (
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
    </div>
  );
};

export default RacketsPage;
