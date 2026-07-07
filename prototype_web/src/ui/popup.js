export function renderWinPopup(state, options) {
  const overlay = document.createElement("div");
  overlay.className = "popup-overlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");

  const popup = document.createElement("section");
  popup.className = "popup";

  const title = document.createElement("h2");
  title.textContent = options.hasNextLevel ? "Cup cleared!" : "Prototype complete";

  const summary = document.createElement("p");
  summary.textContent = options.hasNextLevel
    ? `Level ${state.levelId} finished in ${state.moveCount} moves.`
    : `You finished all 5 prototype levels in ${state.moveCount} moves on the final level.`;

  const actions = document.createElement("div");
  actions.className = "popup-actions";

  const primaryButton = document.createElement("button");
  primaryButton.className = "primary-button";
  primaryButton.type = "button";
  primaryButton.textContent = options.hasNextLevel ? "Next Level" : "Play Again";
  primaryButton.addEventListener("click", options.hasNextLevel ? options.onNextLevel : options.onReplay);

  const restartButton = document.createElement("button");
  restartButton.className = "secondary-button";
  restartButton.type = "button";
  restartButton.textContent = "Restart";
  restartButton.addEventListener("click", options.onRestart);

  actions.append(primaryButton, restartButton);
  popup.append(title, summary, actions);
  overlay.appendChild(popup);

  return overlay;
}
