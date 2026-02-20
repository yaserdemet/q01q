import { verbs } from "../verbs/data";
import { createFormBab, data } from "./data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const Bab = () => {
  const [selectedVerbIndex, setSelectedVerbIndex] = useState(0);
  const selectedVerb = verbs[selectedVerbIndex];
  return (
    <div className="py-6  space-y-6 animate-in fade-in slide-in-from-left-12 duration-1000 ease-in-out">
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
      {/* Babs Table Section */}
      <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-xl bg-white transition-all">
        <div className="bg-slate-800 p-6 text-white">
          <h3 className="text-xl font-bold">Bab Karşılaştırma Tablosu</h3>
          <p className="text-slate-400 text-sm mt-1">
            Sülasi Mezid Fiil Kalıpları
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-widest border-b border-slate-100">
                <th className="px-6 py-4 text-left">Bab Adı</th>
                <th className="px-6 py-4">Mazi (Past)</th>
                <th className="px-6 py-4">Müzari (Present)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {data.map((bab) => {
                const babResult = createFormBab({
                  root: selectedVerb.infinitive,
                  type: bab.type,
                });
                if (!babResult) return null;
                return (
                  <tr
                    key={bab.type}
                    className="hover:bg-indigo-50/30 transition-colors group"
                  >
                    <td className="px-6 py-4 text-left">
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-700">
                          {bab.name}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          TYPE {bab.type}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div
                        className="text-3xl font-arabic text-slate-800 group-hover:text-indigo-600 transition-colors"
                        dir="rtl"
                      >
                        {babResult.mazi}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div
                        className="text-3xl font-arabic text-slate-800 group-hover:text-indigo-600 transition-colors"
                        dir="rtl"
                      >
                        {babResult.muzari}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bab;
