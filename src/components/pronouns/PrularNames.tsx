import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface NounData {
  base: string;
  meaning: string;
}

const nouns: NounData[] = [
  { base: "مُعَلِّم", meaning: "Öğretmen" },
  { base: "طَالِب", meaning: "Öğrenci" },
  { base: "طَبِيب", meaning: "Doktor" },
  { base: "مُهَنْدِس", meaning: "Mühendis" },
  { base: "مُوَظَّف", meaning: "Memur" },
  { base: "مُدِير", meaning: "Müdür" },
  { base: "تَاجِر", meaning: "Tüccar" },
  { base: "مُسْلِم", meaning: "Müslüman" },
];

const PrularNames = () => {
  const [selectedNoun, setSelectedNoun] = useState<NounData>(nouns[0]);

  const generateForms = (base: string) => {
    return {
      masculine: {
        singular: base,
        dual: base + "َانِ",
        plural: base + "ُونَ",
      },
      feminine: {
        singular: base + "َة",
        dual: base + "َتَانِ",
        plural: base + "َات",
      },
    };
  };

  const forms = generateForms(selectedNoun.base);

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6 animate-in fade-in duration-500">
      {/* Header & Selector */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl border border-slate-100 bg-slate-50/50">
        <div className="w-full md:w-80">
          <Select
            onValueChange={(val) => {
              const noun = nouns.find((n) => n.base === val);
              if (noun) setSelectedNoun(noun);
            }}
            defaultValue={nouns[0].base}
          >
            <SelectTrigger className="w-full h-11 bg-white border-slate-200 rounded-xl shadow-sm">
              <SelectValue placeholder="Bir isim seçin" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-slate-200">
              <SelectGroup>
                {nouns.map((noun) => (
                  <SelectItem
                    key={noun.base}
                    value={noun.base}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center justify-between w-full gap-8">
                      <span
                        className="font-bold text-lg text-slate-700"
                        dir="rtl"
                      >
                        {noun.base}
                      </span>
                      <span className="text-sm text-slate-400 italic">
                        {noun.meaning}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6">
        {/* Eril / Masculine Table */}
        <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white">
          <div className="bg-blue-50/50 p-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-blue-700 font-semibold text-lg flex items-center gap-2">
              <span className="opacity-50 text-base">♂</span>
              Eril (Müzekker)
            </h2>
            <span className="text-blue-600/60 text-xs font-medium uppercase tracking-wider">
              Düzenli Eril Çoğul
            </span>
          </div>
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50/30 border-b border-slate-50">
                <TableHead className="py-4 font-medium text-center text-slate-500">
                  Tekil (Müfred)
                </TableHead>
                <TableHead className="py-4 font-medium text-center text-slate-500">
                  İkili (Müsenna)
                </TableHead>
                <TableHead className="py-4 font-medium text-center text-slate-500">
                  Çoğul (Cem-i Müzekker)
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-center py-10">
                  <div className="flex flex-col items-center gap-1">
                    <span
                      className="text-4xl font-semibold text-slate-700 leading-relaxed"
                      dir="rtl"
                    >
                      {forms.masculine.singular}
                    </span>
                    <span className="text-[10px] text-slate-300 font-medium">
                      Merfu
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-center py-10 border-x border-slate-50">
                  <div className="flex flex-col items-center gap-1">
                    <span
                      className="text-4xl font-semibold text-blue-500 leading-relaxed"
                      dir="rtl"
                    >
                      {forms.masculine.dual}
                    </span>
                    <span className="text-[10px] text-slate-300 font-medium">
                      Nasb/Cer: {forms.masculine.singular}َيْنِ
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-center py-10">
                  <div className="flex flex-col items-center gap-1">
                    <span
                      className="text-4xl font-semibold text-indigo-500 leading-relaxed"
                      dir="rtl"
                    >
                      {forms.masculine.plural}
                    </span>
                    <span className="text-[10px] text-slate-300 font-medium">
                      Nasb/Cer: {forms.masculine.singular}ِينَ
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Dişi / Feminine Table */}
        <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white">
          <div className="bg-rose-50/50 p-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-rose-700 font-semibold text-lg flex items-center gap-2">
              <span className="opacity-50 text-base">♀</span>
              Dişi (Müennes)
            </h2>
            <span className="text-rose-600/60 text-xs font-medium uppercase tracking-wider">
              Düzenli Dişi Çoğul
            </span>
          </div>
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50/30 border-b border-slate-50">
                <TableHead className="py-4 font-medium text-center text-slate-500">
                  Tekil (Müfred)
                </TableHead>
                <TableHead className="py-4 font-medium text-center text-slate-500">
                  İkili (Müsenna)
                </TableHead>
                <TableHead className="py-4 font-medium text-center text-slate-500">
                  Çoğul (Cem-i Müennes)
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-center py-10">
                  <div className="flex flex-col items-center gap-1">
                    <span
                      className="text-4xl font-semibold text-slate-700 leading-relaxed"
                      dir="rtl"
                    >
                      {forms.feminine.singular}
                    </span>
                    <span className="text-[10px] text-slate-300 font-medium">
                      Merfu
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-center py-10 border-x border-slate-50">
                  <div className="flex flex-col items-center gap-1">
                    <span
                      className="text-4xl font-semibold text-rose-500 leading-relaxed"
                      dir="rtl"
                    >
                      {forms.feminine.dual}
                    </span>
                    <span className="text-[10px] text-slate-300 font-medium">
                      Nasb/Cer: {selectedNoun.base}َتَيْنِ
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-center py-10">
                  <div className="flex flex-col items-center gap-1">
                    <span
                      className="text-4xl font-semibold text-pink-500 leading-relaxed"
                      dir="rtl"
                    >
                      {forms.feminine.plural}ٌ
                    </span>
                    <span className="text-[10px] text-slate-300 font-medium">
                      Nasb/Cer: {forms.feminine.plural}ٍ
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
        <h3 className="text-slate-700 font-bold text-sm mb-2 flex items-center gap-2">
          💡 Bilgi Notu
        </h3>
        <p className="text-slate-600 text-xs leading-relaxed">
          <b>Kurallı Çoğullar:</b> Eril isimlerde kelime sonuna <b>"ون"</b>,
          dişi isimlerde ise <b>"ات"</b> eklenerek yapılır. Arapçada ayrıca{" "}
          <b>"Cem-i Mükesser"</b> (Kırık Çoğullar) denilen kuralsız çoğullar da
          vardır, bu tabloda sadece düzenli çekimler gösterilmektedir. İkili
          (Müsenna) formda ise kelimenin sonuna <b>"ان"</b> eklenir.
        </p>
      </div>
    </div>
  );
};

export default PrularNames;
