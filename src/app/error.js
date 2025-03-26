"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        padding: "2rem",
        textAlign: "center",
        color: "white",
        // backgroundColor: "#000",
      }}>
      <h1>Something went wrong</h1>
      <p>We're sorry — an unexpected error has occurred.</p>
      <button
        onClick={() => reset()}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          //   backgroundColor: "transparent",
          color: "white",
          border: "1px solid white",
          borderRadius: "4px",
          cursor: "pointer",
        }}>
        Try Again
      </button>
    </div>
  );
}
