import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import React from "react";

interface SearchMatch {
  number: number;
  text: string;
  numberInSurah: number;
  surah: {
    number: number;
    name: string;
    englishName: string;
  };
}

interface SearchResultCardProps {
  match: SearchMatch;
  edition: string;
  debouncedSearchQuery: string;
}

const SearchResultCard: React.FC<SearchResultCardProps> = ({ match, edition, debouncedSearchQuery }) => {
  return (
    <Link 
      to={`/quran/${match.surah.number}?edition=${edition}`}
      className="block bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-emerald-300 transition-all shadow-sm group"
    >
      <div className="flex justify-between items-start mb-3 border-b border-gray-100 dark:border-gray-700 pb-3">
        <span className="font-semibold text-emerald-700 dark:text-emerald-400 flex items-center">
          <BookOpen className="w-4 h-4 mr-2" />
          {match.surah.number}. {match.surah.englishName} Suresi
        </span>
        <span className="bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300 px-3 py-1 text-sm rounded-lg font-medium">
          Ayet {match.numberInSurah}
        </span>
      </div>
      <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed" 
           dangerouslySetInnerHTML={{
             __html: match.text.replace(
               new RegExp(debouncedSearchQuery, "gi"),
               (m) => `<span class="bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 px-1 rounded">${m}</span>`
             )
           }}
      />
      <div className="text-right mt-2 text-emerald-500 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all text-sm font-medium">
        Sureye Git &rarr;
      </div>
    </Link>
  );
};

export default React.memo(SearchResultCard);
