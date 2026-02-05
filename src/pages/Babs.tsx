import Bab from "@/components/babs/Bab";
import Header from "@/components/ui/Header";
import MetaData from "@/lib/MetaData";
import { DoorOpen } from "lucide-react";
import React from "react";

const Babs = () => {
  return (
    <>
      <MetaData title="Babs - q01q" description="Babs" />
      <Header header="Arabic Babs" explanation="" Icon={DoorOpen}>
        <Bab />
      </Header>
    </>
  );
};

export default Babs;
