import { Link } from "react-router-dom";
import { Activity, Book, Disc, Hash, Layers, Layout, List, Map } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Reference {
  surah: number;
  ayah: number;
}

interface SajdaReference extends Reference {
  recommended: boolean;
  obligatory: boolean;
}

interface MetaData {
  ayahs: { count: number };
  surahs: { count: number; references: Reference[] };
  sajdas: { count: number; references: SajdaReference[] };
  rukus: { count: number; references: Reference[] };
  pages: { count: number; references: Reference[] };
  manzils: { count: number; references: Reference[] };
  hizbQuarters: { count: number; references: Reference[] };
  juzs: { count: number; references: Reference[] };
}

const fetchQuranMeta = async () => {
  const { data } = await axios.get("https://api.alquran.cloud/v1/meta");
  return data.data as MetaData;
};

export default function QuranMeta() {
  const {
    data: meta,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["quranMeta"],
    queryFn: fetchQuranMeta,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  if (error || !meta) {
    return (
      <div className="p-6 max-w-4xl mx-auto text-red-600 bg-red-50 rounded-lg shadow-sm border border-red-200 mt-10">
        <p className="font-semibold">Metadata Yüklenemedi: {(error as Error)?.message}</p>
      </div>
    );
  }

  const stats = [
    {
      title: "Toplam Sure",
      count: meta.surahs.count,
      icon: Book,
      color: "text-blue-500",
      bg: "bg-blue-100 dark:bg-blue-900/30",
      border: "border-blue-200 dark:border-blue-800",
    },
    {
      title: "Toplam Ayet",
      count: meta.ayahs.count,
      icon: Hash,
      color: "text-emerald-500",
      bg: "bg-emerald-100 dark:bg-emerald-900/30",
      border: "border-emerald-200 dark:border-emerald-800",
    },
    {
      title: "Cüz",
      count: meta.juzs.count,
      icon: Disc,
      color: "text-amber-500",
      bg: "bg-amber-100 dark:bg-amber-900/30",
      border: "border-amber-200 dark:border-amber-800",
    },
    {
      title: "Sayfa",
      count: meta.pages.count,
      icon: Layout,
      color: "text-purple-500",
      bg: "bg-purple-100 dark:bg-purple-900/30",
      border: "border-purple-200 dark:border-purple-800",
    },
    {
      title: "Secde Ayetleri",
      count: meta.sajdas.count,
      icon: Activity,
      color: "text-red-500",
      bg: "bg-red-100 dark:bg-red-900/30",
      border: "border-red-200 dark:border-red-800",
    },
    {
      title: "Rüku",
      count: meta.rukus.count,
      icon: Layers,
      color: "text-cyan-500",
      bg: "bg-cyan-100 dark:bg-cyan-900/30",
      border: "border-cyan-200 dark:border-cyan-800",
    },
    {
      title: "Hizb Çeyreği",
      count: meta.hizbQuarters.count,
      icon: List,
      color: "text-indigo-500",
      bg: "bg-indigo-100 dark:bg-indigo-900/30",
      border: "border-indigo-200 dark:border-indigo-800",
    },
    {
      title: "Menzil",
      count: meta.manzils.count,
      icon: Map,
      color: "text-pink-500",
      bg: "bg-pink-100 dark:bg-pink-900/30",
      border: "border-pink-200 dark:border-pink-800",
    },
  ];

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto min-h-screen">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            Kuran-ı Kerim İstatistikleri
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Kuran-ı Kerim'in temel istatistikleri ve genel yapısı
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`p-6 rounded-2xl border ${item.border} bg-white dark:bg-gray-800/50 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group`}
            >
              <div
                className={`absolute -right-4 -bottom-4 w-24 h-24 ${item.color} opacity-[0.05] group-hover:scale-110 transition-transform`}
              >
                <Icon className="w-full h-full" />
              </div>
              <div className="flex items-center space-x-4">
                <div className={`p-4 rounded-xl ${item.bg}`}>
                  <Icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                    {item.title}
                  </h3>
                  <div className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                    {item.count.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white dark:bg-gray-800 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl shadow-sm overflow-hidden">
        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 border-b border-emerald-100 dark:border-emerald-900/30">
          <h2 className="text-2xl font-semibold text-emerald-800 dark:text-emerald-400 flex items-center">
            <Activity className="w-6 h-6 mr-3" />
            Tilavet Secdeleri
          </h2>
          <p className="text-emerald-600/80 dark:text-emerald-500 mt-1">
            Kuran-ı Kerim'deki {meta.sajdas.count} secde ayetinin bulunduğu yerler
          </p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {meta.sajdas.references.map((sajda, idx) => (
              <Link
                to={`/quran/${sajda.surah}`}
                key={idx}
                className="flex items-center justify-between p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-700 bg-gray-50 dark:bg-gray-800/80 transition-colors group cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 dark:text-gray-200">
                      Sure {sajda.surah}
                    </div>
                    <div className="text-sm text-gray-500">Ayet {sajda.ayah}</div>
                  </div>
                </div>
                <div className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-md font-medium whitespace-nowrap">
                  {sajda.obligatory ? "Farz" : "Sünnet"} Secde
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
