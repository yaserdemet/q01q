"use client";

import { useState } from "react";
import { Pen } from "lucide-react";
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
import Header from "@/components/ui/Header";

interface VerbConjugation {
  infinitive: string;
  meaning: string;
  past: {
    maleHe: string; // هو - he (singular)
    femaleShe: string; // هي - she (singular)
    maleYou: string; // أنت (male) - you (male singular)
    femaleYou: string; // أنتِ (female) - you (female singular)
    maleDual: string; // هما (male) - they two (male)
    femaleDual: string; // هما (female) - they two (female)
    yourDualMale: string; // أنتما - you both
    malePlural: string; // هم - they (male plural)
    femalePlural: string; // هن - they (female plural)
    maleI: string; // أنا - I (male)
    femaleI: string; // أنا - I (female)
    we: string; // نحن - we
  };
}

const verbs: VerbConjugation[] = [
  {
    infinitive: "ذَهَبَ",
    meaning: "went",
    past: {
      maleHe: "ذَهَبَ",
      femaleShe: "ذَهَبَتْ",
      maleYou: "ذَهَبْتَ",
      femaleYou: "ذَهَبْتِ",
      maleDual: "ذَهَبَا",
      femaleDual: "ذَهَبَتَا",
      yourDualMale: "ذَهَبْتُمَا",
      malePlural: "ذَهَبُوا",
      femalePlural: "ذَهَبْنَ",
      maleI: "ذَهَبْتُ",
      femaleI: "ذَهَبْتُ",
      we: "ذَهَبْنَا",
    },
  },
  {
    infinitive: "أَكَلَ",
    meaning: "ate",
    past: {
      maleHe: "أَكَلَ",
      femaleShe: "أَكَلَتْ",
      maleYou: "أَكَلْتَ",
      femaleYou: "أَكَلْتِ",
      maleDual: "أَكَلَا",
      femaleDual: "أَكَلَتَا",
      yourDualMale: "أَكَلْتُمَا",
      malePlural: "أَكَلُوا",
      femalePlural: "أَكَلْنَ",
      maleI: "أَكَلْتُ",
      femaleI: "أَكَلْتُ",
      we: "أَكَلْنَا",
    },
  },
  {
    infinitive: "شَرِبَ",
    meaning: "drank",
    past: {
      maleHe: "شَرِبَ",
      femaleShe: "شَرِبَتْ",
      maleYou: "شَرِبْتَ",
      femaleYou: "شَرِبْتِ",
      maleDual: "شَرِبَا",
      femaleDual: "شَرِبَتَا",
      yourDualMale: "شَرِبْتُمَا",
      malePlural: "شَرِبُوا",
      femalePlural: "شَرِبْنَ",
      maleI: "شَرِبْتُ",
      femaleI: "شَرِبْتُ",
      we: "شَرِبْنَا",
    },
  },
  {
    infinitive: "كَتَبَ",
    meaning: "wrote",
    past: {
      maleHe: "كَتَبَ",
      femaleShe: "كَتَبَتْ",
      maleYou: "كَتَبْتَ",
      femaleYou: "كَتَبْتِ",
      maleDual: "كَتَبَا",
      femaleDual: "كَتَبَتَا",
      yourDualMale: "كَتَبْتُمَا",
      malePlural: "كَتَبُوا",
      femalePlural: "كَتَبْنَ",
      maleI: "كَتَبْتُ",
      femaleI: "كَتَبْتُ",
      we: "كَتَبْنَا",
    },
  },
  {
    infinitive: "دَرَسَ",
    meaning: "studied",
    past: {
      maleHe: "دَرَسَ",
      femaleShe: "دَرَسَتْ",
      maleYou: "دَرَسْتَ",
      femaleYou: "دَرَسْتِ",
      maleDual: "دَرَسَا",
      femaleDual: "دَرَسَتَا",
      yourDualMale: "دَرَسْتُمَا",
      malePlural: "دَرَسُوا",
      femalePlural: "دَرَسْنَ",
      maleI: "دَرَسْتُ",
      femaleI: "دَرَسْتُ",
      we: "دَرَسْنَا",
    },
  },
  {
    infinitive: "عَمِلَ",
    meaning: "worked",
    past: {
      maleHe: "عَمِلَ",
      femaleShe: "عَمِلَتْ",
      maleYou: "عَمِلْتَ",
      femaleYou: "عَمِلْتِ",
      maleDual: "عَمِلَا",
      femaleDual: "عَمِلَتَا",
      yourDualMale: "عَمِلْتُمَا",
      malePlural: "عَمِلُوا",
      femalePlural: "عَمِلْنَ",
      maleI: "عَمِلْتُ",
      femaleI: "عَمِلْتُ",
      we: "عَمِلْنَا",
    },
  },
];

