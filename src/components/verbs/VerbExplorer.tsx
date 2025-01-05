import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { verbs, tableRows } from "./data";

interface VerbExplorerProps {
  tense: "past" | "present";
  renderVerb?: (verb: string) => React.ReactNode;
}

const VerbExplorer: React.FC<VerbExplorerProps> = ({ tense, renderVerb }) => {
  const [selectedVerbIndex, setSelectedVerbIndex] = useState(0);
  const selectedVerb = verbs[selectedVerbIndex];

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

  const defaultRender = (verb: string) => (
    <span dir="rtl" className="text-2xl font-bold">
      {verb}
    </span>
  );

  const displayVerb = renderVerb || defaultRender;

  return (
    <div className="mt-8 max-w-6xl">
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
          <div className="max-w-xs">
            <label className="text-sm font-semibold mb-2 block text-slate-700">
              Choose a verb:
            </label>
            <Select
              value={selectedVerbIndex.toString()}
              onValueChange={(value) => setSelectedVerbIndex(parseInt(value))}
            >
              <SelectTrigger className="w-full bg-white shadow-sm border-slate-200">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {verbs.map((verb, idx) => (
                  <SelectItem key={idx} value={idx.toString()}>
                    {verb.infinitive} - {verb.meaning}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="p-4 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border border-indigo-100 shadow-sm flex items-center gap-6">
            <div>
              <p className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">
                Infinitive
              </p>
              <p className="text-2xl font-bold font-arabic">
                {selectedVerb.infinitive}
              </p>
            </div>
            <div className="h-10 w-px bg-indigo-200" />
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                Meaning
              </p>
              <p className="text-xl font-medium text-slate-700">
                {selectedVerb.meaning}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border bg-card text-card-foreground shadow-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50/80 border-b">
              <TableHead className="font-bold text-slate-500 w-[150px]">
                Category
              </TableHead>
              <TableHead className="font-bold text-center text-slate-900">
                Singular
              </TableHead>
              <TableHead className="font-bold text-center text-slate-900">
                Dual
              </TableHead>
              <TableHead className="font-bold text-center text-slate-900">
                Plural
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
