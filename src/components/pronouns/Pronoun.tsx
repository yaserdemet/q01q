import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { rows, header, renderAvatars } from "./data";
import { useSpeech } from "@/hooks/useSpeech";
import { Button } from "@/components/ui/button";
import { Volume2 } from "lucide-react";

const Pronoun = () => {
  const { speak } = useSpeech();
  return (
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
              className="hover:bg-muted/30 transition-colors"
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
                        <Button
                          variant="ghost"
                          size="lg"
                          className="h-auto py-2 px-4 hover:bg-muted group transition-all duration-300"
                          onClick={() => speak("merhbaa")}
                        >
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
                            <Volume2 className="h-4 w-4 text-slate-400 group-hover:text-primary group-hover:scale-110 transition-all" />
                          </div>
                        </Button>

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
  );
};

export default Pronoun;
