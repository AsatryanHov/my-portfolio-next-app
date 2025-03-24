import VantaBackground from "@/components/VantaBackground"; // Adjust the path if necessary

import "@/app/globals.css";

export default function Home() {
  return (
    <>
      {/* <VantaBackground /> */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "#fff",
          padding: "20px",
        }}>
        <h1>Welcome to My Next.js App</h1>
        <p>This app has a cool Vanta Waves background!</p>
      </div>
    </>
  );
}