const renderVerbWithSuffix = (verb: string) => {
  const root = verb.substring(0, 3);
  const suffix = verb.substring(3);

  return (
    <span>
      <span className="text-gray-700">{root}</span>
      {suffix && (
        <span className="font-bold bg-yellow-100 px-1 rounded">{suffix}</span>
      )}
    </span>
  );
};

const tableRows = [
  {
    category: "3rd Person Masc",
    type: "male",
    cells: [
      { pronoun: "هُو", english: "He", key: "maleHe" },
      { pronoun: "هُما", english: "They (2M)", key: "maleDual" },
      { pronoun: "هُم", english: "They (3+M)", key: "malePlural" },
    ],
  },
  {
    category: "3rd Person Fem",
    type: "female",
    cells: [
      { pronoun: "هِي", english: "She", key: "femaleShe" },
      { pronoun: "هُما", english: "They (2F)", key: "femaleDual" },
      { pronoun: "هُنّ", english: "They (3+F)", key: "femalePlural" },
    ],
  },
  {
    category: "2nd Person Masc",
    type: "male",
    cells: [
      { pronoun: "أَنْتَ", english: "You (M)", key: "maleYou" },
      { pronoun: "أَنْتُما", english: "You Two (M)", key: "yourDualMale" },
      { pronoun: "أَنْتُم", english: "You (3+M)", key: "malePlural" }, // Note: currently using malePlural as placeholder
    ],
  },
  {
    category: "2nd Person Fem",
    type: "female",
    cells: [
      { pronoun: "أَنْتِ", english: "You (F)", key: "femaleYou" },
      { pronoun: "أَنْتُما", english: "You Two (F)", key: "yourDualMale" },
      { pronoun: "أَنْتُنّ", english: "You (3+F)", key: "femalePlural" }, // Note: currently using femalePlural as placeholder
    ],
  },
  {
    category: "1st Person",
    type: "both",
    cells: [
      { pronoun: "أَنَا", english: "I", key: "maleI" },
      { pronoun: "نَحْنُ", english: "We (2)", key: "we" },
      { pronoun: "نَحْنُ", english: "We (3+)", key: "we" },
    ],
  },
];

export default function PastVerbPage() {
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

  return (
    <Header
      header="Arabic Verbs - Past Tense"
      explanation="Select a verb to see its conjugations for different genders and numbers"
      Icon={Pen}
    >
      <div className="mt-12 max-w-6xl">
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

            <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100 shadow-sm flex items-center gap-6">
              <div>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                  Infinitive
                </p>
                <p className="text-2xl font-bold font-arabic">
                  {selectedVerb.infinitive}
                </p>
              </div>
              <div className="h-10 w-px bg-blue-200" />
              <div>
                <p className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-1">
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
                          className={`text-2xl font-bold ${getVerbColor(row.type)} transition-transform hover:scale-110 duration-200`}
                          dir="rtl"
                        >
                          {renderVerbWithSuffix(
                            selectedVerb.past[
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
    </Header>
  );
}
