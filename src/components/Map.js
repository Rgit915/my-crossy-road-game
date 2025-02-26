import * as THREE from "three";
import { Grass } from "./Grass";
import { Road } from "./Road";
import { Tree } from "./Tree";
import { Car } from "./Car";
import { Truck } from "./Truck";

// Metadata for different map elements
export const metadata = [
  {
    type: "forest", // Defines a forest area
    trees: [
      { tileIndex: -3, height: 50 },
      { tileIndex: 2, height: 30 },
      { tileIndex: 5, height: 50 },
    ],
  },
  {
    type: "car", // Defines a road section with cars
    direction: false, // Car movement direction (e.g., left or right)
    speed: 1, // Car speed
    vehicles: [{ initialTileIndex: 2, color: 0xff0000 }], // List of cars with initial positions and colors
  },
  {
    type: "truck", // Defines a road section with trucks
    direction: true, // Truck movement direction
    speed: 0, // Speed of trucks (0 means stationary for now)
    vehicles: [{ initialTileIndex: -4, color: 0x00ff00 }], // List of trucks with initial positions and colors
  },
];

// Create a group to hold the entire map
export const map = new THREE.Group();

// Function to initialize the map
export function initializeMap() {
  // Generate grass tiles for the base layer
  for (let rowIndex = 0; rowIndex > -5; rowIndex--) {
    const grass = Grass(rowIndex);
    map.add(grass);
  }

  // Add additional map elements based on metadata
  addRows();
}

// Function to dynamically add rows based on metadata
export function addRows() {
  metadata.forEach((rowData, index) => {
    const rowIndex = index + 1; // Determine row index dynamically

    if (rowData.type === "forest") {
      // Create a row of grass for the forest
      const row = Grass(rowIndex);

      // Add trees to the row based on metadata
      rowData.trees.forEach(({ tileIndex, height }) => {
        const tree = Tree(tileIndex, height);
        row.add(tree);
      });

      map.add(row);
    }

    if (rowData.type === "car") {
      // Create a road for cars
      const row = new Road(rowIndex);

      // Add cars to the road based on metadata
      rowData.vehicles.forEach((vehicle) => {
        const car = Car(
          vehicle.initialTileIndex,
          rowData.direction,
          vehicle.color
        );
        row.add(car);
      });

      map.add(row);
    }

    if (rowData.type === "truck") {
      // Create a road for trucks
      const row = Road(rowIndex);

      // Add trucks to the road based on metadata
      rowData.vehicles.forEach((vehicle) => {
        const truck = Truck(
          vehicle.initialTileIndex,
          rowData.direction,
          vehicle.color
        );
        row.add(truck);
      });

      map.add(row);
    }
  });
}
