"use client";
import { usePathname } from "next/navigation";
import styles from "./page.module.css";
import { NavLink } from "../NavLink/page";

const Header = () => {
  const pathname = usePathname();

  return (
    <>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.title}>TENNIS STORE</div>
          <ul className={styles.nav}>
            <NavLink href="/" pathname={pathname}>
              Главная
            </NavLink>
            <NavLink href="/rackets" pathname={pathname}>
              Ракетки
            </NavLink>
            <NavLink href="/top-10" pathname={pathname}>
              Top-10
            </NavLink>
          </ul>
        </header>
        <hr className={styles.divider} />
      </div>
    </>
  );
};

export default Header;
