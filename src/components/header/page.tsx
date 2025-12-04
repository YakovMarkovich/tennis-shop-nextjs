"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./page.module.css";

const Header = () => {
  const pathname = usePathname();

  return (
    <>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.title}>TENNIS STORE</div>
          <ul className={styles.nav}>
            <Link
              href="/"
              className={`${styles.links} ${
                pathname === "/" ? styles.active : ""
              }`}
            >
              Главная
            </Link>
            <Link
              href="/rackets"
              className={`${styles.links} ${
                pathname === "/rackets" ? styles.active : ""
              }`}
            >
              Ракетки
            </Link>
          </ul>
        </header>
        <hr className={styles.divider} />
      </div>
    </>
  );
};

export default Header;
