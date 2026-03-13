import Pronoun from "@/components/pronouns/Pronoun";
import Header from "@/components/ui/Header";
import MetaData from "@/lib/MetaData";
import { User } from "lucide-react";
export default function PronounsPage() {
  return (
    <>
      <MetaData
        title="Pronouns - q01q"
        description="Your history and past interactions."
      />
      <Header
        header="Pronouns"
        explanation="Pronouns are words that replace nouns."
        Icon={User}
      >
        <Pronoun />
      </Header>
    </>
  );
}
