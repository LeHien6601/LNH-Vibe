import { loadLevel } from "./game/level_loader.js";
import { applyCupTap, cancelSelection } from "./game/rules.js";
import { renderGameplay, renderMainMenu } from "./ui/screens.js";

const root = document.querySelector("#app");

const app = {
  state: null,

  showMenu() {
    renderMainMenu(root, {
      onPlay: () => this.startLevel(0)
    });
  },

  startLevel(levelIndex) {
    this.state = loadLevel(levelIndex);
    this.renderGame();
  },

  restartLevel() {
    this.startLevel(this.state.levelIndex);
  },

  nextLevel() {
    this.startLevel(this.state.levelIndex + 1);
  },

  replay() {
    this.startLevel(0);
  },

  tapCup(cupId) {
    applyCupTap(this.state, cupId);
    this.renderGame();
  },

  tapBackground() {
    if (!this.state?.selectedCupId || this.state.status !== "playing") {
      return;
    }

    cancelSelection(this.state);
    this.renderGame();
  },

  renderGame() {
    renderGameplay(root, this.state, {
      onCupTap: (cupId) => this.tapCup(cupId),
      onBackgroundTap: () => this.tapBackground(),
      onRestart: () => this.restartLevel(),
      onNextLevel: () => this.nextLevel(),
      onReplay: () => this.replay()
    });
  }
};

app.showMenu();
