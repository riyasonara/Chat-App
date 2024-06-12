export const sampleChats = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Smith",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Peter Smith",
    _id: "2",
    groupChat: false,
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Smith",
    _id: "1",
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Peter Smith",
    _id: "2",
  },
];

export const sampleNotifications = [
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "John Smith",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "Peter Smith",
    },
    _id: "2",
  },
];

export const SampleMessage = [
  {
    attachments: [
      {
        public_id: "1",
        url: "https://res.cloudinary.com/demo/image/upload/v1631591112/sample.jpg",
      },
    ],
    content: "It's awesome to see you there",
    _id: "121212",
    sender: {
      _id: "user._id",
      name: "Ritik",
    },
    chat: "chatId",
    createdAt: "2024-06-10T10:41:30.630Z",
  },
  {
    attachments: [
      {
        public_id: "2",
        url: "https://res.cloudinary.com/demo/image/upload/v1631591112/sample.jpg",
      },
    ],
    content: "Hii How are you",
    _id: "1212122",
    sender: {
      _id: "1",
      name: "Rishika",
    },
    chat: "chatId2",
    createdAt: "2024-06-10T10:41:30.630Z",
  },
];
