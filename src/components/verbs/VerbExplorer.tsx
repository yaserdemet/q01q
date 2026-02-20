import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { tableRows, verbs } from "./data";
import DynamicVerbs from "@/lib/DynamicVerbs";

interface VerbExplorerProps {
  tense: "past" | "present";
  renderVerb?: (verb: string) => React.ReactNode;
}

const VerbExplorer: React.FC<VerbExplorerProps> = ({ tense, renderVerb }) => {
  const getRowClassName = (type: string) => {
    switch (type) {
      case "male":
        return "hover:bg-blue-50/50 dark:hover:bg-blue-900/10";
      case "female":
        return "bg-pink-50/30 hover:bg-pink-100/50 dark:hover:bg-pink-900/10";
      case "both":
        return "bg-purple-50/30 hover:bg-purple-100/50 dark:hover:bg-purple-900/10";
      default:
        return "hover:bg-slate-50";
    }
  };

  const getVerbColor = (type: string) => {
    switch (type) {
      case "male":
        return "text-blue-600";
      case "female":
        return "text-pink-600";
      case "both":
        return "text-purple-600";
      default:
        return "text-blue-600";
    }
  };

  const defaultRender = (verb: string) => {
    if (!verb) return null;

    if (tense === "past") {
      // Past: indices 0-5 are root/stem, 6+ are suffix
      const stem = verb.substring(0, 6);
      const suffix = verb.substring(6);
      return (
        <span dir="rtl" className="text-2xl font-bold">
          <span className="text-slate-600">{stem}</span>
          {suffix && (
            <span className="text-amber-600 bg-amber-50 px-0.5 rounded">
              {suffix}
            </span>
          )}
        </span>
      );
    } else {
      // Present: 0-1 prefix, 2-7 root/stem, 8+ suffix
      // Handle the "آ" case for verbs starting with Alif
      const hasMaddaPrefix = verb.startsWith("آ");
      let prefix = "";
      let stem = "";
      let suffix = "";

      if (hasMaddaPrefix) {
        prefix = verb.substring(0, 1);
        stem = verb.substring(1, 4); // Stem is shorter because Madda combines things
        suffix = verb.substring(4);
      } else {
        prefix = verb.substring(0, 2);
        stem = verb.substring(2, 8);
        suffix = verb.substring(8);
      }

      return (
        <span dir="rtl" className="text-2xl font-bold">
          <span className="text-indigo-600 bg-indigo-50 px-0.5 rounded">
            {prefix}
          </span>
          <span className="text-slate-600">{stem}</span>
          {suffix && (
            <span className="text-amber-600 bg-amber-50 px-0.5 rounded">
              {suffix}
            </span>
          )}
        </span>
      );
    }
  };

  const [selectedVerbIndex, setSelectedVerbIndex] = useState(0);
  const selectedVerb = verbs[selectedVerbIndex];

  const displayVerb = renderVerb || defaultRender;

  return (
    <div className="mt-8 max-w-6xl animate-in fade-in slide-in-from-left-12 duration-1000 ease-in-out">
      <div className="mb-8">
        <DynamicVerbs
          tense={tense}
          renderVerb={displayVerb}
          selectedVerbIndex={selectedVerbIndex}
          onVerbChange={setSelectedVerbIndex}
        />
      </div>

      <div className="rounded-xl border bg-card text-card-foreground shadow-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50/80 border-b">
              <TableHead className="font-bold text-slate-500 w-[150px]">
                Category
              </TableHead>           
              <TableHead className="font-bold text-center text-slate-900">
                Plural
              </TableHead>
                <TableHead className="font-bold text-center text-slate-900">
                Dual
              </TableHead>
               <TableHead className="font-bold text-center text-slate-900">
                Singular
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableRows.map((row, idx) => (
              <TableRow
                key={idx}
                className={`${getRowClassName(row.type)} transition-colors border-b last:border-0`}
              >
                <TableCell className="font-semibold text-slate-500 text-sm">
                  {row.category}
                </TableCell>
                {[...row.cells].reverse().map((cell, cellIdx) => (
                  <TableCell key={cellIdx} className="text-center py-6">
                    <div className="flex flex-col items-center gap-1">
                      <div
                        className="font-bold text-xl text-slate-900 mb-0.5"
                        dir="rtl"
                      >
                        {cell.pronoun}
                      </div>
                      <div className="text-[10px] uppercase font-bold text-slate-400 tracking-tighter mb-2">
                        {cell.english}
                      </div>
                      <div
                        className={`${getVerbColor(row.type)} transition-transform hover:scale-110 duration-200`}
                      >
                        {displayVerb(
                          selectedVerb[tense][
                            cell.key as keyof typeof selectedVerb.past
                          ],
                        )}
                      </div>
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default VerbExplorer;
