const FATHA = "\u064e";
const DAMMA = "\u064f";
const KASRA = "\u0650";
const SUKUN = "\u0652";

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
    youMalePlural: string;
    youFemalePlural: string;
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
    youMalePlural: string;
    youFemalePlural: string;
    maleI: string;
    femaleI: string;
    we: string;
  };
}

export function conjugateVerb(
  pastMasc: string,
  presentMasc: string,
  meaning: string,
): VerbConjugation {
  // Past root extraction (expecting 6 chars: R1 V1 R2 V2 R3 V3)
  const r1 = pastMasc[0];
  const v1 = pastMasc[1];
  const r2 = pastMasc[2];
  const v2 = pastMasc[3];
  const r3 = pastMasc[4];
  // v3 is always Fatha in 3rd person masc singular past

  // Present root extraction (expecting 8 chars: P V R1 S R2 V2 R3 V3)
  const p_v = presentMasc[1]; // prefix vowel
  const pv2 = presentMasc[5]; // middle vowel
  // pv3 is always Damma in 3rd person masc singular present

  const pastStem = r1 + v1 + r2 + v2 + r3;
  const presentStemBase = r1 + SUKUN + r2 + pv2 + r3;

  return {
    infinitive: pastMasc,
    meaning,
    present: {
      maleHe: "ي" + p_v + presentStemBase + DAMMA,
      femaleShe: "ت" + p_v + presentStemBase + DAMMA,
      maleYou: "ت" + p_v + presentStemBase + DAMMA,
      femaleYou: "ت" + p_v + presentStemBase + KASRA + "ينَ",
      maleDual: "ي" + p_v + presentStemBase + FATHA + "انِ",
      femaleDual: "ت" + p_v + presentStemBase + FATHA + "انِ",
      yourDualMale: "ت" + p_v + presentStemBase + FATHA + "انِ",
      malePlural: "ي" + p_v + presentStemBase + DAMMA + "ونَ",
      femalePlural: "ي" + p_v + presentStemBase + SUKUN + "نَ",
      youMalePlural: "ت" + p_v + presentStemBase + DAMMA + "ونَ",
      youFemalePlural: "ت" + p_v + presentStemBase + SUKUN + "نَ",
      maleI:
        (r1 === "أ" ? "آ" : "أ" + p_v) +
        (r1 === "أ" ? "" : r1 + SUKUN) +
        r2 +
        pv2 +
        r3 +
        DAMMA,
      femaleI:
        (r1 === "أ" ? "آ" : "أ" + p_v) +
        (r1 === "أ" ? "" : r1 + SUKUN) +
        r2 +
        pv2 +
        r3 +
        DAMMA,
      we: "ن" + p_v + presentStemBase + DAMMA,
    },
    past: {
      maleHe: pastMasc,
      femaleShe: pastStem + FATHA + "تْ",
      maleYou: pastStem + SUKUN + "تَ",
      femaleYou: pastStem + SUKUN + "تِ",
      maleDual: pastStem + FATHA + "ا",
      femaleDual: pastStem + FATHA + "تَا",
      yourDualMale: pastStem + SUKUN + "تُمَا",
      malePlural: pastStem + DAMMA + "وا",
      femalePlural: pastStem + SUKUN + "نَ",
      youMalePlural: pastStem + SUKUN + "تُمْ",
      youFemalePlural: pastStem + SUKUN + "تُنَّ",
      maleI: pastStem + SUKUN + "تُ",
      femaleI: pastStem + SUKUN + "تُ",
      we: pastStem + SUKUN + "نَا",
    },
  };
}
