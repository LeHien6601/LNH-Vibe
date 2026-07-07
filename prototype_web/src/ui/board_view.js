import { createCupView } from "./cup_view.js";

export function renderBoard(state, handlers) {
  const board = document.createElement("section");
  board.className = "board";
  board.setAttribute("aria-label", "Cup board");

  board.addEventListener("click", (event) => {
    if (event.target === board) {
      handlers.onBackgroundTap();
    }
  });

  state.cups.forEach((cup) => {
    const cupView = createCupView(cup, {
      isSelected: state.selectedCupId === cup.cupId
    });

    cupView.addEventListener("click", (event) => {
      event.stopPropagation();
      handlers.onCupTap(cup.cupId);
    });

    board.appendChild(cupView);
  });

  return board;
}
