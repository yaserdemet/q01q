import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "./skeleton";

interface ILoading {
  time?:number;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
const LoadingComponent = ({ loading, setLoading, time = 1200 }: ILoading) => {
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), time);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading && (
        <Card className="w-full ">
          <CardHeader>
            <Skeleton className="h-12 w-2/3" />
            <Skeleton className="h-12 w-1/2" />
          </CardHeader>
          <CardContent>
            <Skeleton className="aspect-video w-full" />
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default LoadingComponent;
