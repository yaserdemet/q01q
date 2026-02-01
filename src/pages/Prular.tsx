import Header from "@/components/ui/Header";
import { Pen } from "lucide-react";
import MetaData from "@/lib/MetaData";
import PrularNames from "@/components/pronouns/PrularNames";

const Prular = () => {
  return (
    <>
      <MetaData title="Prular - q01q" description="Prular" />
      <Header
        header="Arabic Verbs - Prular"
        explanation="Select a verb to see its conjugations for different genders and numbers in the prular tense."
        Icon={Pen}
      >
        <PrularNames />
      </Header>
    </>
  );
};

export default Prular;
