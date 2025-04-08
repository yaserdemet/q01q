import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Pronoun = () => {
  const header = [
    { id: 1, row: "Plural" },
    { id: 2, row: "Dual" },
    { id: 3, row: "Singular" },
  ];

  const rows = [
    {
      id: 1,
      category: "3rd Person Masc (Gha'ib)",
      arabic: ["هُوَ", "هُمَا", "هُمْ"],
      english: ["He", "They (2)", "They (3+)"],
    },
    {
      id: 2,
      category: "3rd Person Fem (Gha'ibah)",
      arabic: ["هِيَ", "هُمَا", "هُنَّ"],
      english: ["She", "They (2)", "They (3+)"],
    },
    {
      id: 3,
      category: "2nd Person Masc (Mukhatab)",
      arabic: ["أَنْتَ", "أَنْتُمَا", "أَنْتُمْ"],
      english: ["You", "You (2)", "You (3+)"],
    },
    {
      id: 4,
      category: "2nd Person Fem (Mukhatabah)",
      arabic: ["أَنْتِ", "أَنْتُمَا", "أَنْتُنَّ"],
      english: ["You", "You (2)", "You (3+)"],
    },
    {
      id: 5,
      category: "1st Person (Mutakallim)",
      arabic: ["أَنَا", "نَحْنُ", "نَحْنُ"],
      english: ["I", "We (2)", "We (3+)"],
    },
  ];

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
      <Table>
        <TableHeader className="bg-muted/50">
          <TableRow>
            <TableHead className="w-[200px] font-bold">Category</TableHead>
            {header.map((item) => (
              <TableHead key={item.id} className="text-center font-bold">
                {item.row}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => {
            // Arrays are defined as [Singular, Dual, Plural]
            // We want to show them under [Plural, Dual, Singular] columns?
            // Actually, let's keep it simple: Singular (left), Dual (mid), Plural (right)
            // or match the user's header order.
            // User header: Plural (id 1), Pair (id 2), Single (id 3)

            return (
              <TableRow
                key={row.id}
                className="hover:bg-muted/30 transition-colors"
              >
                <TableCell className="font-medium text-slate-500 dark:text-slate-400">
                  {row.category}
                </TableCell>
                {/* Plural Column (index 2) */}
                <TableCell className="text-center py-4">
                  <div className="flex flex-col gap-1">
                    <span
                      className="text-2xl font-arabic font-bold text-indigo-600 dark:text-indigo-400"
                      dir="rtl"
                    >
                      {row.arabic[2]}
                    </span>
                    <span className="text-xs text-slate-400 capitalize">
                      {row.english[2]}
                    </span>
                  </div>
                </TableCell>
                {/* Dual Column (index 1) */}
                <TableCell className="text-center py-4">
                  <div className="flex flex-col gap-1">
                    <span
                      className="text-2xl font-arabic font-bold text-indigo-600 dark:text-indigo-400"
                      dir="rtl"
                    >
                      {row.arabic[1]}
                    </span>
                    <span className="text-xs text-slate-400 capitalize">
                      {row.english[1]}
                    </span>
                  </div>
                </TableCell>
                {/* Singular Column (index 0) */}
                <TableCell className="text-center py-4 border-l lg:border-l-0">
                  <div className="flex flex-col gap-1">
                    <span
                      className="text-2xl font-arabic font-bold text-indigo-600 dark:text-indigo-400"
                      dir="rtl"
                    >
                      {row.arabic[0]}
                    </span>
                    <span className="text-xs text-slate-400 capitalize">
                      {row.english[0]}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default Pronoun;
