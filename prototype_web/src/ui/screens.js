import { getLevelCount, hasNextLevel } from "../game/level_loader.js";
import { renderBoard } from "./board_view.js";
import { renderWinPopup } from "./popup.js";

export function renderMainMenu(root, handlers) {
  root.replaceChildren();
  root.className = "app-shell menu-screen";

  const menu = document.createElement("section");
  menu.className = "menu-panel";

  const title = document.createElement("h1");
  title.textContent = "Bubble Tea Sort";

  const subtitle = document.createElement("p");
  subtitle.textContent = "Sort colorful pearls, clear matching cups, and finish five tiny puzzle levels.";

  const playButton = document.createElement("button");
  playButton.className = "primary-button";
  playButton.type = "button";
  playButton.textContent = "Play";
  playButton.addEventListener("click", handlers.onPlay);

  menu.append(title, subtitle, playButton);
  root.appendChild(menu);
}

export function renderGameplay(root, state, handlers) {
  root.replaceChildren();
  root.className = "app-shell gameplay-screen";

  const header = document.createElement("header");
  header.className = "game-header";

  const levelText = document.createElement("div");
  levelText.className = "level-text";

  const levelLabel = document.createElement("p");
  levelLabel.className = "eyebrow";
  levelLabel.textContent = `Level ${state.levelId} of ${getLevelCount()} - ${state.difficulty}`;

  const levelName = document.createElement("h1");
  levelName.textContent = state.levelName;

  levelText.append(levelLabel, levelName);

  const stats = document.createElement("div");
  stats.className = "stats";
  stats.innerHTML = `<span>Moves</span><strong>${state.moveCount}</strong>`;

  const restartButton = document.createElement("button");
  restartButton.className = "secondary-button compact-button";
  restartButton.type = "button";
  restartButton.textContent = "Restart";
  restartButton.addEventListener("click", handlers.onRestart);

  header.append(levelText, stats, restartButton);

  const messageArea = document.createElement("section");
  messageArea.className = "message-area";

  if (state.tutorialText) {
    const tutorial = document.createElement("p");
    tutorial.className = "tutorial-text";
    tutorial.textContent = state.tutorialText;
    messageArea.appendChild(tutorial);
  }

  const status = document.createElement("p");
  status.className = "status-text";
  status.textContent = state.lastMessage;
  messageArea.appendChild(status);

  const board = renderBoard(state, handlers);

  root.append(header, messageArea, board);

  if (state.status === "won") {
    root.appendChild(
      renderWinPopup(state, {
        hasNextLevel: hasNextLevel(state.levelIndex),
        onNextLevel: handlers.onNextLevel,
        onReplay: handlers.onReplay,
        onRestart: handlers.onRestart
      })
    );
  }
}
