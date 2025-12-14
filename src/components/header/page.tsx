"use client";
import { usePathname, useRouter } from "next/navigation";
import styles from "./page.module.css";
import { NavLink } from "../NavLink/page";
import { use } from "react";
import { UserContext } from "@/providers/user-provider";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const user = use(UserContext);

  return (
    <>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.authButtons}>
            {!user ? (
              <>
                <button
                  onClick={() => router.push("/login")}
                  className={styles.authBtn}
                >
                  Sign In
                </button>
                <button
                  onClick={() => router.push("/signup")}
                  className={styles.authBtn}
                >
                  Sign Up
                </button>
              </>
            ) : (
              <button
                onClick={() => router.push("/logout")}
                className={styles.authBtn}
              >
                Logout
              </button>
            )}
          </div>
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
