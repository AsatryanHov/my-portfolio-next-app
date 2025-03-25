import "@/app/globals.css";
import styles from "@/app/page.module.css";
export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Asatryan Hovhannes</h1>
        <p className={styles.description}>
          Communications engineer
          <br />
          WEB developer
        </p>
      </div>
    </>
  );
}
