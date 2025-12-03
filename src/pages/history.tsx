import MetaData from "@/lib/MetaData";
import { useLoaderData } from "react-router-dom";

export default function HistoryPage() {
  // const data = useLoaderData();
  // console.log("data" ,data);
  

  return (
    <>
      <MetaData
        title="History - q01q"
        description="Your history and past interactions."
      />
      <div className="p-8">
        <h6>
          {/* {data &&  data?.data?.map((item: any) => {
            return <div key={item._id}>{item?.name}</div>;
          })}{" "} */}
        </h6>
        <h1 className="text-3xl font-bold mb-4">History</h1>
        <p className="text-gray-600">Your history and past interactions.</p>
      </div>
    </>
  );
}
