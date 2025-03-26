import "@/app/globals.css";
export default function Loading() {
  return (
    <div
      style={{
        padding: "2rem",
        textAlign: "center",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <div style={{ marginBottom: "1rem" }}>
        <div
          style={{
            width: "40px",
            height: "40px",
            border: "4px solid white",
            borderTop: "4px solid transparent",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        />
      </div>
      <p>Loading...</p>
    </div>
  );
}
