import { HeaderTab } from "@/components/fail-meful-comp/Header";
import Header from "@/components/ui/Header";
import MetaData from "@/lib/MetaData";
import { User } from "lucide-react";
import { useEffect } from "react";

const Fail = () => {
  const getQuran = async () => {
    const data = await fetch("http://api.alquran.cloud/v1/meta")
    const response = await JSON.stringify(data)
    console.log("response", response)
    return response
  }
  useEffect(() =>{
    getQuran()
  },[])
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
