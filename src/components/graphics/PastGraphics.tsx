"use client";

import * as React from "react";
import GenericChart, { type GraphicType } from "./GenericChart";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { type ChartConfig } from "@/components/ui/chart";

export const description = "Verb frequency in the Qur'an";

const chartData = [
  { tense: "Mazi (Geçmiş)", count: 12700, fill: "var(--color-mazi)" },
  {
    tense: "Müzari (Şimdiki/Geniş)",
    count: 10400,
    fill: "var(--color-muzari)",
  },
  { tense: "Gelecek", count: 1700, fill: "var(--color-future)" },
  { tense: "Emir", count: 1300, fill: "var(--color-emir)" },
];
const verbType = [
  { tense: "Misal", count: 2150, fill: "var(--color-mazi)" },
  {
    tense: "Ecvef",
    count: 2800,
    fill: "var(--color-muzari)",
  },
  { tense: "Nakıs", count: 3400, fill: "var(--color-future)" },
];

export const quranDerivedNounData = [
  { tense: "İsm-i Fâil", count: 3100, fill: "var(--color-mazi)" },
  { tense: "İsm-i Mef‘ûl", count: 1250, fill: "var(--color-muzari)" },
  { tense: "Mastar", count: 2400, fill: "var(--color-future)" },
];

const datasets = {
  tenses: chartData,
  types: verbType,
  nouns: quranDerivedNounData,
};

const chartConfig = {
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

export default function PastGraphics() {
  const [dataKey, setDataKey] = React.useState<keyof typeof datasets>("tenses");
  const [typeGraphics, setTypeGraphics] = React.useState<GraphicType>("bar");

  const dataToShow = datasets[dataKey];

  return (
    <div className="mt-8">
      <GenericChart
        type={typeGraphics}
        data={dataToShow}
        config={chartConfig}
        xDataKey="tense"
        categories={["count"]}
        title="Qur'anic Verb Frequency"
        description="Explore different categories of Qur'anic words"
        className="pt-0"
      >
        <div className="flex items-center gap-2 sm:ml-auto">
          <Select
            value={typeGraphics}
            onValueChange={(v) => setTypeGraphics(v as GraphicType)}
          >
            <SelectTrigger
              className="w-[120px] rounded-lg"
              aria-label="Select type"
            >
              <SelectValue placeholder="Chart Type" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="pie" className="rounded-lg">
                Pie Chart
              </SelectItem>
              <SelectItem value="bar" className="rounded-lg">
                Bar Chart
              </SelectItem>

              <SelectItem value="area" className="rounded-lg">
                Area Chart
              </SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={dataKey}
            onValueChange={(v) => setDataKey(v as keyof typeof datasets)}
          >
            <SelectTrigger
              className="hidden w-[160px] rounded-lg sm:flex"
              aria-label="Select count"
            >
              <SelectValue placeholder="Select Data" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="tenses" className="rounded-lg">
                Tenses
              </SelectItem>
              <SelectItem value="types" className="rounded-lg">
                Verbs Types
              </SelectItem>
              <SelectItem value="nouns" className="rounded-lg">
                Nouns
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </GenericChart>
    </div>
  );
}
