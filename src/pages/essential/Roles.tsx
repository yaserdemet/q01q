import SentencesType from "@/components/pronouns/SentencesType";
import { useState } from "react";
import MetaData from "@/lib/MetaData";
import Header from "@/components/ui/Header";
import { ListChevronsUpDown } from "lucide-react";
export default function Roles() {
  const [activeTab, setActiveTab] = useState("noun");
  return (
    <>
      <MetaData title="Roles - q01q" description="Roles" />
      <Header header="Roles" explanation="Roles" Icon={ListChevronsUpDown}>
        <SentencesType activeTab={activeTab} setActiveTab={setActiveTab} />
      </Header>
    </>
  );
}
