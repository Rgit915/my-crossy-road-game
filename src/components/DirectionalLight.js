import * as THREE from "three";

// Function to create a directional light source with shadows
export function DirectionalLight() {
  const directionalLight = new THREE.DirectionalLight(); // Create a directional light

  // Position the light source along the negative x, negative y, and positive z-axis
  directionalLight.position.set(-100, -100, 200);

  directionalLight.up.set(0, 0, 1); // Set the up direction of the light (default is (0, 1, 0))
  directionalLight.castShadow = true; // Enable shadows for the light

  // Set the size of the shadow map
  directionalLight.shadow.mapSize.width = 2048;
  directionalLight.shadow.mapSize.height = 2048;

  // Configure the shadow camera for the light
  directionalLight.shadow.camera.up.set(0, 0, 1);
  directionalLight.shadow.camera.left = -400;
  directionalLight.shadow.camera.right = 400;
  directionalLight.shadow.camera.top = 400;
  directionalLight.shadow.camera.bottom = -400;
  directionalLight.shadow.camera.near = 50;
  directionalLight.shadow.camera.far = 400;

  return directionalLight; // Return the configured directional light
}
