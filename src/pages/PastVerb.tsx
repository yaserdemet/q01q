import Header from "@/components/ui/Header";
import { Pen } from "lucide-react";
import VerbExplorer from "@/components/verbs/VerbExplorer";
import PastVerb from "@/components/verbs/past/PastVerb";

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
