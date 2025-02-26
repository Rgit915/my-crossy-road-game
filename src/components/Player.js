import * as THREE from "three";

// Function to create the player model
export function Player() {
  // Create a box geometry representing the player's body
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(15, 15, 20), // Width, height, depth
    new THREE.MeshLambertMaterial({
      color: "white",
      flatShading: true, // Gives a low-poly look
    })
  );

  // Set initial position of the player
  body.position.z = 10;
  body.castShadow = true;
  body.receiveShadow = true;

  return body;
}

// Create and export an instance of the player
export const player = Player();
