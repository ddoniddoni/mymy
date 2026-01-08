"use client";

import { useEffect } from "react";
import { startFalling } from "@sangdonpark/falling-effects";

export default function FallingEffect() {
  useEffect(() => {
    const cleanup = startFalling({
      type: "snow",
      mode: "rate",
      rate: 30,
      maxParticles: 15,
      rampUpSeconds: 1.5,
      duration: 10,
      direction: "diagonal",
      diagonalDirection: "left-to-right",
      diagonalStrength: 200,
      sway: true,
    });

    return () => cleanup();
  }, []);

  return null;
}
