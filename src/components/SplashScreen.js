"use client";

import { useEffect, useState } from "react";
import "./SplashScreen.css";

export default function SplashScreen({ children }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (hasVisited) {
      setShowSplash(false);
    } else {
      sessionStorage.setItem("hasVisited", "true");
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (showSplash) {
    return (
      <div className="splash-container">
        <div className="spinner" />
      </div>
    );
  }

  return <>{children}</>;
}
