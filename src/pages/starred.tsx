"use client";

import { useState } from "react";
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

export default function StarredPage() {
  const [selectedVerbIndex, setSelectedVerbIndex] = useState(0);
  const selectedVerb = verbs[selectedVerbIndex];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Arabic Verbs - Past Tense</h1>
        <p className="text-gray-600 mb-6">
          Select a verb to see its conjugations for different genders and
          numbers
        </p>

        <div className="mb-6 max-w-xs">
          <label className="text-sm font-medium mb-2 block">
            Choose a verb:
          </label>
          <Select
            value={selectedVerbIndex.toString()}
            onValueChange={(value) => setSelectedVerbIndex(parseInt(value))}
          >
            <SelectTrigger>
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

        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-lg font-semibold">
            Infinitive:{" "}
            <span className="text-blue-600">{selectedVerb.infinitive}</span>
          </p>
          <p className="text-gray-700">
            Meaning: <span className="font-medium">{selectedVerb.meaning}</span>
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-linear-to-r from-blue-100 to-purple-100">
              <TableHead className="font-bold text-right text-sm">
                Singular
              </TableHead>
              <TableHead className="font-bold text-right text-sm">
                Dual
              </TableHead>
              <TableHead className="font-bold text-right text-sm">
                Plural
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Row 1: هو - هما (m) - هم */}
            <TableRow className="hover:bg-blue-50">
              <TableCell className="text-center">
                <div className="font-bold text-lg mb-1">هُو</div>
                <div className="text-xs text-gray-600">He</div>
                <div className="text-base font-semibold text-blue-600 mt-2">
                  {renderVerbWithSuffix(selectedVerb.past.maleHe)}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="font-bold text-lg mb-1">هُما</div>
                <div className="text-xs text-gray-600">They (2M)</div>
                <div className="text-base font-semibold text-green-600 mt-2">
                  {renderVerbWithSuffix(selectedVerb.past.maleDual)}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="font-bold text-lg mb-1">هُم</div>
                <div className="text-xs text-gray-600">They (3+M)</div>
                <div className="text-base font-semibold text-red-600 mt-2">
                  {renderVerbWithSuffix(selectedVerb.past.malePlural)}
                </div>
              </TableCell>
            </TableRow>

            {/* Row 2: هي - هما (f) - هن */}
            <TableRow className="bg-pink-50 hover:bg-pink-100">
              <TableCell className="text-center">
                <div className="font-bold text-lg mb-1">هِي</div>
                <div className="text-xs text-gray-600">She</div>
                <div className="text-base font-semibold text-blue-600 mt-2">
                  {renderVerbWithSuffix(selectedVerb.past.femaleShe)}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="font-bold text-lg mb-1">هُما</div>
                <div className="text-xs text-gray-600">They (2F)</div>
                <div className="text-base font-semibold text-green-600 mt-2">
                  {renderVerbWithSuffix(selectedVerb.past.femaleDual)}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="font-bold text-lg mb-1">هُنّ</div>
                <div className="text-xs text-gray-600">They (3+F)</div>
                <div className="text-base font-semibold text-red-600 mt-2">
                  {renderVerbWithSuffix(selectedVerb.past.femalePlural)}
                </div>
              </TableCell>
            </TableRow>

            {/* Row 3: أنت (m) - أنتما - أنتم */}
            <TableRow className=":bg-amber-50">
              <TableCell className="text-center">
                <div className="font-bold text-lg mb-1">أَنْتَ</div>
                <div className="text-xs text-gray-600">You (M)</div>
                <div className="text-base font-semibold text-blue-600 mt-2">
                  {renderVerbWithSuffix(selectedVerb.past.maleYou)}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="font-bold text-lg mb-1">أَنْتُما</div>
                <div className="text-xs text-gray-600">You Two (M)</div>
                <div className="text-base font-semibold text-green-600 mt-2">
                  {renderVerbWithSuffix(selectedVerb.past.yourDualMale)}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="font-bold text-lg mb-1">أَنْتُم</div>
                <div className="text-xs text-gray-600">You (3+M)</div>
                <div className="text-base font-semibold text-red-600 mt-2">
                  {renderVerbWithSuffix(selectedVerb.past.malePlural)}
                </div>
              </TableCell>
            </TableRow>

            {/* Row 4: أنتِ (f) - أنتما - أنتن */}
            <TableRow className="bg-orange-50 hover:bg-orange-100">
              <TableCell className="text-center">
                <div className="font-bold text-lg mb-1">أَنْتِ</div>
                <div className="text-xs text-gray-600">You (F)</div>
                <div className="text-base font-semibold text-blue-600 mt-2">
                  {renderVerbWithSuffix(selectedVerb.past.femaleYou)}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="font-bold text-lg mb-1">أَنْتُما</div>
                <div className="text-xs text-gray-600">You Two (F)</div>
                <div className="text-base font-semibold text-green-600 mt-2">
                  {renderVerbWithSuffix(selectedVerb.past.yourDualMale)}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="font-bold text-lg mb-1">أَنْتُنّ</div>
                <div className="text-xs text-gray-600">You (3+F)</div>
                <div className="text-base font-semibold text-red-600 mt-2">
                  {renderVerbWithSuffix(selectedVerb.past.femalePlural)}
                </div>
              </TableCell>
            </TableRow>

            {/* Row 5: أنا - نحن - نحن */}
            <TableRow className="bg-green-50 hover:bg-green-100">
              <TableCell className="text-center">
                <div className="font-bold text-lg mb-1">أَنَا</div>
                <div className="text-xs text-gray-600">I</div>
                <div className="text-base font-semibold text-blue-600 mt-2">
                  {renderVerbWithSuffix(selectedVerb.past.maleI)}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="font-bold text-lg mb-1">نَحْنُ</div>
                <div className="text-xs text-gray-600">We (2)</div>
                <div className="text-base font-semibold text-green-600 mt-2">
                  {renderVerbWithSuffix(selectedVerb.past.we)}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="font-bold text-lg mb-1">نَحْنُ</div>
                <div className="text-xs text-gray-600">We (3+)</div>
                <div className="text-base font-semibold text-red-600 mt-2">
                  {renderVerbWithSuffix(selectedVerb.past.we)}
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
