import * as THREE from "three";

export function Renderer() {
  // Select the canvas element with the class "game"
  const canvas = document.querySelector("canvas.game");
  if (!canvas) throw new Error("Canvas not found");

  // Create a WebGL renderer with transparency and anti-aliasing enabled
  const renderer = new THREE.WebGLRenderer({
    alpha: true, // Allows for transparent backgrounds
    antialias: true, // Smooths edges for better visuals
    canvas: canvas, // Use the selected canvas
  });

  // Set pixel ratio for better rendering on high-DPI screens
  renderer.setPixelRatio(window.devicePixelRatio);

  // Set renderer size to match the window dimensions
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Enable shadow mapping for realistic lighting effects
  renderer.shadowMap.enabled = true;

  return renderer;
}