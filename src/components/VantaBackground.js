"use client";

import { useEffect, useRef } from "react";
import * as THREE from "@/lib/three.min.js"; // Import Three.js
import WAVES from "@/lib/vanta.waves.min.js"; // Import Vanta Waves

const VantaBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    // if (!vantaRef.current) return; // hidratationi problema tali

    const effect = WAVES({
      el: vantaRef.current,
      //   color: 0x2852,
      //   waveHeight: 20,
      //   shininess: 50,
      //   waveSpeed: 1.5,
      //   zoom: 0.75,
      color: 0xc072d,
      waveHeight: 30,
      shininess: 15,
      waveSpeed: 1,
      zoom: 1,
      THREE: THREE,
    });

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
};

export default VantaBackground;
