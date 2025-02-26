import * as THREE from "three";
import { tileSize } from "./Constants"; // Import tile size constant

// Function to create a tree model with trunk and crown
export function Tree(tileIndex, height) {
  const tree = new THREE.Group(); // Group the tree components together
  tree.position.x = tileIndex * tileSize; // Position the tree based on the tile index

  // Create the trunk of the tree
  const trunk = new THREE.Mesh(
    new THREE.BoxGeometry(15, 15, 20), // Trunk dimensions
    new THREE.MeshLambertMaterial({
      color: 0x4d2926, // Brown color for the trunk
      flatShading: true, // Apply flat shading
    })
  );
  trunk.position.z = 10; // Position the trunk above the ground
  tree.add(trunk); // Add the trunk to the tree group

  // Create the crown (leaves) of the tree
  const crown = new THREE.Mesh(
    new THREE.BoxGeometry(30, 30, height), // Crown dimensions (height can vary)
    new THREE.MeshLambertMaterial({
      color: 0x7aa21d, // Green color for the crown
      flatShading: true, // Apply flat shading
    })
  );
  crown.position.z = height / 2 + 20; // Position the crown above the trunk
  crown.castShadow = true;
  crown.receiveShadow = true;
  tree.add(crown); // Add the crown to the tree group

  return tree; // Return the complete tree object
}
