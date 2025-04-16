import Status from "@/components/settings/Status";
import Header from "@/components/ui/Header";
import MetaData from "@/lib/MetaData";
import { Wrench } from "lucide-react";

export default function SettingsPage() {
  return (
    <>
      <MetaData
        title="Settings - q01q"
        description="Your settings and preferences."
      />

      <Header
        header="Settings"
        explanation="Manage your application settings and preferences."
        Icon={Wrench}
      >
        <Status />
      </Header>
    </>
  );
}
