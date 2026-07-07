export const levels = [
  {
    levelId: 1,
    name: "First Sip",
    difficulty: "tutorial",
    cupCapacity: 3,
    tutorialText: "Tap a cup, then tap another cup to move the top pearl.",
    cups: [
      { cupId: "c1", pearls: ["brown", "brown"] },
      { cupId: "c2", pearls: ["brown"] },
      { cupId: "c3", pearls: [] }
    ]
  },
  {
    levelId: 2,
    name: "Pink Mix",
    difficulty: "easy",
    cupCapacity: 3,
    tutorialText: "Use an empty cup as temporary space.",
    cups: [
      { cupId: "c1", pearls: ["brown", "pink"] },
      { cupId: "c2", pearls: ["pink", "brown"] },
      { cupId: "c3", pearls: ["pink", "brown"] },
      { cupId: "c4", pearls: [] }
    ]
  },
  {
    levelId: 3,
    name: "Green Tea",
    difficulty: "easy",
    cupCapacity: 3,
    cups: [
      { cupId: "c1", pearls: ["brown", "green", "pink"] },
      { cupId: "c2", pearls: ["pink", "brown", "green"] },
      { cupId: "c3", pearls: ["green", "pink", "brown"] },
      { cupId: "c4", pearls: [] },
      { cupId: "c5", pearls: [] }
    ]
  },
  {
    levelId: 4,
    name: "Blueberry Boba",
    difficulty: "medium",
    cupCapacity: 3,
    cups: [
      { cupId: "c1", pearls: ["blue", "pink", "brown"] },
      { cupId: "c2", pearls: ["brown", "blue", "green"] },
      { cupId: "c3", pearls: ["green", "brown", "pink"] },
      { cupId: "c4", pearls: ["pink", "green", "blue"] },
      { cupId: "c5", pearls: [] },
      { cupId: "c6", pearls: [] }
    ]
  },
  {
    levelId: 5,
    name: "Cafe Rush",
    difficulty: "medium",
    cupCapacity: 3,
    cups: [
      { cupId: "c1", pearls: ["brown", "pink", "green"] },
      { cupId: "c2", pearls: ["blue", "yellow", "brown"] },
      { cupId: "c3", pearls: ["green", "blue", "pink"] },
      { cupId: "c4", pearls: ["yellow", "brown", "blue"] },
      { cupId: "c5", pearls: ["pink", "green", "yellow"] },
      { cupId: "c6", pearls: [] },
      { cupId: "c7", pearls: [] }
    ]
  }
];
