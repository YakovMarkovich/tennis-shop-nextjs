import Link from "next/link";
import styles from "./page.module.css";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  pathname: string;
  children: ReactNode;
}

export const NavLink = ({ href, pathname, children }: NavLinkProps) => (
  <Link
    href={href}
    className={`${styles.links} ${pathname === href ? styles.active : ""}`}
  >
    {children}
  </Link>
);
