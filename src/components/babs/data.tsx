import React from "react";

const FATHA = "\u064e";
const DAMMA = "\u064f";
const KASRA = "\u0650";
const SUKUN = "\u0652";
const SHADDA = "\u0651";

interface IData {
  type: number;
  name: string;
  root: string;
}
interface BabResult {
  mazi: React.ReactNode;
  muzari: React.ReactNode;
}

interface VerbInput {
  root: string;
  type: number;
}
export const data: IData[] = [
  { type: 2, name: "Tef'il", root: "" },
  { type: 3, name: "Müfaale", root: "" },
  { type: 4, name: "İf'al", root: "" },
  { type: 5, name: "Tafa''ul", root: "" },
  { type: 6, name: "Tafaa'ul", root: "" },
  { type: 10, name: "İstif'al", root: "" },
];

export const createFormBab = (verb: VerbInput): BabResult | null => {
  if (!verb.root) return null;

  // Strip harakat to get clean root letters
  const cleanRoot = verb.root.replace(/[\u064B-\u0652]/g, "");
  if (cleanRoot.length !== 3) return null;

  const [fa, ayn, lam] = cleanRoot.split("");

  // II. Bab — Tef'il (فعّل)
  if (verb.type === 2) {
    const highlight = "text-indigo-600 font-bold";
    return {
      mazi: (
        <span>
          {fa}
          {FATHA}
          <span className={highlight}>
            {ayn}
            {SHADDA}
          </span>
          {FATHA}
          {lam}
          {FATHA}
        </span>
      ),
      muzari: (
        <span>
          يُ{fa}
          {FATHA}
          <span className={highlight}>
            {ayn}
            {SHADDA}
          </span>
          {KASRA}
          {lam}
          {DAMMA}
        </span>
      ),
    };
  }

  // III. Bab — Mufa'ala (فاعل)
  if (verb.type === 3) {
    const highlight = "text-amber-600 font-bold";
    return {
      mazi: (
        <span>
          {fa}
          {FATHA}
          <span className={highlight}>ا</span>
          {ayn}
          {FATHA}
          {lam}
          {FATHA}
        </span>
      ),
      muzari: (
        <span>
          يُ{fa}
          {FATHA}
          <span className={highlight}>ا</span>
          {ayn}
          {KASRA}
          {lam}
          {DAMMA}
        </span>
      ),
    };
  }

  // IV. Bab — If'al (أفعل)
  if (verb.type === 4) {
    const highlight = "text-blue-600 font-bold";
    return {
      mazi: (
        <span>
          <span className={highlight}>أَ</span>
          {fa}
          {SUKUN}
          {ayn}
          {FATHA}
          {lam}
          {FATHA}
        </span>
      ),
      muzari: (
        <span>
          يُ{fa}
          {SUKUN}
          {ayn}
          {KASRA}
          {lam}
          {DAMMA}
        </span>
      ),
    };
  }

  // V. Bab — Tafa''ul (تفعّل)
  if (verb.type === 5) {
    const highlight = "text-rose-600 font-bold";
    return {
      mazi: (
        <span>
          <span className={highlight}>تَ</span>
          {fa}
          {FATHA}
          <span className={highlight}>
            {ayn}
            {SHADDA}
          </span>
          {FATHA}
          {lam}
          {FATHA}
        </span>
      ),
      muzari: (
        <span className="bg-rose-50 px-1 rounded">
          يَ<span className={highlight}>تَ</span>
          {fa}
          {FATHA}
          <span className={highlight}>
            {ayn}
            {SHADDA}
          </span>
          {FATHA}
          {lam}
          {DAMMA}
        </span>
      ),
    };
  }

  // VI. Bab — Tafaa'ul (تفاعل)
  if (verb.type === 6) {
    const highlight = "text-teal-600 font-bold";
    return {
      mazi: (
        <span>
          <span className={highlight}>تَ</span>
          {fa}
          {FATHA}
          <span className={highlight}>ا</span>
          {ayn}
          {FATHA}
          {lam}
          {FATHA}
        </span>
      ),
      muzari: (
        <span className="bg-teal-50 px-1 rounded">
          يَ<span className={highlight}>تَ</span>
          {fa}
          {FATHA}
          <span className={highlight}>ا</span>
          {ayn}
          {FATHA}
          {lam}
          {DAMMA}
        </span>
      ),
    };
  }

  // X. Bab — Istif'al (استفعل)
  if (verb.type === 10) {
    const highlight = "text-purple-600 font-bold";
    return {
      mazi: (
        <span>
          <span className={highlight}>اِسْتَ</span>
          {fa}
          {SUKUN}
          {ayn}
          {FATHA}
          {lam}
          {FATHA}
        </span>
      ), // استفعل
      muzari: (
        <span>
          يَ<span className={highlight}>سْتَ</span>
          {fa}
          {SUKUN}
          {ayn}
          {KASRA}
          {lam}
          {DAMMA}
        </span>
      ), // يستفعل
    };
  }

  return null;
};
