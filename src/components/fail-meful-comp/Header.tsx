import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";
import { fails } from "./data";
import { CheckCircle2Icon } from "lucide-react";

const data = [
  {
    header: ["Salim", "Misal", "Ecvef", "Nakıs"],
    expalantion: [
      {
        title: "Salim",
        description:
          "Salim fiillerin ismi faili en çok kullanılan yapıdır. İlk harf uzatılır. İkinci harf kesra olur.",
      },
      {
        title: "Misal",
        description:
          "Misal fiillerin ismi faili en çok kullanılan yapıdır. İlk harf uzatılır. İkinci harf kesra olur.",
      },
      {
        title: "Ecvef",
        description:
          "Ecvef fiillerin ismi faili en çok kullanılan yapıdır. İlk harf uzatılır. İkinci harf kesra olur.",
      },
      {
        title: "Nakıs",
        description:
          "Nakıs fiillerin ismi faili en çok kullanılan yapıdır. İlk harf uzatılır. İkinci harf kesra olur.",
      },
    ],
  },
];
type Role = "fail" | "meful";

export function HeaderTab({ types }: { types: Role }) {
  const content = data[0];
  const [selectedRoot, setSelectedRoot] = useState(fails[0].root);
  const createIsmiFail = (root: string) => {
    if (root.length !== 3) {
      throw new Error("Fiilin kökü 3 harfli olmalıdır.");
    }
    const [fe, ayn, lam] = root;

    return (
      <span style={{ fontSize: "32px", direction: "rtl" }}>
        <span>{fe}</span>
        <span>َ</span>

        <span style={{ color: "red" }}>ا</span>

        <span style={{ color: "blue" }}>{ayn}</span>
        <span style={{ color: "blue" }}>ِ</span>

        <span>{lam}</span>
      </span>
    );
  };

  return (
    <div className="mt-8">
      <Tabs defaultValue={content.header[0]} className="w-full max-w-2xl">
        {/* TODO: OTHER TYPES WİLL BE ADDED */}
        {/* <TabsList className="flex flex-wrap h-auto">
          {content.header.map((header) => (
            <TabsTrigger key={header} value={header}>
              {header}
            </TabsTrigger>
          ))}
        </TabsList> */}
        <Select defaultValue={selectedRoot} onValueChange={(value: string) => setSelectedRoot(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select a root" />
          </SelectTrigger>
          <SelectContent>
            {fails.map((item) => (
              <SelectItem key={item.id} value={item.root}>
                {item.root}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {content.expalantion.map((exp, index) => (
          <TabsContent className="flex flex-col gap-2" key={index} value={exp.title}>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">
                  {" "}
                  {exp.title} fiillerin ismi {types} yapısı{" "}
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  {exp.description}
                  {createIsmiFail(selectedRoot)}
                </CardDescription>
              </CardHeader>
            </Card>
            <Alert className="max-w-md">
              <CheckCircle2Icon />
              <AlertTitle>
                Örnek Ayet (
                {fails.find((item) => item.root === selectedRoot)?.ayah}){" "}
              </AlertTitle>
              <AlertDescription>
                <div className="flex">
                  <span
                    className="text-2xl font-arabic text-slate-800"
                    dir="rtl"
                  >
                    {
                      fails.find((item) => item.root === selectedRoot)
                        ?.ayahArabic
                    }
                  </span>
                </div>
                {fails.find((item) => item.root === selectedRoot)?.ayahMeaning}
              </AlertDescription>
            </Alert>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
