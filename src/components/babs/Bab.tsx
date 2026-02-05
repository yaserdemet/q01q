interface BabResult {
  mazi: string;
  muzari: string;
}

interface VerbInput {
  root: string;
  type: number;
}

const Bab = () => {
  const createFormBab = (verb: VerbInput): BabResult | null => {
    if (!verb.root || verb.root.length !== 3) return null;

    const [fa, ayn, lam] = verb.root.split("");

    if (verb.type === 2) {
      return {
        mazi: `${fa}َ${ayn}َّ${lam}َ`,
        muzari: `يُ${fa}َ${ayn}ِّ${lam}ُ`,
      };
    }
    if (verb.type === 3) {
      return {
        mazi: `${fa}َا${ayn}َ${lam}َ`,
        muzari: `يُ${fa}َا${ayn}ِ${lam}ُ`,
      };
    }
    if (verb.type === 4) {
      return {
        mazi: `${fa}َ${ayn}َ${lam}َ`,
        muzari: `يُ${fa}َ${ayn}ِ${lam}ُ`,
      };
    }

    return null;
  };

  const verbData = createFormBab({ root: "كتب", type: 4 });

  if (!verbData) {
    return (
      <div className="p-4 text-slate-500 italic">
        Geçersiz bab veya kök harf formatı.
      </div>
    );
  }

  return (
    <div className="py-6 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-2xl bg-white transition-all hover:shadow-indigo-100/50">
        {/* Header Section */}
        <div className="bg-indigo-600 p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-3xl font-bold tracking-tight">
                Bab Tef'il (2. Bab)
              </h2>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold border border-white/30 uppercase tracking-widest">
                Sülasi Mezid
              </span>
            </div>
            <p className="text-indigo-100/80 font-medium">
              Kök Harfler: ك - ت - ب
            </p>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {/* Mazi Column */}
          <div className="p-10 hover:bg-slate-50/50 transition-all group relative overflow-hidden">
            <div className="absolute top-4 left-4">
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">
                Malum
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Geçmiş Zaman (Mazi)
              </p>
              <div
                className="text-6xl font-arabic text-slate-800 leading-relaxed group-hover:scale-110 transition-transform duration-500 cursor-default"
                dir="rtl"
              >
                {verbData.mazi}
              </div>
            </div>
          </div>

          {/* Muzari Column */}
          <div className="p-10 hover:bg-slate-50/50 transition-all group relative overflow-hidden">
            <div className="absolute top-4 left-4">
              <span className="text-[10px] font-bold text-indigo-200 uppercase tracking-[0.2em]">
                Malum
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <p className="text-sm font-bold text-indigo-400 uppercase tracking-widest">
                Şimdiki Zaman (Muzari)
              </p>
              <div
                className="text-6xl font-arabic text-indigo-600 leading-relaxed group-hover:scale-110 transition-transform duration-500 cursor-default"
                dir="rtl"
              >
                {verbData.muzari}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info Section */}
        <div className="p-8 bg-slate-50/50 border-t border-slate-100">
          <div className="flex gap-5 items-start">
            <div className="h-10 w-10 rounded-2xl bg-indigo-50 flex items-center justify-center flex-shrink-0 border border-indigo-100 shadow-sm">
              <span className="text-indigo-600 font-bold text-lg">💡</span>
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-800 mb-1">
                Bab Özelliği
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
                Tef'il babı genellikle bir fiile <b>geçişlilik (müteaddilik)</b>{" "}
                veya işin
                <b> çokluk (teksir)</b> ifade eden bir anlam katar. Yapısal
                olarak, kök harflerin ortasındaki harf (Aynul-fiil) şeddeli
                okunur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bab;
