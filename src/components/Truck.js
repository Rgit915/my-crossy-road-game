import * as THREE from "three";
import { tileSize } from "./Constants"; // Import tile size constant
import { Wheel } from "./Wheel"; // Import the Wheel component for truck wheels

// Function to create a truck model with cargo, cabin, and wheels
export function Truck(initialTileIndex, direction, color) {
  const truck = new THREE.Group(); // Group the truck components together
  truck.position.x = initialTileIndex * tileSize; // Position the truck based on the tile index
  if (!direction) truck.rotation.z = Math.PI; // Flip direction if needed

  // Create the cargo part of the truck
  const cargo = new THREE.Mesh(
    new THREE.BoxGeometry(70, 35, 35), // Cargo dimensions
    new THREE.MeshLambertMaterial({
      color: 0xb4c6fc, // Light blue color for the cargo
      flatShading: true // Apply flat shading
    })
  );
  cargo.position.x = -15; // Position the cargo part
  cargo.position.z = 15; // Position it above the ground
  truck.add(cargo); // Add the cargo to the truck group

  // Create the cabin (driver's area) of the truck
  const cabin = new THREE.Mesh(
    new THREE.BoxGeometry(30, 30, 30), // Cabin dimensions
    new THREE.MeshLambertMaterial({ color, flatShading: true }) // Color passed as parameter
  );
  cabin.position.x = 35; // Position the cabin relative to the cargo
  cabin.position.z = 20; // Position it above the ground
  truck.add(cabin); // Add the cabin to the truck group

  // Create and position the truck wheels using the Wheel component
  const frontWheel = Wheel(37); // Front wheel at a specific position
  truck.add(frontWheel);

  const middleWheel = Wheel(5); // Middle wheel
  truck.add(middleWheel);

  const backWheel = Wheel(-35); // Back wheel
  truck.add(backWheel);

  return truck; // Return the complete truck object
}
