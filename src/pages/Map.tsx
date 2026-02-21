import Header from "@/components/ui/Header";
import MetaData from "@/lib/MetaData";
import { Map } from "lucide-react";
import { Globe } from "@/components/interactive/map/Globe";

const MapPage = () => {
  return (
    <>
      <MetaData title="Past Verbs - q01q" description="Past Verbs" />
      <Header
        header="Map of Qur'an"
        explanation="This map shows the places where the Qur'an was revealed."
        Icon={Map}
      >
        <Globe />
      </Header>
    </>
  );
};

export default MapPage;
