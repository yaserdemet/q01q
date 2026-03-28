

import Header from "@/components/ui/Header";
import MetaData from "@/lib/MetaData";
import { User } from "lucide-react";
import Adjectives from "@/components/essential/Adjectives";

export default function AdjectivesPage() {
  return (
    <>
      <MetaData 
        title="Adjectives (Sıfatlar) - q01q" 
        description="Learn how adjectives work in Arabic and how they match the nouns they modify." 
      />
      <Header 
        header="Adjectives (Sıfatlar)" 
        explanation="In Arabic, adjectives (Sıfat) follow the noun and match it in gender, number, definiteness, and case." 
        Icon={User}
      >
        <Adjectives />
      </Header>
    </>
  );
}
