const inline_keyboard = [
  [
    {
      text: "Де розташовене котеджне містечко?",
      callback_data: "location",
    },
  ],
  [
    {
      text: "Обрати будинок",
      callback_data: "get",
    },
  ],
];

const keyboard_location = [
  [
    {
      text: "Обрати будинок",
      callback_data: "get",
    },
  ],
];

const keyboard_get = [
  [
    {
      text: "170 - 220 кв.м.",
      callback_data: "small",
    },
  ],
  [
    {
      text: "220 - 320 кв.м.",
      callback_data: "medium",
    },
  ],
  [
    {
      text: "320 - 500 кв.м.",
      callback_data: "big",
    },
  ],
];

const keyboard_villas = [
  [
    {
      text: "Обрати",
      callback_data: "villas",
    },
  ],
];

const keyboard_contacts = [
  [
    {
      text: `Залишити контактну інформацію`,
      request_contact: true,
    },
  ],
];

module.exports = {
  inline_keyboard,
  keyboard_location,
  keyboard_get,
  keyboard_villas,
  keyboard_contacts,
};
