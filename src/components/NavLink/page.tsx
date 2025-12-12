import Link from "next/link";
import styles from "./page.module.css";
import { ReactNode } from "react";
import cn from "classnames";

interface NavLinkProps {
  href: string;
  pathname: string;
  children: ReactNode;
}

export const NavLink = ({ href, pathname, children }: NavLinkProps) => (
  <Link
    href={href}
    className={cn(styles.links, {
      [styles.active]: pathname === href,
    })}
  >
    {children}
  </Link>
);
