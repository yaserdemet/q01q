import Status from "@/components/settings/Status";
import Header from "@/components/ui/Header";
import { Wrench } from "lucide-react";

export default function SettingsPage() {
  return (
    <>
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
