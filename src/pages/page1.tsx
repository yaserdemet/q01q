import Header from "@/components/ui/Header";
import { Home } from "lucide-react";

export default function Page() {
  return (
    <Header
      header="Home Page"
      explanation=" Welcome to your application. Select an option from the sidebar to get
          started. "
      Icon={Home}
    ></Header>
  );
}
