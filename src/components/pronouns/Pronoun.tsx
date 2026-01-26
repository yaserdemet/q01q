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
      type: "male",
    },
    {
      id: 2,
      category: "3rd Person Fem (Gha'ibah)",
      arabic: ["هِيَ", "هُمَا", "هُنَّ"],
      english: ["She", "They (2)", "They (3+)"],
      type: "female",
    },
    {
      id: 3,
      category: "2nd Person Masc (Mukhatab)",
      arabic: ["أَنْتَ", "أَنْتُمَا", "أَنْتُمْ"],
      english: ["You", "You (2)", "You (3+)"],
      type: "male",
    },
    {
      id: 4,
      category: "2nd Person Fem (Mukhatabah)",
      arabic: ["أَنْتِ", "أَنْتُمَا", "أَنْتُنَّ"],
      english: ["You", "You (2)", "You (3+)"],
      type: "female",
    },
    {
      id: 5,
      category: "1st Person (Mutakallim)",
      arabic: ["أَنَا", "نَحْنُ", "نَحْنُ"],
      english: ["I", "We (2)", "We (3+)"],
      type: "male and female",
    },
  ];

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
              {row.arabic.reverse().map((word, index) => {
                const translation = row.english.slice().reverse()[index];
                return (
                  <TableCell key={index} className="text-center py-4">
                    <div className="flex flex-col gap-1">
                      <span
                        className={`${row.type === "male" ? "text-blue-600 dark:text-blue-400" : row.type === "female" ? "text-pink-600 dark:text-pink-400" : "text-purple-700 dark:text-purple-400"} text-2xl font-bold `}
                        dir="rtl"
                      >
                        {word}
                      </span>
                      <span className="text-xs text-slate-400 capitalize">
                        {translation}
                      </span>
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
