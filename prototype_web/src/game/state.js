export function createGameState(level, levelIndex) {
  return {
    levelIndex,
    levelId: level.levelId,
    levelName: level.name,
    difficulty: level.difficulty,
    tutorialText: level.tutorialText || "",
    cupCapacity: level.cupCapacity,
    cups: level.cups.map((cup) => ({
      cupId: cup.cupId,
      pearls: [...cup.pearls],
      feedback: null
    })),
    selectedCupId: null,
    moveCount: 0,
    status: "playing",
    lastMessage: "Select a cup."
  };
}

export function cloneState(state) {
  return {
    ...state,
    cups: state.cups.map((cup) => ({
      ...cup,
      pearls: [...cup.pearls]
    }))
  };
}

export function findCup(state, cupId) {
  return state.cups.find((cup) => cup.cupId === cupId) || null;
}

export function clearCupFeedback(state) {
  state.cups.forEach((cup) => {
    cup.feedback = null;
  });
}
