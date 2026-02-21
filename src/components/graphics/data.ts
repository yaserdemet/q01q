import type { ChartConfig } from "../ui/chart";

interface IChartData {
    tense : string,
    count : number,
    fill : string
}

interface IConfig {
    label : string,
    color : string
}

export const quranDerivedNounData : IChartData[] = [
  { tense: "İsm-i Fâil", count: 3100, fill: "var(--color-mazi)" },
  { tense: "İsm-i Mef‘ûl", count: 1250, fill: "var(--color-muzari)" },
  { tense: "Mastar", count: 2400, fill: "var(--color-future)" },
];

export const chartData : IChartData[] = [
  { tense: "Mazi (Geçmiş)", count: 12700, fill: "var(--color-mazi)" },
  {
    tense: "Müzari (Şimdiki/Geniş)",
    count: 10400,
    fill: "var(--color-muzari)",
  },
  { tense: "Gelecek", count: 1700, fill: "var(--color-future)" },
  { tense: "Emir", count: 1300, fill: "var(--color-emir)" },
];
export const verbType : IChartData[] = [
  { tense: "Misal", count: 2150, fill: "var(--color-mazi)" },
  {
    tense: "Ecvef",
    count: 2800,
    fill: "var(--color-muzari)",
  },
  { tense: "Nakıs", count: 3400, fill: "var(--color-future)" },
];

export const chartConfig : Record<string, IConfig> = {
  mazi: {
    label: "Māḍī (Past)",
    color: "#4facfe",
  },
  muzari: {
    label: "Muḍāriʿ (Present)",
    color: "#00f2fe",
  },
  future: {
    label: "Future",
    color: "#ffd166",
  },
  emir: {
    label: "Emir",
    color: "#ff6b81",
  },
} satisfies ChartConfig;

export const changeHeader = (dataKey : string) => {
    switch(dataKey){
    case "tenses":
      return "This graphics shows tense distribution in Quran";
    case "types":
      return "This graphics shows verb type distribution in Quran";
    case "nouns":
      return "This graphics shows noun derived from verb distribution in Quran";
  }
} 