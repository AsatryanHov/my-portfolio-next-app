import VantaBackground from "@/components/VantaBackground"; // Adjust the path if necessary

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
      {/* <VantaBackground /> */}
      {/* <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "#fff",
          padding: "20px",
        }}>
        <h1>Welcome to My Next.js App</h1>
        <p>This app has a cool Vanta Waves background!</p>
      </div> */}
    </>
  );
}
