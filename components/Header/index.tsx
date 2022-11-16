import Link from "next/link";
import styles from "../../styles/Header.module.css";
export default function Header() {
  return (
    <header className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/">
            <div>Home</div>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/blog">
            <div>Blog</div>
          </Link>
        </li>
        <li className={styles.item}>
          <a href="/users">Users</a>
        </li>
      </ul>
    </header>
  );
}
