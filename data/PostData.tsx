import userStories from "./userStories";

const postData = [
  {
    id: 1,
    username: userStories[0].username,
    userImage: userStories[0].imageUrl,
    imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
    caption:
      "This is a beautiful sunset! Need some inspiration for swipe-stopping Instagram caption ideas? Here's a handful of ideas, and then some.",
    likes: 150,
    comments: [
      {
        id: 101,
        username: userStories[1].username,
        text: "Wow! Amazing view 😍",
      },
      {
        id: 102,
        username: userStories[2].username,
        text: "Absolutely stunning!",
      },
    ],
    timestamp: "2024-05-12T08:00:00Z",
  },
  {
    id: 2,
    username: userStories[1].username,
    userImage: userStories[1].imageUrl,
    imageUrl: "https://randomuser.me/api/portraits/men/7.jpg",
    caption: "Exploring new places 🌍 #travel",
    likes: 230,
    comments: [
      {
        id: 201,
        username: userStories[0].username,
        text: "Looks like an amazing trip!",
      },
    ],
    timestamp: "2024-05-11T10:30:00Z",
  },
  {
    id: 3,
    username: userStories[2].username,
    userImage: userStories[2].imageUrl,
    imageUrl: "https://randomuser.me/api/portraits/women/8.jpg",
    caption: "Friday night vibes 🎉",
    likes: 120,
    comments: [],
    timestamp: "2024-05-10T20:45:00Z",
  },
  {
    id: 4,
    username: userStories[3].username,
    userImage: userStories[3].imageUrl,
    imageUrl: "https://randomuser.me/api/portraits/men/15.jpg",
    caption: "Enjoying a cup of coffee ☕",
    likes: 180,
    comments: [
      {
        id: 401,
        username: userStories[4].username,
        text: "Looks delicious!",
      },
    ],
    timestamp: "2024-05-09T12:15:00Z",
  },
  {
    id: 5,
    username: userStories[4].username,
    userImage: userStories[4].imageUrl,
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    caption: "Chilling by the beach 🏖️",
    likes: 210,
    comments: [],
    timestamp: "2024-05-08T15:20:00Z",
  },
];

export default postData;
