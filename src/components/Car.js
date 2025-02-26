import * as THREE from "three";
import { tileSize } from "./Constants"; // Importing the tile size constant
import { Wheel } from "./Wheel"; // Importing the wheel component

// Function to create a car model with wheels and a cabin
export function Car(initialTileIndex, direction, color) {
  const car = new THREE.Group(); // Grouping the car components together
  car.position.x = initialTileIndex * tileSize; // Position the car based on tile index

  // Set car rotation based on direction (flip if needed)
  if (!direction) car.rotation.z = Math.PI;

  // Create the main body of the car
  const main = new THREE.Mesh(
    new THREE.BoxGeometry(60, 30, 15), // Car body dimensions
    new THREE.MeshLambertMaterial({ color, flatShading: true }) // Material for the body
  );
  main.position.z = 12; // Position the body slightly above the ground
  main.castShadow = true;
  main.receiveShadow = true; // Enable shadows for the car body
  car.add(main);

  // Create the cabin part of the car (the area where passengers sit)
  const cabin = new THREE.Mesh(
    new THREE.BoxGeometry(33, 24, 12), // Cabin dimensions
    new THREE.MeshLambertMaterial({
      color: "white", // White color for the cabin
      flatShading: true, // Apply flat shading
    })
  );
  cabin.position.x = -6; // Position the cabin slightly inside the car body
  cabin.position.z = 25.5; // Raise the cabin above the car's base
  cabin.castShadow = true;
  cabin.receiveShadow = true; // Enable shadows for the cabin area
  car.add(cabin);

  // Add front and back wheels to the car
  const frontWheel = Wheel(10); // Front wheel positioned relative to the car
  car.add(frontWheel);

  const backWheel = Wheel(-18); // Back wheel positioned relative to the car
  car.add(backWheel);

  return car; // Return the complete car object
}
