import { HeaderTab } from "@/components/fail-meful-comp/Header";
import Header from "@/components/ui/Header";
import MetaData from "@/lib/MetaData";
import { User } from "lucide-react";

const Fail = () => {
  return (
    <>
      <MetaData title="Ismi Fail - q01q" description="Your history and past interactions." />
      <Header header="İsmi Fail" explanation="İsmi Fail işi yapan kişidir " Icon={User}>
        <HeaderTab types={"fail"} />
      </Header>
    </>
  );
};

export default Fail;
