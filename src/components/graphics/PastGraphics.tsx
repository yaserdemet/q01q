import * as React from "react";
import GenericChart, { type GraphicType } from "./GenericChart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { chartConfig, chartData, quranDerivedNounData, verbType } from "./data";

// ---------------------------------------------------
const datasets = {
  tenses: chartData,
  types: verbType,
  nouns: quranDerivedNounData,
};

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
              <SelectItem value="line" className="rounded-lg">
                Line Chart
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
