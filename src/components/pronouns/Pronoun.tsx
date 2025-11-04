import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { rows, header, renderAvatars } from "./data";

const Pronoun = () => {
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
              className=  {` ${row.type === "male" ? "hover:bg-blue-100/100 dark:hover:bg-blue-900/10" : row.type === "female" ? "hover:bg-pink-100/100 dark:hover:bg-pink-900/10" : "hover:bg-purple-100/100 dark:hover:bg-purple-900/10" } transition-colors group`}
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
                        <div className="flex flex-col items-center gap-1">
                          <span  className={`${
                              row.type === "male"
                                ? "text-blue-600 dark:text-blue-400"
                                : row.type === "female"
                                  ? "text-pink-600 dark:text-pink-400"
                                  : "text-purple-700 dark:text-purple-400"
                            } text-xl font-bold tracking-wide`}
                            dir="rtl">
                          {[...row.suffix].reverse()[index]}
                          </span>
                        
                        </div>

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
