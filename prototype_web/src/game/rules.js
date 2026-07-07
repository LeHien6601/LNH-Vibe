import { clearCupFeedback, findCup } from "./state.js";

export function getTopPearl(cup) {
  return cup.pearls[cup.pearls.length - 1] || null;
}

export function canSelectSource(state, cupId) {
  const cup = findCup(state, cupId);

  if (!cup) {
    return { ok: false, reason: "Cup does not exist." };
  }

  if (cup.pearls.length === 0) {
    return { ok: false, reason: "That cup is empty." };
  }

  return { ok: true, reason: "" };
}

export function canMovePearl(state, sourceCupId, targetCupId) {
  const sourceCup = findCup(state, sourceCupId);
  const targetCup = findCup(state, targetCupId);

  if (!sourceCup || !targetCup) {
    return { ok: false, reason: "Cup does not exist." };
  }

  if (sourceCupId === targetCupId) {
    return { ok: false, reason: "Selection cancelled.", cancels: true };
  }

  if (sourceCup.pearls.length === 0) {
    return { ok: false, reason: "Source cup is empty." };
  }

  if (targetCup.pearls.length >= state.cupCapacity) {
    return { ok: false, reason: "That cup is full." };
  }

  return { ok: true, reason: "" };
}

export function applyCupTap(state, cupId) {
  clearCupFeedback(state);

  if (state.status !== "playing") {
    return { state, event: "ignored" };
  }

  if (!state.selectedCupId) {
    return selectCup(state, cupId);
  }

  const moveResult = canMovePearl(state, state.selectedCupId, cupId);

  if (moveResult.cancels) {
    state.selectedCupId = null;
    state.lastMessage = "Selection cancelled.";
    return { state, event: "cancelled" };
  }

  if (!moveResult.ok) {
    const targetCup = findCup(state, cupId);
    if (targetCup) {
      targetCup.feedback = "invalid";
    }
    state.lastMessage = moveResult.reason;
    return { state, event: "invalid", reason: moveResult.reason };
  }

  return movePearl(state, state.selectedCupId, cupId);
}

export function selectCup(state, cupId) {
  const sourceResult = canSelectSource(state, cupId);
  const cup = findCup(state, cupId);

  if (!sourceResult.ok) {
    if (cup) {
      cup.feedback = "invalid";
    }
    state.lastMessage = sourceResult.reason;
    return { state, event: "invalid", reason: sourceResult.reason };
  }

  state.selectedCupId = cupId;
  state.lastMessage = `Selected ${getTopPearl(cup)} pearl.`;
  return { state, event: "selected" };
}

export function cancelSelection(state) {
  clearCupFeedback(state);
  state.selectedCupId = null;
  state.lastMessage = "Selection cancelled.";
  return { state, event: "cancelled" };
}

export function movePearl(state, sourceCupId, targetCupId) {
  const sourceCup = findCup(state, sourceCupId);
  const targetCup = findCup(state, targetCupId);
  const pearl = sourceCup.pearls.pop();

  targetCup.pearls.push(pearl);
  targetCup.feedback = "moved";
  state.moveCount += 1;
  state.selectedCupId = null;
  state.lastMessage = `Moved ${pearl} pearl.`;

  const clearResult = clearMatchingCup(targetCup, state.cupCapacity);
  if (clearResult.cleared) {
    targetCup.feedback = "cleared";
    state.lastMessage = `Cleared ${clearResult.type} pearls.`;
  }

  if (isLevelWon(state)) {
    state.status = "won";
    state.lastMessage = "Level complete.";
  }

  return {
    state,
    event: clearResult.cleared ? "cleared" : "moved",
    cleared: clearResult
  };
}

export function clearMatchingCup(cup, cupCapacity) {
  if (cup.pearls.length !== cupCapacity) {
    return { cleared: false, type: null };
  }

  const [firstPearl] = cup.pearls;
  const allMatch = cup.pearls.every((pearl) => pearl === firstPearl);

  if (!allMatch) {
    return { cleared: false, type: null };
  }

  cup.pearls = [];
  return { cleared: true, type: firstPearl };
}

export function isLevelWon(state) {
  return state.cups.every((cup) => cup.pearls.length === 0);
}
