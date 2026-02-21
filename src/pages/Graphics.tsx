import PastGraphics from "@/components/interactive/graphics/PastGraphics";
import Header from "@/components/ui/Header";
import MetaData from "@/lib/MetaData";
import { ChartSpline } from "lucide-react";

// ---------------------------------------------------

const Graphics = () => {
  return (
    <>
      <MetaData title="Past Verbs - q01q" description="Past Verbs" />
      <Header
        header="Graphics"
        explanation="This graphics shows Quranic words distribution in Quran"
        Icon={ChartSpline}
      >
        <PastGraphics />
      </Header>
    </>
  );
};

export default Graphics;
