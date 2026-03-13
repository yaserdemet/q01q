import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
} from "@/components/ui/avatar";

export const rows = [
  {
    id: 1,
    category: "3rd Person Masc (Gha'ib)",
    arabic: ["هُوَ", "هُمَا", "هُمْ"],
    english: ["He", "They (2)", "They (3+)"],
    type: "male",
    suffix: ["هُ", "هُمَا", "هُمْ"],
  },
  {
    id: 2,
    category: "3rd Person Fem (Gha'ibah)",
    arabic: ["هِيَ", "هُمَا", "هُنَّ"],
    english: ["She", "They (2)", "They (3+)"],
    type: "female",
    suffix: ["هَا", "هُمَا", "هُنَّ"],
  },
  {
    id: 3,
    category: "2nd Person Masc (Mukhatab)",
    arabic: ["أَنْتَ", "أَنْتُمَا", "أَنْتُمْ"],
    english: ["You", "You (2)", "You (3+)"],
    type: "male",
    suffix: ["كَ", "كُمَا", "كُمْ"],
  },
  {
    id: 4,
    category: "2nd Person Fem (Mukhatabah)",
    arabic: ["أَنْتِ", "أَنْتُمَا", "أَنْتُنَّ"],
    english: ["You", "You (2)", "You (3+)"],
    type: "female",
    suffix: ["كِ", "كُمَا", "كُنَّ"],
  },
  {
    id: 5,
    category: "1st Person (Mutakallim)",
    arabic: ["أَنَا", "نَحْنُ", "نَحْنُ"],
    english: ["I", "We (2)", "We (3+)"],
    type: "male and female",
    suffix: ["ي نِي ", "نَا", "نَا"],
  },
];
export const header = [
  { id: 1, row: "Plural" },
  { id: 2, row: "Dual" },
  { id: 3, row: "Singular" },
];

export const renderAvatars = (type: string, index: number) => {
  // index 0: Plural(3+), 1: Dual(2), 2: Singular(1)
  const count = index === 0 ? 3 : index === 1 ? 2 : 1;
  const avatars = [];

  for (let i = 0; i < count; i++) {
    let src = "";
    if (type === "male") src = "/avatars/male.png";
    else if (type === "female") src = "/avatars/female.png";
    else src = i % 2 === 0 ? "/avatars/male.png" : "/avatars/female.png";
    avatars.push(src);
  }

  return (
    <AvatarGroup className="justify-center mb-1">
      {avatars.map((src, i) => (
        <Avatar
          key={i}
          size="lg"
          className="border-2 border-background shadow-sm"
        >
          <AvatarImage src={src} alt="avatar" />
          <AvatarFallback className="text-[10px]">
            {type === "male" ? "M" : type === "female" ? "F" : "P"}
          </AvatarFallback>
        </Avatar>
      ))}
    </AvatarGroup>
  );
};
