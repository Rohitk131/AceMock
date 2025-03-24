"use client"; // Ensures it's a client component

import React, { useEffect, useRef } from "react";
import { NeatGradient, NeatConfig } from "@firecms/neat";

const neatConfig: NeatConfig = {
    colors: [
        {
            color: '#393939',
            enabled: true,
        },
        {
            color: '#000000',
            enabled: true,
        },
        {
            color: '#54A287',
            enabled: true,
        },
        {
            color: '#598D9A',
            enabled: true,
        },
        {
            color: '#000000',
            enabled: false,
        },
    ],
    speed: 3,
    horizontalPressure: 5,
    verticalPressure: 7,
    waveFrequencyX: 2,
    waveFrequencyY: 2,
    waveAmplitude: 8,
    shadows: 6,
    highlights: 8,
    colorBrightness: 1,
    colorSaturation: 7,
    wireframe: false,
    colorBlending: 10,
    backgroundColor: '#004E64',
    backgroundAlpha: 1,
    grainScale: 3,
    grainSparsity: 0,
    grainIntensity: 0.3,
    grainSpeed: 1,
    resolution: 1,
};

const NeatBackground = () => {
  const gradientRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!gradientRef.current) return;

    // Initialize NeatGradient
    const neat = new NeatGradient({
      ref: gradientRef.current,
      ...neatConfig,
    });

    // Cleanup on unmount
    return () => neat.destroy();
  }, []);

  return (
    <canvas
      ref={gradientRef}
      className="absolute inset-0 -z-10 w-full h-full opacity-30"
    />
  );
};

export default NeatBackground;
