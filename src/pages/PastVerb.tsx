import Header from "@/components/ui/Header";
import { Pen } from "lucide-react";
import VerbExplorer from "@/components/verbs/VerbExplorer";
import PastVerb from "@/components/verbs/past/PastVerb";

const renderVerbWithSuffix = (verb: string) => {
  const root = verb.substring(0, 3);
  const suffix = verb.substring(3);

  return (
    <span dir="rtl" className="text-2xl font-bold">
      <span className="text-gray-700">{root}</span>
      {suffix && (
        <span className="font-bold bg-yellow-100 px-1 rounded">{suffix}</span>
      )}
    </span>
  );
};

export default function PastVerbPage() {
  return (
    <Header
      header="Arabic Verbs - Past Tense"
      explanation="Select a verb to see its conjugations for different genders and numbers in the past tense."
      Icon={Pen}
    >
      <PastVerb />
    </Header>
  );
}
