import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage } from "../components/ui/avatar";
import logo from "@/assets/logo.webp";
import { useLoaderData } from "react-router-dom";

export default function Footer() {
  const data = useLoaderData() as {
    city: string;
    country: string;
  };
  const city = data?.city || "Unknown City";
  const country = data?.country || "Unknown Country";

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
