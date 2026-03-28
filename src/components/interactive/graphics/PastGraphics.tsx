import * as React from "react";
import GenericChart, { type GraphicType } from "./GenericChart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { changeHeader, chartConfig, chartData, quranDerivedNounData, verbType } from "./data";
import LoadingComponent from "../../ui/LoadingComponent";
import { Button } from "@/components/ui/button";

// ---------------------------------------------------
const datasets = {
  tenses: chartData,
  types: verbType,
  nouns: quranDerivedNounData,
};

export default function PastGraphics() {
  const [dataKey, setDataKey] = React.useState<keyof typeof datasets>("tenses");
  const [typeGraphics, setTypeGraphics] = React.useState<GraphicType>("bar");
  const [loading, setLoading] = React.useState(true);
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  const dataToShow = datasets[dataKey];
  const pageRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (pageRef.current?.requestFullscreen) {
        pageRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div
      ref={pageRef}
      className={`mt-8 bg-background transition-all duration-300 ${
        isFullscreen ? "h-screen w-screen p-4 flex flex-col justify-center overflow-auto" : ""
      }`}
    >
      <LoadingComponent loading={loading} setLoading={setLoading} />
      <GenericChart
        type={typeGraphics}
        data={dataToShow}
        config={chartConfig}
        xDataKey="tense"
        categories={["count"]}
        title={changeHeader(dataKey)}
        description="Explore different categories of Qur'anic words"
        className="pt-0"
        height={isFullscreen ? "70vh" : "350px"}
      >
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto sm:ml-auto justify-start sm:justify-end mt-2 sm:mt-0">
          <Select value={typeGraphics} onValueChange={(v) => setTypeGraphics(v as GraphicType)}>
            <SelectTrigger className="w-full sm:w-30 rounded-lg" aria-label="Select type">
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

          <Select value={dataKey} onValueChange={(v) => setDataKey(v as keyof typeof datasets)}>
            <SelectTrigger className="w-full flex sm:w-40 rounded-lg" aria-label="Select count">
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
          <Button
            className="w-full sm:w-auto"
            onClick={toggleFullscreen}
            variant={isFullscreen ? "secondary" : "default"}
          >
            {isFullscreen ? "Exit Full Screen" : "Full Screen"}
          </Button>
        </div>
      </GenericChart>
    </div>
  );
}
