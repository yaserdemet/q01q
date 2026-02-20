import { conjugateVerb, type VerbConjugation } from "./utils";

export type { VerbConjugation };

export const verbs: VerbConjugation[] = [
  conjugateVerb("ذَهَبَ", "يَذْهَبُ", "went"),
  conjugateVerb("أَكَلَ", "يَأْكُلُ", "ate"),
  conjugateVerb("شَرِبَ", "يَشْرَبُ", "drank"),
  conjugateVerb("كَتَبَ", "يَكْتُبُ", "wrote"),
  conjugateVerb("دَرَسَ", "يَدْرُسُ", "studied"),
  conjugateVerb("عَمِلَ", "يَعْمَلُ", "worked"),
];

export const tableRows = [
  {
    category: "3rd Person Masc",
    type: "male",
    cells: [
      { pronoun: "هُو", english: "He", key: "maleHe" },
      { pronoun: "هُما", english: "They (2M)", key: "maleDual" },
      { pronoun: "هُم", english: "They (3+M)", key: "malePlural" },
    ],
  },
  {
    category: "3rd Person Fem",
    type: "female",
    cells: [
      { pronoun: "هِي", english: "She", key: "femaleShe" },
      { pronoun: "هُما", english: "They (2F)", key: "femaleDual" },
      { pronoun: "هُنّ", english: "They (3+F)", key: "femalePlural" },
    ],
  },
  {
    category: "2nd Person Masc",
    type: "male",
    cells: [
      { pronoun: "أَنْتَ", english: "You (M)", key: "maleYou" },
      { pronoun: "أَنْتُما", english: "You Two (M)", key: "yourDualMale" },
      { pronoun: "أَنْتُم", english: "You (3+M)", key: "youMalePlural" },
    ],
  },
  {
    category: "2nd Person Fem",
    type: "female",
    cells: [
      { pronoun: "أَنْتِ", english: "You (F)", key: "femaleYou" },
      { pronoun: "أَنْتُما", english: "You Two (F)", key: "yourDualMale" },
      { pronoun: "أَنْتُنّ", english: "You (3+F)", key: "youFemalePlural" },
    ],
  },
  {
    category: "1st Person",
    type: "both",
    cells: [
      { pronoun: "أَنَا", english: "I", key: "maleI" },
      { pronoun: "نَحْنُ", english: "We (2)", key: "we" },
      { pronoun: "نَحْنُ", english: "We (3+)", key: "we" },
    ],
  },
];
