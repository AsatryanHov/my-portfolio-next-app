"use client"; // Required for client-side interactivity

import Link from "next/link";
import { usePathname } from "next/navigation"; // Updated for Next.js 15
import styles from "./NavBar.module.css";

const NavBar = () => {
  const pathname = usePathname(); // New way to get the current path

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={pathname === "/" ? styles.active : ""}>
          <Link href="/">Main</Link>
        </li>
        <li className={pathname === "/education" ? styles.active : ""}>
          <Link href="/education">Education</Link>
        </li>
        <li className={pathname === "/portfolio" ? styles.active : ""}>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li className={pathname === "/contacts" ? styles.active : ""}>
          <Link href="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
