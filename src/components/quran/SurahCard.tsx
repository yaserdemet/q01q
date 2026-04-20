import { Link } from "react-router-dom";
import React from "react";

interface SurahProps {
  surah: {
    number: number;
    name: string;
    englishName: string;
    englishNameTranslation: string;
    numberOfAyahs: number;
    revelationType: string;
  };
  edition: string;
}

const SurahCard: React.FC<SurahProps> = ({ surah, edition }) => {
  return (
    <Link
      to={`/quran/${surah.number}?edition=${edition}`}
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300 hover:border-emerald-200 dark:hover:border-emerald-800 relative cursor-pointer flex flex-col"
    >
      <div className="absolute top-0 right-0 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-bl-lg text-sm font-semibold opacity-80 group-hover:opacity-100 transition-opacity">
        {surah.revelationType === "Meccan" ? "Mekke" : "Medine"}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 font-bold text-lg hexagon-shape relative">
            {surah.number}
          </div>
          <h2 className="text-2xl font-arabic text-emerald-800 dark:text-emerald-400 font-bold" dir="rtl">
            {surah.name}
          </h2>
        </div>
        <div className="mt-auto">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 leading-tight">
            {surah.englishName}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {surah.englishNameTranslation}
          </p>
        </div>
      </div>
      <div className="border-t border-gray-100 dark:border-gray-700 p-3 bg-gray-50 dark:bg-gray-800/50 flex justify-between items-center text-sm text-gray-600 dark:text-gray-300 font-medium">
        <span>{surah.numberOfAyahs} Ayet</span>
        <span className="text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform">
          &rarr;
        </span>
      </div>
    </Link>
  );
};

export default React.memo(SurahCard);
