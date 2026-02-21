import PastGraphics from "@/components/graphics/PastGraphics";
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
        explanation="Select a verb to see its conjugations for different genders and numbers in the past tense."
        Icon={ChartSpline}
      >
        <PastGraphics />
      </Header>
    </>
  );
};

export default Graphics;
