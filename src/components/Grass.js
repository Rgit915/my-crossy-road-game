import * as THREE from "three";
import { tilesPerRow, tileSize } from "./Constants"; // Import tile size and tiles per row constants

// Function to create a grass model for the scene
export function Grass(rowIndex) {
  const grass = new THREE.Group(); // Group the grass components together
  grass.position.y = rowIndex * tileSize; // Position the grass based on the row index

  // Create the foundation for the grass (a flat box shape)
  const foundation = new THREE.Mesh(
    new THREE.BoxGeometry(tilesPerRow * tileSize, tileSize, 3), // Grass dimensions
    new THREE.MeshLambertMaterial({ color: 0xbaf45 }) // Material for the grass (light green)
  );
  foundation.position.z = 1.5; // Position the grass slightly above the ground
  foundation.receiveShadow = true;
  grass.add(foundation); // Add the grass foundation to the grass group

  return grass; // Return the complete grass object
}
