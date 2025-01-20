import { autocompleteClasses } from "@mui/material";
import React from "react";

const NoiseTexture = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.15]"
    xmlns="http://www.w3.org/2000/svg"
  >
    <filter id="noiseFilter">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.4" // Lowered frequency
        numOctaves="3" // Reduced octaves
        stitchTiles="stitch"
      />
    </filter>
    <rect width="100%" height="100vh" filter="url(#noiseFilter)" />
  </svg>
);

export default NoiseTexture;
