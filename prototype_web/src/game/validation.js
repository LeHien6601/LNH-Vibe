import { levels } from "../data/levels.js";
import { pearls } from "../data/pearls.js";

export function validateLevels(levelList = levels, pearlConfig = pearls) {
  const errors = [];
  const levelIds = new Set();

  levelList.forEach((level, index) => {
    const label = `Level ${level?.levelId ?? index + 1}`;

    if (!Number.isInteger(level.levelId)) {
      errors.push(`${label}: missing numeric levelId.`);
    }

    if (levelIds.has(level.levelId)) {
      errors.push(`${label}: duplicate levelId.`);
    }
    levelIds.add(level.levelId);

    if (!level.name) {
      errors.push(`${label}: missing name.`);
    }

    if (!level.difficulty) {
      errors.push(`${label}: missing difficulty.`);
    }

    if (level.cupCapacity !== 3) {
      errors.push(`${label}: prototype cupCapacity must be 3.`);
    }

    if (!Array.isArray(level.cups) || level.cups.length === 0) {
      errors.push(`${label}: cups must be a non-empty array.`);
      return;
    }

    const cupIds = new Set();
    const pearlCounts = new Map();

    level.cups.forEach((cup) => {
      if (!cup.cupId) {
        errors.push(`${label}: cup missing cupId.`);
      }

      if (cupIds.has(cup.cupId)) {
        errors.push(`${label}: duplicate cupId ${cup.cupId}.`);
      }
      cupIds.add(cup.cupId);

      if (!Array.isArray(cup.pearls)) {
        errors.push(`${label} ${cup.cupId}: pearls must be an array.`);
        return;
      }

      if (cup.pearls.length > level.cupCapacity) {
        errors.push(`${label} ${cup.cupId}: starts over capacity.`);
      }

      cup.pearls.forEach((pearlType) => {
        if (!pearlConfig[pearlType]) {
          errors.push(`${label} ${cup.cupId}: unknown pearl type ${pearlType}.`);
        }
        pearlCounts.set(pearlType, (pearlCounts.get(pearlType) || 0) + 1);
      });
    });

    pearlCounts.forEach((count, pearlType) => {
      if (count % 3 !== 0) {
        errors.push(`${label}: pearl type ${pearlType} count ${count} is not divisible by 3.`);
      }
    });
  });

  return errors;
}

const isDirectRun = process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/"));

if (isDirectRun) {
  const errors = validateLevels();

  if (errors.length > 0) {
    console.error("Level validation failed:");
    errors.forEach((error) => console.error(`- ${error}`));
    process.exit(1);
  }

  console.log(`Validated ${levels.length} levels.`);
}
