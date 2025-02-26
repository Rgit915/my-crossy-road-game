import * as THREE from "three";

// Function to create a wheel model for vehicles
export function Wheel(x) {
  // Create the wheel geometry and material
  const wheel = new THREE.Mesh(
    new THREE.BoxGeometry(12, 33, 12), // Dimensions of the wheel
    new THREE.MeshLambertMaterial({
      color: 0x333333, // Dark gray color for the wheel
      flatShading: true // Apply flat shading
    })
  );

  wheel.position.x = x; // Position the wheel along the x-axis
  wheel.rotation.z = 6; // Slightly rotate the wheel on the z-axis for effect

  return wheel; // Return the wheel object
}
