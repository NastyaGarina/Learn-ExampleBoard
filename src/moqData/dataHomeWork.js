const testData = [
  {
    title: { color: "#E1E4E8", text: "Last Week" },
    cardsFilter: [
      {
        label: { text: null },
        display: true,
        description: "Review #3904324 23.",
        badge: { text: "test", color: "green" },
      },
      {
        label: { text: "safasdfdf" },
        display: true,
        description: "Review #390adas.",
        badge: { text: "data", color: "green" },
      },
      {
        label: { text: undefined },
        display: false,
        description: "Review #390 - ds.",
        badge: { text: "data 3", color: "blue" },
      },
      {
        label: { text: null },
        display: true,
        description: "Review",
        badge: { text: "test 4", color: "blue" },
      },
      {
        label: { text: "siniyi" },
        display: true,
        description: "Review",
        badge: { text: "test 4", color: "blue" },
      },
      {
        label: { text: "safasdfdf" },
        display: false,
        description: null,
        badge: { text: "test 4", color: "purple" },
      },
      {
        label: { text: "safasdfdf" },
        display: true,
        description: "Review",
      },
      {
        label: { text: "safasdfdf" },
        display: true,
        description: "Review",
        badge: { text: "test 4", color: "red" },
      },
      {
        label: { text: "safasdfdf" },
        display: true,
        description: "Review",
        badge: { text: "test 4" },
      },
    ],

    cards: [
      {
        label: { text: "Team Retro" },
        checkBoxes: ["Schedule time", "Set up a Figma board"],
      },
    ],
  },

  {
    title: { color: "#F0E7F6", text: "This week" },
    cards: [
      {
        avatars: ["./images/avatar0.jpg", "./images/avatar1.jpg"],
        label: { text: "Usability test" },
        description: "Research questions with Carina.",
        badge: { text: "Research", color: "#CBDFD8" },
      },
    ],
  },
  {
    title: { color: "#FFDCE0", text: "Next week" },
    cards: [
      {
        avatars: ["./images/avatar2.jpg"],
        label: { text: "Culture workshop" },
        description: "Let's build a great team.",
        checkBoxes: [
          "Schedule time",
          "Set up a Figma board",
          "Review exercises with the team",
        ],
        badge: { text: "Due 24/11", color: "#FFDCE0" },
      },
    ],
  },
];

export default testData;
