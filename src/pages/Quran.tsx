import { useState, Fragment, useEffect } from "react";
import { BookOpen, Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { useDebounce } from "@/hooks/useDebounce";
import { useInView } from "react-intersection-observer";

interface Surah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
}

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

// Fetch all and let useInfiniteQuery handle slices locally
const fetchSurahs = async () => {
  const { data } = await axios.get("https://api.alquran.cloud/v1/surah");
  return data.data as Surah[];
};

const searchQuran = async (query: string, edition: string) => {
  if (!query) return null;
  const { data } = await axios.get(`https://api.alquran.cloud/v1/search/${query}/all/${edition}`);
  return data.data.matches as SearchMatch[];
};

export default function Quran() {
  const [searchQuery, setSearchQuery] = useState("");
  const [edition, setEdition] = useState("tr.diyanet");
  const debouncedSearchQuery = useDebounce(searchQuery, 600);
  const { ref: observerRef, inView } = useInView();
  const { ref: searchObserverRef, inView: searchInView } = useInView();

  // All Surahs Base Data
  const { 
    data: allSurahsData,
    isLoading: isLoadingSurahs,
  } = useQuery({
    queryKey: ["surahsBase"],
    queryFn: fetchSurahs,
    staleTime: Infinity, // Don't refetch since it never changes
  });

  // Local Infinite Scroll for Surahs
  const {
    data: surahPages,
    fetchNextPage: fetchNextSurahPage,
    hasNextPage: hasNextSurahPage,
    status: surahsInfiniteStatus
  } = useInfiniteQuery({
    queryKey: ["surahsInfinite", !!allSurahsData],
    queryFn: ({ pageParam = 0 }) => {
      const limit = 20;
      return allSurahsData?.slice(pageParam, pageParam + limit) || [];
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const totalLoaded = allPages.reduce((acc, page) => acc + page.length, 0);
      if (allSurahsData && totalLoaded < allSurahsData.length) {
        return totalLoaded;
      }
      return undefined;
    },
    enabled: !!allSurahsData,
  });

  // Search API
  const {
    data: searchResults,
    isFetching: isSearching,
    error: searchError,
  } = useQuery({
    queryKey: ["searchQuran", debouncedSearchQuery, edition],
    queryFn: () => searchQuran(debouncedSearchQuery, edition),
    enabled: debouncedSearchQuery.trim().length > 0,
    retry: false,
  });

  // Local Infinite Scroll for Search
  const {
    data: searchPages,
    fetchNextPage: fetchNextSearchPage,
    hasNextPage: hasNextSearchPage,
  } = useInfiniteQuery({
    queryKey: ["searchInfinite", debouncedSearchQuery, edition, !!searchResults],
    queryFn: ({ pageParam = 0 }) => {
      const limit = 15;
      return searchResults?.slice(pageParam, pageParam + limit) || [];
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const totalLoaded = allPages.reduce((acc, page) => acc + page.length, 0);
      if (searchResults && totalLoaded < searchResults.length) {
        return totalLoaded;
      }
      return undefined;
    },
    enabled: !!searchResults && debouncedSearchQuery.trim().length > 0,
  });

  useEffect(() => {
    if (inView && hasNextSurahPage) {
      fetchNextSurahPage();
    }
  }, [inView, hasNextSurahPage, fetchNextSurahPage]);

  useEffect(() => {
    if (searchInView && hasNextSearchPage) {
      fetchNextSearchPage();
    }
  }, [searchInView, hasNextSearchPage, fetchNextSearchPage]);

  const clearSearch = () => {
    setSearchQuery("");
  };

  const isShowingSearch = debouncedSearchQuery.trim().length > 0;

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto min-h-screen">
      <div className="flex items-center space-x-3 mb-8">
        <BookOpen className="w-8 h-8 text-emerald-600" />
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Kuran-ı Kerim Sureleri
        </h1>
      </div>

      <div className="mb-8 relative">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-2">
          <div className="relative w-full md:max-w-2xl">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Kuran'da ara (örn: cennet, namaz)..."
              className="w-full pl-12 pr-12 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm text-gray-800 dark:text-gray-200 text-lg transition-shadow"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-600 transition-colors bg-gray-100 p-1.5 rounded-full"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="w-full md:w-auto">
            <select
              value={edition}
              onChange={(e) => setEdition(e.target.value)}
              className="w-full md:w-auto px-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm text-gray-800 dark:text-gray-200 text-lg transition-shadow cursor-pointer appearance-none"
            >
              <option value="tr.diyanet">TR - Diyanet İşleri</option>
              <option value="en.asad">EN - Muhammad Asad</option>
            </select>
          </div>
        </div>
      </div>

      {!isShowingSearch && (isLoadingSurahs || surahsInfiniteStatus === "pending") && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
        </div>
      )}

      {!isShowingSearch && !isLoadingSurahs && surahPages && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {surahPages.pages.map((page, i) => (
              <Fragment key={i}>
                {page.map((surah) => (
                  <Link
                    to={`/quran/${surah.number}?edition=${edition}`}
                    key={surah.number}
                    className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300 hover:border-emerald-200 dark:hover:border-emerald-800 relative cursor-pointer flex flex-col"
                  >
                    <div className="absolute top-0 right-0 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-bl-lg text-sm font-semibold opacity-80 group-hover:opacity-100 transition-opacity">
                      {surah.revelationType === "Meccan" ? "Mekki" : "Medeni"}
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
                ))}
              </Fragment>
            ))}
          </div>
          
          <div ref={observerRef} className="py-8 flex justify-center">
            {hasNextSurahPage && (
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
            )}
          </div>
        </>
      )}

      {isShowingSearch && isSearching && (
        <div className="flex justify-center flex-col items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mb-4"></div>
          <p className="text-emerald-700 font-medium">Arama yapılıyor, lütfen bekleyin...</p>
        </div>
      )}

      {isShowingSearch && searchError && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-center shadow-sm">
          <p>Arama Hatası: {(searchError as Error).message || "Bir şeyler ters gitti."}</p>
        </div>
      )}

      {isShowingSearch && searchResults && !isSearching && !searchError && searchPages && (
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              <span className="text-emerald-600">"{debouncedSearchQuery}"</span> için sonuçlar ({searchResults.length} ayet)
            </h2>
            <button 
              onClick={clearSearch}
              className="flex items-center space-x-2 text-gray-500 hover:text-emerald-600 transition-colors bg-gray-100 hover:bg-emerald-50 px-4 py-2 rounded-lg"
            >
              <X className="w-4 h-4" />
              <span>Aramayı Temizle</span>
            </button>
          </div>
          
          {searchResults.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-300">
              <p className="text-gray-500 text-lg">Arama sonucunda hiçbir ayet bulunamadı.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {searchPages.pages.map((page, i) => (
                <Fragment key={i}>
                  {page.map((match, j) => (
                    <Link 
                      to={`/quran/${match.surah.number}?edition=${edition}`}
                      key={`${match.number}-${i}-${j}`}
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
                  ))}
                </Fragment>
              ))}
              
              <div ref={searchObserverRef} className="py-8 flex justify-center">
                {hasNextSearchPage && (
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
