import { pearls } from "../data/pearls.js";

export function createCupView(cup, options = {}) {
  const cupButton = document.createElement("button");
  cupButton.className = "cup";
  cupButton.type = "button";
  cupButton.dataset.cupId = cup.cupId;
  cupButton.setAttribute("aria-label", buildCupLabel(cup));

  if (options.isSelected) {
    cupButton.classList.add("is-selected");
  }

  if (cup.feedback) {
    cupButton.classList.add(`is-${cup.feedback}`);
  }

  const cupBody = document.createElement("span");
  cupBody.className = "cup-body";

  const pearlStack = document.createElement("span");
  pearlStack.className = "pearl-stack";

  cup.pearls.forEach((pearlType, index) => {
    const pearl = pearls[pearlType];
    const pearlElement = document.createElement("span");
    pearlElement.className = "pearl";
    pearlElement.title = pearl.label;
    pearlElement.style.setProperty("--pearl-color", pearl.color);
    pearlElement.style.setProperty("--pearl-shine", pearl.shine);

    if (options.isSelected && index === cup.pearls.length - 1) {
      pearlElement.classList.add("is-top-selected");
    }

    pearlStack.appendChild(pearlElement);
  });

  cupBody.appendChild(pearlStack);
  cupButton.appendChild(cupBody);

  const cupLabel = document.createElement("span");
  cupLabel.className = "cup-label";
  cupLabel.textContent = cup.cupId.toUpperCase();
  cupButton.appendChild(cupLabel);

  return cupButton;
}

function buildCupLabel(cup) {
  if (cup.pearls.length === 0) {
    return `${cup.cupId}, empty cup`;
  }

  return `${cup.cupId}, ${cup.pearls.length} pearls, top pearl ${cup.pearls[cup.pearls.length - 1]}`;
}
