const dataAbout = [
  {
    title: { color: "#E1E4E8", text: "Not started" },
    cards: [
      {
        display: true,
        label: { text: "Take Coco to a vet" },
        badge: { text: "Due 4/11", color: "#FFDCE0" },
      },
    ],
  },
  {
    title: { color: "#F0E7F6", text: "In progress" },
    cards: [
      {
        label: { text: "Texas 😔" },
        checkBoxes: [
          "Accountant contract",
          "Request work payslips",
          "Cancel VAT ID",
        ],
      },
    ],
  },
  {
    title: { color: "#FFDCE0", text: "Blocked" },
    cards: [
      {
        avatars: ["./images/avatar3.jpg"],
        label: { text: "Move" },
        description: "Survive moving places in the pandemic",
        checkBoxes: ["Request moving estimate", "Order moving boxes"],
      },
    ],
  },
  {
    title: { color: "#CBDFD8", text: "Done" },
    cards: [
      {
        label: { text: "Nothing to be done 🙃" },
      },
    ],
  },
];

export default dataAbout;
