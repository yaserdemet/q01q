import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { rows, header, renderAvatars } from "./data";
import { Info } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Pronoun = () => {
  const [showSuffix, setShowSuffix] = useState<boolean>(true);
  return (
    <>
      <Alert className="max-w-5xl my-12 border-green-200 bg-green-100 text-blue-600 dark:border-green-900 dark:bg-green-950 dark:text-blue-50">
        <Info />

        <AlertTitle>This table show Arabic pronouns</AlertTitle>
        <AlertDescription>
          First pronouns form as alone in context. Second pronouns are added
          word as suffix.
        </AlertDescription>
        <div className="mt-2 flex items-center gap-2">
          <Switch
            className="data-[state=checked]:bg-blue-600 hover:cursor-pointer"
            id="show-suffix"
            checked={showSuffix}
            onCheckedChange={setShowSuffix}
          />
          <Label htmlFor="show-suffix">Show Suffix</Label>
        </div>
      </Alert>
      <div className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead className="w-50 font-bold">Category</TableHead>
              {header.map((item) => (
                <TableHead key={item.id} className="text-center font-bold">
                  {item.row}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                className={` ${row.type === "male" ? "hover:bg-blue-100/100 dark:hover:bg-blue-900/10" : row.type === "female" ? "hover:bg-pink-100/100 dark:hover:bg-pink-900/10" : "hover:bg-purple-100/100 dark:hover:bg-purple-900/10"} transition-colors group`}
              >
                <TableCell className="font-medium text-slate-500 dark:text-slate-400">
                  {row.category}
                </TableCell>
                {/* Mapping reversed arrays to match [Plural, Dual, Singular] header order */}
                {[...row.arabic].reverse().map((word, index) => {
                  const translation = [...row.english].reverse()[index];
                  return (
                    <TableCell key={index} className="text-center py-6">
                      <div className="flex flex-col items-center gap-3">
                        {renderAvatars(row.type, index)}

                        <div className="flex flex-col items-center gap-2">
                          <div className="flex flex-col items-center gap-1">
                            <span
                              className={`${
                                row.type === "male"
                                  ? "text-blue-600 dark:text-blue-400"
                                  : row.type === "female"
                                    ? "text-pink-600 dark:text-pink-400"
                                    : "text-purple-700 dark:text-purple-400"
                              } text-3xl font-bold tracking-wide`}
                              dir="rtl"
                            >
                              {word}
                            </span>
                          </div>
                          {showSuffix && (
                            <div className="flex flex-col items-center gap-1">
                              <span
                                className={`${
                                  row.type === "male"
                                    ? "text-blue-600 dark:text-blue-400"
                                    : row.type === "female"
                                      ? "text-pink-600 dark:text-pink-400"
                                      : "text-purple-700 dark:text-purple-400"
                                } text-xl font-bold tracking-wide`}
                                dir="rtl"
                              >
                                {[...row.suffix].reverse()[index]}
                              </span>
                            </div>
                          )}

                          <span className="text-sm font-medium text-slate-500 dark:text-slate-400 capitalize">
                            {translation}
                          </span>
                        </div>
                      </div>
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default Pronoun;
