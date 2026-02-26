import Header from "@/components/ui/Header";
import { Pen } from "lucide-react";
import PastVerb from "@/components/verbs/past/PastVerb";
import MetaData from "@/lib/MetaData";

export default function PastVerbPage() {
  return (
    <>
      <MetaData title="Past Verbs - q01q" description="Past Verbs" />

      <Header
        header="Arabic Verbs - Past Tense"
        explanation="Select a verb to see its conjugations for different genders and numbers in the past tense."
        Icon={Pen}
      >
        <PastVerb />
      </Header>
    </>
  );
}
