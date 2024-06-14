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

export const dashboardData = {
  users: [
    {
      name: "John Smith",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "1",
      friends: 20,
      username: "john_smith_",
      groups: 5,
    },
    {
      name: "Peter Smith",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "2",
      friends: 20,
      username: "petersmith123",
      groups: 3,
    },
  ],
  chats: [
    {
      name: "John Smith",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "John Smith",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
    {
      name: "Peter Doe",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      groupChat: true,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "Peter Doe",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
    {
      name: "Carry Minati",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "3",
      groupChat: true,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "3", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "Carry Minati",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
  ],
  messages: [
    {
      attachments: [{
        public_id: "1",
        url: "https://res.cloudinary.com/demo/image/upload/v1631591112/sample.jpg",
      }],
      content: "Welcome",
      _id: "121211",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Ritik",
      },
      chat: "chatId1",
      groupChat: false,
      createdAt: "2024-06-10T10:41:30.630Z",
    },
    {
      attachments: [{
        public_id: "2",
        url: "https://res.cloudinary.com/demo/image/upload/v1631591112/sample.jpg",
      }],
      content: "It's awesome to see you there",
      _id: "121212",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Roshni",
      },
      chat: "chatId2",
      groupChat: false,
      createdAt: "2024-06-10T10:41:30.630Z",
    },
  ],
};
