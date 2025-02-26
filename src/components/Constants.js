// Defines the minimum and maximum tile indices in the grid
export const minTileIndex = -8;
export const maxTileIndex = 8;

// Calculates the number of tiles per row based on the index range
export const tilesPerRow = maxTileIndex - minTileIndex + 1;

// Sets the size of each tile (in pixels or world units)
export const tileSize = 42;
