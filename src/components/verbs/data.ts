export interface VerbConjugation {
  infinitive: string;
  meaning: string;
  present: {
    maleHe: string;
    femaleShe: string;
    maleYou: string;
    femaleYou: string;
    maleDual: string;
    femaleDual: string;
    yourDualMale: string;
    malePlural: string;
    femalePlural: string;
    maleI: string;
    femaleI: string;
    we: string;
  };
  past: {
    maleHe: string;
    femaleShe: string;
    maleYou: string;
    femaleYou: string;
    maleDual: string;
    femaleDual: string;
    yourDualMale: string;
    malePlural: string;
    femalePlural: string;
    maleI: string;
    femaleI: string;
    we: string;
  };
}

export const verbs: VerbConjugation[] = [
  {
    infinitive: "ذَهَبَ",
    meaning: "went",
    present: {
      maleHe: "يَذْهَبُ",
      femaleShe: "تَذْهَبُ",
      maleYou: "تَذْهَبُ",
      femaleYou: "تَذْهَبِينَ",
      maleDual: "يَذْهَبَانِ",
      femaleDual: "تَذْهَبَانِ",
      yourDualMale: "تَذْهَبَانِ",
      malePlural: "يَذْهَبُونَ",
      femalePlural: "يَذْهَبْنَ",
      maleI: "أَذْهَبُ",
      femaleI: "أَذْهَبُ",
      we: "نَذْهَبُ",
    },
    past: {
      maleHe: "ذَهَبَ",
      femaleShe: "ذَهَبَتْ",
      maleYou: "ذَهَبْتَ",
      femaleYou: "ذَهَبْتِ",
      maleDual: "ذَهَبَا",
      femaleDual: "ذَهَبَتَا",
      yourDualMale: "ذَهَبْتُمَا",
      malePlural: "ذَهَبُوا",
      femalePlural: "ذَهَبْنَ",
      maleI: "ذَهَبْتُ",
      femaleI: "ذَهَبْتُ",
      we: "ذَهَبْنَا",
    },
  },
  {
    infinitive: "أَكَلَ",
    meaning: "ate",
    present: {
      maleHe: "يَأْكُلُ",
      femaleShe: "تَأْكُلُ",
      maleYou: "تَأْكُلُ",
      femaleYou: "تَأْكُلِينَ",
      maleDual: "يَأْكُلَانِ",
      femaleDual: "تَأْكُلَانِ",
      yourDualMale: "تَأْكُلَانِ",
      malePlural: "يَأْكُلُونَ",
      femalePlural: "يَأْكُلْنَ",
      maleI: "آكُلُ",
      femaleI: "آكُلُ",
      we: "نَأْكُلُ",
    },
    past: {
      maleHe: "أَكَلَ",
      femaleShe: "أَكَلَتْ",
      maleYou: "أَكَلْتَ",
      femaleYou: "أَكَلْتِ",
      maleDual: "أَكَلَا",
      femaleDual: "أَكَلَتَا",
      yourDualMale: "أَكَلْتُمَا",
      malePlural: "أَكَلُوا",
      femalePlural: "أَكَلْنَ",
      maleI: "أَكَلْتُ",
      femaleI: "أَكَلْتُ",
      we: "أَكَلْنَا",
    },
  },
  {
    infinitive: "شَرِبَ",
    meaning: "drank",
    present: {
      maleHe: "يَشْرَبُ",
      femaleShe: "تَشْرَبُ",
      maleYou: "تَشْرَبُ",
      femaleYou: "تَشْرَبِينَ",
      maleDual: "يَشْرَبَانِ",
      femaleDual: "تَشْرَبَانِ",
      yourDualMale: "تَشْرَبَانِ",
      malePlural: "يَشْرَبُونَ",
      femalePlural: "يَشْرَبْنَ",
      maleI: "أَشْرَبُ",
      femaleI: "أَشْرَبُ",
      we: "نَشْرَبُ",
    },
    past: {
      maleHe: "شَرِبَ",
      femaleShe: "شَرِبَتْ",
      maleYou: "شَرِبْتَ",
      femaleYou: "شَرِبْتِ",
      maleDual: "شَرِبَا",
      femaleDual: "شَرِبَتَا",
      yourDualMale: "شَرِبْتُمَا",
      malePlural: "شَرِبُوا",
      femalePlural: "شَرِبْنَ",
      maleI: "شَرِبْتُ",
      femaleI: "شَرِبْتُ",
      we: "شَرِبْنَا",
    },
  },
  {
    infinitive: "كَتَبَ",
    meaning: "wrote",
    present: {
      maleHe: "يَكْتُبُ",
      femaleShe: "تَكْتُبُ",
      maleYou: "تكْتُبُ",
      femaleYou: "تَكْتُبِينَ",
      maleDual: "يَكْتُبَانِ",
      femaleDual: "تَكْتُبَانِ",
      yourDualMale: "تَكْتُبَانِ",
      malePlural: "يَكْتُبُونَ",
      femalePlural: "يَكْتُبْنَ",
      maleI: "أَكْتُبُ",
      femaleI: "أَكْتُبُ",
      we: "نَكْتُبُ",
    },
    past: {
      maleHe: "كَتَبَ",
      femaleShe: "كَتَبَتْ",
      maleYou: "كَتَبْتَ",
      femaleYou: "كَتَبْتِ",
      maleDual: "كَتَبَا",
      femaleDual: "كَتَبَتَا",
      yourDualMale: "كَتَبْتُمَا",
      malePlural: "كَتَبُوا",
      femalePlural: "كَتَبْنَ",
      maleI: "كَتَبْتُ",
      femaleI: "كَتَبْتُ",
      we: "كَتَبْنَا",
    },
  },
  {
    infinitive: "دَرَسَ",
    meaning: "studied",
    present: {
      maleHe: "يَدْرُسُ",
      femaleShe: "تَدْرُسُ",
      maleYou: "تَدْرُسُ",
      femaleYou: "تَدْرُسِينَ",
      maleDual: "يَدْرُسَانِ",
      femaleDual: "تَدْرُسَانِ",
      yourDualMale: "تَدْرُسَانِ",
      malePlural: "يَدْرُسُونَ",
      femalePlural: "يَدْرُسْنَ",
      maleI: "أَدْرُسُ",
      femaleI: "أَدْرُسُ",
      we: "نَدْرُسُ",
    },
    past: {
      maleHe: "دَرَسَ",
      femaleShe: "دَرَسَتْ",
      maleYou: "دَرَسْتَ",
      femaleYou: "دَرَسْتِ",
      maleDual: "دَرَسَا",
      femaleDual: "دَرَسَتَا",
      yourDualMale: "دَرَسْتُمَا",
      malePlural: "دَرَسُوا",
      femalePlural: "دَرَسْنَ",
      maleI: "دَرَسْتُ",
      femaleI: "دَرَسْتُ",
      we: "دَرَسْنَا",
    },
  },
  {
    infinitive: "عَمِلَ",
    meaning: "worked",
    present: {
      maleHe: "يَعْمَلُ",
      femaleShe: "تَعْمَلُ",
      maleYou: "تَعْمَلُ",
      femaleYou: "تَعْمَلِينَ",
      maleDual: "يَعْمَلَانِ",
      femaleDual: "تَعْمَلَانِ",
      yourDualMale: "تَعْمَلَانِ",
      malePlural: "يَعْمَلُونَ",
      femalePlural: "يَعْمَلْنَ",
      maleI: "أَعْمَلُ",
      femaleI: "أَعْمَلُ",
      we: "نَعْمَلُ",
    },
    past: {
      maleHe: "عَمِلَ",
      femaleShe: "عَمِلَتْ",
      maleYou: "عَمِلْتَ",
      femaleYou: "عَمِلْتِ",
      maleDual: "عَمِلَا",
      femaleDual: "عَمِلَتَا",
      yourDualMale: "عَمِلْتُمَا",
      malePlural: "عَمِلُوا",
      femalePlural: "عَمِلْنَ",
      maleI: "عَمِلْتُ",
      femaleI: "عَمِلْتُ",
      we: "عَمِلْنَا",
    },
  },
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
      { pronoun: "أَنْتُم", english: "You (3+M)", key: "malePlural" },
    ],
  },
  {
    category: "2nd Person Fem",
    type: "female",
    cells: [
      { pronoun: "أَنْتِ", english: "You (F)", key: "femaleYou" },
      { pronoun: "أَنْتُما", english: "You Two (F)", key: "yourDualMale" },
      { pronoun: "أَنْتُنّ", english: "You (3+F)", key: "femalePlural" },
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
