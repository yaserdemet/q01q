import { HeaderTab } from "@/components/fail-meful-comp/Header";
import Header from "@/components/ui/Header";
import MetaData from "@/lib/MetaData";
import { User } from "lucide-react";
import { useEffect } from "react";

const Fail = () => {
  const getQuran = async () => {
    try {
      const response = await fetch("https://api.alquran.cloud/v1/meta");
      const data = await response.json();
      console.log("response", data);
      return data;
    } catch (error) {
      console.error("Failed to fetch Quran meta:", error);
    }
  };
  useEffect(() => {
    getQuran();
  }, []);
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
