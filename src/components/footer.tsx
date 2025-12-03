import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage } from "./ui/avatar";
import logo from "@/assets/logo.webp";
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";

export default function Footer() {
  const { city, country } = useLoaderData() as {
    city: string;
    country: string;
  };

  return (
    <footer className="mt-auto">
      <Separator />
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 px-4 py-4 text-center text-sm text-muted-foreground">
        <Avatar className="h-15 w-15 shrink-0">
          <AvatarImage src={logo} alt="Logo" />
        </Avatar>
        <div>
          <p>
            {city}, {country}
          </p>
        </div>
        <p>
          &copy;
          {new Date().getFullYear()} q01q. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
