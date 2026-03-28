import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, CheckCircle2 } from "lucide-react";

interface HighlightedWord {
  prefix?: string;
  base: string;
  suffix: string;
}

interface AdjectiveItem {
  noun: HighlightedWord;
  nounTrans: string;
  meaning: string;
  adjective: HighlightedWord;
  adjTrans: string;
  adjMeaning: string;
  translation: string;
  phraseTrans: string;
}

const adjectivesData: AdjectiveItem[] = [
  {
    noun: { base: "كتاب", suffix: "ٌ" },
    nounTrans: "Kitab",
    meaning: "Book",
    adjective: { base: "جميل", suffix: "ٌ" },
    adjTrans: "Jamil",
    adjMeaning: "Beautiful",
    phraseTrans: "Kitabun Jamilun",
    translation: "A beautiful book",
  },
  {
    noun: { prefix: "ال", base: "بيت", suffix: "ُ" },
    nounTrans: "Al-Bayt",
    meaning: "House",
    adjective: { prefix: "ال", base: "كبير", suffix: "ُ" },
    adjTrans: "Al-Kabir",
    adjMeaning: "Big",
    phraseTrans: "Al-Baytu Al-Kabiru",
    translation: "The big house",
  },
  {
    noun: { base: "بنت", suffix: "ٌ" },
    nounTrans: "Bint",
    meaning: "Girl",
    adjective: { base: "صغيرة", suffix: "ٌ" },
    adjTrans: "Saghirah",
    adjMeaning: "Small",
    phraseTrans: "Bintun Saghiratun",
    translation: "A small girl",
  },
  {
    noun: { prefix: "ال", base: "سيارة", suffix: "ُ" },
    nounTrans: "As-Sayyarah",
    meaning: "Car",
    adjective: { prefix: "ال", base: "جديدة", suffix: "ُ" },
    adjTrans: "Al-Jadidah",
    adjMeaning: "New",
    phraseTrans: "As-Sayyaratu Al-Jadidatu",
    translation: "The new car",
  },
];

const RenderWord = ({ word, className = "" }: { word: HighlightedWord; className?: string }) => {
  const isTenvin = /[ًٌٍ]/.test(word.suffix);
  const suffixColor = isTenvin
    ? "text-amber-500 dark:text-amber-400"
    : "text-rose-500 dark:text-rose-400";

  return (
    <span className={`font-arabic ${className}`} dir="rtl">
      {word.prefix && <span className="text-sky-500 dark:text-sky-400">{word.prefix}</span>}
      <span>{word.base}</span>
      <span className={suffixColor}>{word.suffix}</span>
    </span>
  );
};

const Adjectives = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Alert className="max-w-5xl border-blue-200 bg-blue-50 dark:bg-blue-900/10 shadow-sm">
        <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        <div className="col-start-2">
          <AlertTitle className="text-blue-900 dark:text-blue-400 font-bold">
            Arabic Adjective (Sıfat / Na‘t)
          </AlertTitle>
          <AlertDescription className="text-blue-800 dark:text-blue-300 leading-relaxed mt-2">
            In Arabic, the adjective (Sıfat) always follows the noun (Mevsuf) it describes. This
            relationship is shown through matching markers:
            <ul className="mt-2 space-y-2 list-none">
              <li>
                <span className="text-sky-600 dark:text-sky-400 font-bold">
                  ● Definite (Marife):
                </span>{" "}
                Starts with <strong>"AL" (ال)</strong> and ends with a single vowel.
              </li>
              <li>
                <span className="text-amber-600 dark:text-amber-400 font-bold">
                  ● Indefinite (Nekre):
                </span>{" "}
                Ends with <strong>Tenvin (ٌ)</strong> (Double vowels like 'un').
              </li>
              <li>
                <span className="text-rose-600 dark:text-rose-400 font-bold">● Case (I'rab):</span>{" "}
                Ending vowels must match (e.g., both Nominative).
              </li>
            </ul>
          </AlertDescription>
        </div>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl">
        {[
          { title: "Gender", desc: "Masculine or Feminine matching" },
          { title: "Number", desc: "Singular, Dual, or Plural matching" },
          { title: "Definiteness", desc: "Both definite or both indefinite" },
          { title: "Case (I'rab)", desc: "Matching ending vowels (u, a, i)" },
        ].map((rule, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl border bg-card/50 hover:bg-card transition-colors shadow-sm"
          >
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <h3 className="font-bold text-sm">{rule.title}</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{rule.desc}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden max-w-5xl">
        <Table>
          <TableCaption>Common Examples of Noun-Adjective Phrases</TableCaption>
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead className="w-50 text-center font-bold">Phrase (Arabic)</TableHead>
              <TableHead className="text-center font-bold">Noun</TableHead>
              <TableHead className="text-center font-bold">Adjective</TableHead>
              <TableHead className="text-right font-bold w-62.5">Translation</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {adjectivesData.map((item, index) => (
              <TableRow key={index} className="hover:bg-muted/30 transition-colors">
                <TableCell className="text-center">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-2 text-3xl font-bold mb-1" dir="rtl">
                      <RenderWord word={item.noun} />
                      <RenderWord word={item.adjective} />
                    </div>
                    <span className="text-xs text-muted-foreground italic">{item.phraseTrans}</span>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex flex-col items-center">
                    <RenderWord word={item.noun} className="text-xl font-medium mb-0.5" />
                    <span className="text-xs text-muted-foreground">
                      {item.meaning} ({item.nounTrans})
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex flex-col items-center">
                    <RenderWord
                      word={item.adjective}
                      className="text-xl font-medium mb-0.5 text-blue-600 dark:text-blue-400"
                    />
                    <span className="text-xs text-muted-foreground">
                      {item.adjMeaning} ({item.adjTrans})
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-right font-medium pr-6 capitalize italic">
                  {item.translation}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Adjectives;
