import Link from "next/link";
import styles from "@/styles/Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/list">Liste</Link>
        </li>
      </ul>
    </nav>
  );
}
