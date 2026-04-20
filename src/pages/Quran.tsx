import { useState, Fragment, useEffect, useCallback } from "react";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { useDebounce } from "@/hooks/useDebounce";
import { useInView } from "react-intersection-observer";
import { quranApi } from "@/api/quranApi";

// Components
import QuranHeader from "@/components/quran/QuranHeader";
import SurahCard from "@/components/quran/SurahCard";
import SearchResultCard from "@/components/quran/SearchResultCard";
import QuranLoading from "@/components/quran/QuranLoading";
import { X } from "lucide-react";

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
    queryFn: quranApi.fetchSurahs,
    staleTime: Infinity,
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
    queryFn: () => quranApi.searchQuran(debouncedSearchQuery, edition),
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

  const clearSearch = useCallback(() => {
    setSearchQuery("");
  }, []);

  const isShowingSearch = debouncedSearchQuery.trim().length > 0;

  return (
    <div className="p-4 md:p-6 w-full min-h-screen">
      <QuranHeader 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        edition={edition}
        setEdition={setEdition}
        clearSearch={clearSearch}
      />

      {!isShowingSearch && (isLoadingSurahs || surahsInfiniteStatus === "pending") && (
        <QuranLoading type="surahs" />
      )}

      {!isShowingSearch && !isLoadingSurahs && surahPages && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {surahPages.pages.map((page, i) => (
              <Fragment key={i}>
                {page.map((surah) => (
                  <SurahCard key={surah.number} surah={surah} edition={edition} />
                ))}
              </Fragment>
            ))}
          </div>
          
          <div ref={observerRef}>
            {hasNextSurahPage && <QuranLoading type="infinite" />}
          </div>
        </>
      )}

      {isShowingSearch && isSearching && (
        <QuranLoading type="search" />
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
                    <SearchResultCard 
                      key={`${match.number}-${i}-${j}`}
                      match={match}
                      edition={edition}
                      debouncedSearchQuery={debouncedSearchQuery}
                    />
                  ))}
                </Fragment>
              ))}
              
              <div ref={searchObserverRef}>
                {hasNextSearchPage && <QuranLoading type="infinite" />}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
