import { levels } from "../data/levels.js";
import { createGameState } from "./state.js";

export function getLevelCount() {
  return levels.length;
}

export function getLevelByIndex(levelIndex) {
  return levels[levelIndex] || null;
}

export function loadLevel(levelIndex) {
  const level = getLevelByIndex(levelIndex);

  if (!level) {
    throw new Error(`Level index ${levelIndex} does not exist.`);
  }

  return createGameState(level, levelIndex);
}

export function hasNextLevel(levelIndex) {
  return levelIndex < levels.length - 1;
}
