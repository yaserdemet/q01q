"use client";
import Header from "@/components/ui/Header";
import MetaData from "@/lib/MetaData";
import { Home } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { useEffect } from "react";
import { toast } from "sonner";

export default function Page() {
  useEffect(() => {
    const hasSeenWelcome = sessionStorage.getItem("hasSeenWelcome");

    if (!hasSeenWelcome) {
      toast.success(
        "سُبْحَانَكَ لَا عِلْمَ لَنَا إِلَّا مَا عَلَّمْتَنَا ۖ إِنَّكَ أَنْتَ الْعَلِيمُ الْحَكِيمُ",
      );
      sessionStorage.setItem("hasSeenWelcome", "true");
    }
  }, []);
  return (
    <>
      <MetaData
        title="Home Page"
        description="Welcome to your application. Select an option from the sidebar to get
          started. "
      />
      <Toaster position="top-right" duration={5000} />
      <Header
        header="Home Page"
        explanation=" Welcome to your application. Select an option from the sidebar to get
          started. "
        Icon={Home}
      ></Header>
    </>
  );
}
