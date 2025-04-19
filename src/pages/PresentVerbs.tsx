import Header from "@/components/ui/Header";
import MetaData from "@/lib/MetaData";
import { Pen } from "lucide-react";
import { useMatches } from "react-router-dom";


// -------------------------------------------------------

const PresentVerbs = () => {
  const matches = useMatches();
  const pathname = matches
    .filter((item) => item.pathname !== "/")
    .map((item) => item.pathname.slice(1)) || "q01q"
  return (
    <>
      <MetaData
        title="Present Verbs - q01q"
        description={pathname.join(" ")}
      />
      <Header
        header="Arabic Verbs - Present Tense"
        explanation="Present Verbs and its forms"
        Icon={Pen}
      ></Header>
    </>
  );
};

export default PresentVerbs;
