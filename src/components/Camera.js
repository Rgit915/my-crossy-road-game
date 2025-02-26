import * as THREE from "three";

export function Camera() {
  // Base size for the camera view
  const size = 300;

  // Calculate aspect ratio based on window dimensions
  const viewRatio = window.innerWidth / window.innerHeight;

  // Adjust width and height based on aspect ratio
  const width = viewRatio < 1 ? size : size * viewRatio;
  const height = viewRatio < 1 ? size / viewRatio : size;

  // Create an orthographic camera (ideal for 2D-like views)
  const camera = new THREE.OrthographicCamera(
    width / -2, // left boundary
    width / 2,  // right boundary
    height / 2, // top boundary
    height / -2, // bottom boundary
    100, // near clipping plane
    900 // far clipping plane
  );

  // Set the camera's "up" direction to Z-axis
  camera.up.set(0, 0, 1);

  // Position the camera at an angle for a better view
  camera.position.set(300, -300, 300);

  // Make the camera look at the origin (center of the scene)
  camera.lookAt(0, 0, 0);

  return camera;
}
