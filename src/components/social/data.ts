const male = "/avatars/male.png";
const female = "/avatars/female.png";
export type UserComment = {
    id : number,
    star : number,
    image : typeof male | typeof female,
    name : string,
    username : string,
    content : string,
}
export const USER_COMMENTS : UserComment[] = [
  {
    id: 1,
    star: 5,
    name: "Ali Yılmaz",
    image: male,
    username: "@aliyilmaz",
    content:
      "This app is incredibly helpful for learning Quranic Arabic. Highly recommended!",
  },
  {
    id: 2,
    star: 5,
    name: "Ayşe Kaya",
    image: female,
    username: "@aysekaya",
    content:
      "The verb conjugations are so clear. It really helped me understand the different types.",
  },
  {
    id: 3,
    star: 5,
    image: male,
    name: "Mehmet Demir",
    username: "@mehmetd",
    content:
      "Great visual graphics! Seeing the usage of words in different places makes learning easier.",
  },
  {
    id: 4,
    star: 5,
    image: female,
    name: "Zeynep Çelik",
    username: "@zeynepc",
    content:
      "I love the new interactive map feature! Everything works smoothly.",
  },
  {
    id: 5,
    star: 5,
    image: male,
    name: "Omar K.",
    username: "@omark",
    content: "Very useful tool. Keep up the good work!",
  },
];
