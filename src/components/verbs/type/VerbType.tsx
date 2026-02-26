import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Info } from "lucide-react";

const VerbType = () => {
  const ARABIC_VERB_TYPES = [
    {
      type: "salim",
      title: "Fiil-i Sâlim (سالم)",
      description:
        "Kök harflerinde illet harfi (و، ي، ا) bulunmayan düzenli fiillerdir. Çekimleri en standart olan gruptur.",
      examples: [
        {
          root: "كتب",
          past: "كَتَبَ",
          present: "يَكْتُبُ",
          meaning: "yazdı",
        },
        {
          root: "دخل",
          past: "دَخَلَ",
          present: "يَدْخُلُ",
          meaning: "girdi",
        },
        {
          root: "علم",
          past: "عَلِمَ",
          present: "يَعْلَمُ",
          meaning: "bildi",
        },
      ],
    },
    {
      type: "misal",
      title: "Fiil-i Misâl (مثال)",
      description:
        "Birinci kök harfi illet harfi (و veya ي) olan fiillerdir. Muzaride çoğu zaman ilk harf düşebilir.",
      examples: [
        {
          root: "وعد",
          past: "وَعَدَ",
          present: "يَعِدُ",
          meaning: "söz verdi",
        },
        {
          root: "وجد",
          past: "وَجَدَ",
          present: "يَجِدُ",
          meaning: "buldu",
        },
        {
          root: "يسر",
          past: "يَسَرَ",
          present: "يَيْسِرُ",
          meaning: "kolay oldu",
        },
      ],
    },
    {
      type: "ecvef",
      title: "Fiil-i Ecvef (أجوف)",
      description:
        "İkinci kök harfi illet harfi olan fiillerdir. Orta harf çekimlerde değişime uğrar (قال → يقول).",
      examples: [
        {
          root: "قول",
          past: "قَالَ",
          present: "يَقُولُ",
          meaning: "dedi",
        },
        {
          root: "بيع",
          past: "بَاعَ",
          present: "يَبِيعُ",
          meaning: "sattı",
        },
        {
          root: "نوم",
          past: "نَامَ",
          present: "يَنَامُ",
          meaning: "uyudu",
        },
      ],
    },
    {
      type: "nakis",
      title: "Fiil-i Nâkıs (ناقص)",
      description:
        "Üçüncü kök harfi illet harfi olan fiillerdir. Özellikle son harf çekimlerde düşer veya değişir (دعا → يدعو).",
      examples: [
        {
          root: "دعو",
          past: "دَعَا",
          present: "يَدْعُو",
          meaning: "dua etti / çağırdı",
        },
        {
          root: "رمى",
          past: "رَمَى",
          present: "يَرْمِي",
          meaning: "attı",
        },
        {
          root: "سعي",
          past: "سَعَى",
          present: "يَسْعَى",
          meaning: "koştu / çalıştı",
        },
      ],
    },
  ];

  const [selectedType, setSelectedType] = useState(ARABIC_VERB_TYPES[1].type);

  const currentType =
    ARABIC_VERB_TYPES.find((t) => t.type === selectedType) ||
    ARABIC_VERB_TYPES[0];

  return (
    <div className="flex flex-col gap-6 p-4">
      <div className="flex flex-wrap gap-2 mb-4">
        {ARABIC_VERB_TYPES.map((item) => (
          <button
            key={item.type}
            onClick={() => setSelectedType(item.type)}
            className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
              selectedType === item.type
                ? "bg-blue-600 text-white shadow-md transform scale-105"
                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {currentType && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg flex items-start gap-3 mb-2 animate-in fade-in slide-in-from-left-4 duration-500">
          <Info className="text-blue-500 mt-1 flex-shrink-0" size={20} />
          <div>
            <h3 className="font-bold text-blue-900 mb-1">
              {currentType.title}
            </h3>
            <p className="text-blue-800 text-sm leading-relaxed">
              {currentType.description}
            </p>
          </div>
        </div>
      )}

      <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden bg-white">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50/80 border-b">
              <TableHead className="font-bold text-gray-700">
                Kök (Root)
              </TableHead>
              <TableHead className="font-bold text-center text-gray-700">
                Mazi (Past)
              </TableHead>
              <TableHead className="font-bold text-center text-gray-700">
                Müzari (Present)
              </TableHead>
              <TableHead className="font-bold text-right text-gray-700">
                Anlamı (Meaning)
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentType.examples.map((example) => (
              <TableRow
                key={example.root}
                className="hover:bg-blue-50/30 transition-colors group"
              >
                <TableCell className="font-arabic text-3xl py-4">
                  {example.root}
                </TableCell>
                <TableCell className="font-arabic text-3xl text-center py-4 text-blue-700">
                  {example.past}
                </TableCell>
                <TableCell className="font-arabic text-3xl text-center py-4 text-emerald-700">
                  {example.present}
                </TableCell>
                <TableCell className="text-right font-medium text-gray-600 py-4 capitalize">
                  {example.meaning}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default VerbType;
