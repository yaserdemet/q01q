import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

interface FormSet {
  singular: string;
  dual: string;
  plural: string;
  dualNasb?: string;
  pluralNasb?: string;
}

const NounTable = ({
  title,
  subtitle,
  genderIcon,
  bgColor,
  textColor,
  forms,
}: {
  title: string;
  subtitle: string;
  genderIcon: string;
  bgColor: string;
  textColor: string;
  forms: FormSet;
}) => (
  <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white">
    <div className={`${bgColor} p-4 border-b border-slate-100 flex items-center justify-between`}>
      <h2 className={`${textColor} font-semibold text-lg flex items-center gap-2`}>
        <span className="opacity-50 text-base">{genderIcon}</span>
        {title}
      </h2>
      <span className={`${textColor} opacity-60 text-xs font-medium uppercase tracking-wider`}>
        {subtitle}
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
          <TableHead className="py-4 font-medium text-center text-slate-500">Çoğul (Cem)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="text-center py-10">
            <div className="flex flex-col items-center gap-1">
              <span className="text-4xl font-semibold text-slate-700 leading-relaxed" dir="rtl">
                {forms.singular}
              </span>
              <span className="text-[10px] text-slate-300 font-medium">Merfu</span>
            </div>
          </TableCell>
          <TableCell className="text-center py-10 border-x border-slate-50">
            <div className="flex flex-col items-center gap-1">
              <div>
                <span
                  className={`text-4xl font-semibold ${textColor.replace("text-", "text-opacity-100 text-")} leading-relaxed`}
                  dir="rtl"
                >
                  {forms.dual.slice(-5)}
                </span>
                <span className={`text-4xl font-semibold leading-relaxed`} dir="rtl">
                  {forms.dual.slice(0, -5)}
                </span>
              </div>

              <span className="text-[10px] text-slate-300 font-medium">
                Nasb/Cer: {forms.dualNasb}
              </span>
            </div>
          </TableCell>
          <TableCell className="text-center py-10">
            <div className="flex flex-col items-center gap-1">
              <div>
                <span
                  className={`text-4xl font-semibold ${textColor.replace("text-", "text-opacity-100 text-")} leading-relaxed`}
                  dir="rtl"
                >
                  {forms.plural.slice(-5)}
                </span>
                <span className={`text-4xl font-semibold leading-relaxed`} dir="rtl">
                  {forms.plural.slice(0, -5)}
                </span>
              </div>
              <span className="text-[10px] text-slate-300 font-medium">
                Nasb/Cer: {forms.pluralNasb}
              </span>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

const PrularNames = () => {
  const [selectedNoun, setSelectedNoun] = useState<NounData>(nouns[0]);
  const [roles, setRoles] = useState("");
  const formsData = {
    subject: {
      // FAIL (merfû‘ / damme)
      masculine: {
        singular: selectedNoun.base,
        dual: selectedNoun.base + "َانِ",
        plural: selectedNoun.base + "ُونَ",
      },
      feminine: {
        singular: selectedNoun.base + "َة",
        dual: selectedNoun.base + "َتَانِ",
        plural: selectedNoun.base + "َاتُ",
      },
    },

    object: {
      // MEF‘ÛL + CÂR–MECRÛR (mansûb / mecrûr)
      masculine: {
        singular: selectedNoun.base,
        dual: selectedNoun.base + "َيْنِ",
        plural: selectedNoun.base + "ِينَ",
      },
      feminine: {
        singular: selectedNoun.base + "َة",
        dual: selectedNoun.base + "َتَيْنِ",
        plural: selectedNoun.base + "َاتِ",
      },
    },
  };

  return (
    <div className="py-6 space-y-6 animate-in fade-in slide-in-from-left-12 duration-1000 ease-in-out">
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
                  <SelectItem key={noun.base} value={noun.base} className="cursor-pointer">
                    <div className="flex items-center justify-between w-full gap-8">
                      <span className="font-bold text-lg text-slate-700" dir="rtl">
                        {noun.base}
                      </span>
                      <span className="text-sm text-slate-400 italic">{noun.meaning}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Tabs onValueChange={(val) => setRoles(val)} defaultValue="fail" className="w-100">
          <TabsList>
            <TabsTrigger className="hover:cursor-pointer" value="fail">
              Fail
            </TabsTrigger>
            <TabsTrigger className="hover:cursor-pointer" value="meful">
              Meful
            </TabsTrigger>
          </TabsList>
          <TabsContent value="fail">Fail Roles</TabsContent>
          <TabsContent value="meful">Meful Roles</TabsContent>
        </Tabs>
      </div>

      <div className="grid gap-6">
        <NounTable
          title="Eril (Müzekker)"
          subtitle="Düzenli Eril Çoğul"
          genderIcon="♂"
          bgColor="bg-blue-100"
          textColor="text-blue-700"
          forms={roles === "fail" ? formsData.subject.masculine : formsData.object.masculine}
        />
        <NounTable
          title="Dişi (Müennes)"
          subtitle="Düzenli Dişi Çoğul"
          genderIcon="♀"
          bgColor="bg-rose-100"
          textColor="text-rose-700"
          forms={roles === "fail" ? formsData.subject.feminine : formsData.object.feminine}
        />
      </div>

      <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
        <h3 className="text-slate-700 font-bold text-sm mb-2 flex items-center gap-2">
          💡 Bilgi Notu
        </h3>
        <p className="text-slate-600 text-xs leading-relaxed">
          <b>Kurallı Çoğullar:</b> Eril isimlerde kelime sonuna <b>"ون"</b>, dişi isimlerde ise{" "}
          <b>"ات"</b> eklenerek yapılır. Arapçada ayrıca <b>"Cem-i Mükesser"</b> (Kırık Çoğullar)
          denilen kuralsız çoğullar da vardır, bu tabloda sadece düzenli çekimler gösterilmektedir.
          İkili (Müsenna) formda ise kelimenin sonuna <b>"ان"</b> eklenir.
        </p>
      </div>
    </div>
  );
};

export default PrularNames;
