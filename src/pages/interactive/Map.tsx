import Header from "@/components/ui/Header";
import MetaData from "@/lib/MetaData";
import { MapPinIcon } from "lucide-react";
import { Globe } from "@/components/interactive/map/Globe";

const MapPage = () => {
  return (
    <>
      <MetaData title="Maps of Qur'an - q01q" description="Maps of Qur'an" />
      <Header
        header="Map of Qur'an"
        explanation="This map shows the places where the Qur'an was revealed."
        Icon={MapPinIcon}
        color="text-green-500"
      >   
        <Globe />
      </Header>
    </>
  );
};

export default MapPage;
