import * as THREE from "three";
import { Renderer } from "./components/Renderer";
import { Camera } from "./components/Camera";
import { player } from "./components/Player";
import { map, initializeMap } from "./components/Map";
import "./style.css";

//Create a new Three.js scene
const scene = new THREE.Scene();

// Add game objects to the scene
scene.add(player);
scene.add(map);

// Set up ambient lighting for overall illumination
const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);

//Add directional light for shadows and depth
const directionalLight = new THREE.DirectionalLight();
directionalLight.position.set(-100, -100, 200);
scene.add(directionalLight);

// Initialize camera and add it to the scene
const camera = Camera();
scene.add(camera);

// Initialize game elements (e.g., map setup)
initializeGame();

function initializeGame() {
  initializeMap();
}

// Set up renderer and start rendering the scene
const renderer = Renderer();
renderer.render(scene, camera);