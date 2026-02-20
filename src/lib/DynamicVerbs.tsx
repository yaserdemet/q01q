import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { verbs } from "@/components/verbs/data";

interface DynamicVerbsProps {
  tense: "past" | "present";
  renderVerb: (verb: string) => React.ReactNode;
  selectedVerbIndex: number;
  onVerbChange: (index: number) => void;
}

const DynamicVerbs = ({
  renderVerb,
  selectedVerbIndex,
  onVerbChange,
}: DynamicVerbsProps) => {
  const selectedVerb = verbs[selectedVerbIndex];

  return (
    <>
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
          <div className="max-w-xs">
            <label className="text-sm font-semibold mb-2 block text-slate-700">
              Choose a verb:
            </label>
            <Select
              value={selectedVerbIndex.toString()}
              onValueChange={(value) => onVerbChange(parseInt(value))}
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

          <div className="flex-1 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-center border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="py-2 px-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider border-r border-slate-200">
                    Form
                  </th>
                  <th className="py-2 px-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    Conjugation
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-2 px-4 text-xs font-semibold text-slate-500 border-r border-slate-200 bg-slate-50/30">
                    Mazi
                  </td>
                  <td className="py-2 px-4">
                    {renderVerb(selectedVerb.past.maleHe)}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-xs font-semibold text-slate-500 border-r border-slate-200 bg-slate-50/30">
                    Müzari
                  </td>
                  <td className="py-2 px-4">
                    {renderVerb(selectedVerb.present.maleHe)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicVerbs;
