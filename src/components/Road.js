import * as THREE from "three";
import { tilesPerRow, tileSize } from "./Constants"; // Import tile size and tiles per row constants

// Function to create a road model for the scene
export function Road(rowIndex) {
  const road = new THREE.Group(); // Group the road components together
  road.position.y = rowIndex * tileSize; // Position the road based on the row index

  // Create the road foundation (a flat plane representing the road surface)
  const foundation = new THREE.Mesh(
    new THREE.PlaneGeometry(tilesPerRow * tileSize, tileSize), // Road dimensions
    new THREE.MeshLambertMaterial({ color: 0x454a59 }) // Material for the road (grayish color)
  );

  foundation.receiveShadow = true;
  road.add(foundation); // Add the road foundation to the road group

  return road; // Return the complete road object
}
