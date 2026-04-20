import { useParams, Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, BookOpenText } from "lucide-react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { quranApi } from "@/api/quranApi";
import QuranLoading from "@/components/quran/QuranLoading";

export default function SurahDetail() {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const edition = searchParams.get("edition") || "tr.diyanet";
  const { ref: observerRef, inView } = useInView();

  const { data: metaData, isLoading: isLoadingMeta, error: metaError } = useQuery({
    queryKey: ["surahMeta", id],
    queryFn: () => quranApi.fetchSurahMeta(id!),
    enabled: !!id,
  });

  const { 
    data: pagesData, 
    fetchNextPage, 
    hasNextPage, 
    isFetchingNextPage, 
    status: infiniteStatus 
  } = useInfiniteQuery({
    queryKey: ["surahAyahs", id, edition],
    queryFn: ({ pageParam = 0 }) => quranApi.fetchAyahsPage(id!, edition, pageParam, 20),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const totalLoaded = allPages.reduce((acc, page) => acc + page.arabicAyahs.length, 0);
      if (metaData && totalLoaded < metaData.numberOfAyahs) {
        return totalLoaded;
      }
      return undefined;
    },
    enabled: !!id && !!metaData,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (isLoadingMeta || infiniteStatus === "pending") {
    return (
      <div className="flex justify-center items-center h-screen">
        <QuranLoading />
      </div>
    );
  }

  if (metaError || infiniteStatus === "error" || !metaData) {
    return (
      <div className="p-6 md:p-10 max-w-4xl mx-auto">
        <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-center shadow-sm">
          <p>Hata: Sure bulunamadı veya yüklenemedi.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto min-h-screen">
      <Link 
        to="/quran" 
        className="inline-flex items-center text-emerald-600 hover:text-emerald-800 mb-6 font-medium transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Surelere Dön
      </Link>

      <div className="bg-gradient-to-r from-emerald-800 to-teal-900 rounded-2xl p-8 md:p-10 text-white shadow-lg mb-10 relative overflow-hidden flex flex-col items-center text-center">
        <div className="absolute opacity-10 right-0 top-0 w-64 h-64 -mr-10 -mt-10">
          <BookOpenText className="w-full h-full" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-arabic font-bold mb-4" dir="rtl">
          {metaData.name}
        </h1>
        <div className="text-xl md:text-2xl font-semibold mb-2">
          {metaData.englishName} ({metaData.englishNameTranslation})
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-4 text-emerald-100 text-sm md:text-base">
          <span className="bg-emerald-900/50 px-4 py-1.5 rounded-full backdrop-blur-sm border border-emerald-700/50">
            {metaData.revelationType === "Meccan" ? "Mekke" : "Medine"}
          </span>
          <span className="bg-emerald-900/50 px-4 py-1.5 rounded-full backdrop-blur-sm border border-emerald-700/50">
            {metaData.numberOfAyahs} Ayet
          </span>
        </div>
      </div>

      <div className="space-y-8">
        {pagesData.pages.map((page, pageIndex) => (
          <Fragment key={pageIndex}>
            {page.arabicAyahs.map((ayah, index) => {
              const translationAyah = page.translationAyahs[index];
              
              return (
                <div 
                  key={ayah.numberInSurah}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow relative"
                >
                  <div className="absolute top-6 left-6 flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
                    {ayah.numberInSurah}
                  </div>
                  
                  <div className="ml-12 mb-6">
                    <div 
                      className="text-2xl md:text-3xl lg:text-4xl font-arabic text-gray-800 dark:text-gray-100 leading-loose md:leading-loose lg:leading-loose text-right mb-6"
                      dir="rtl"
                    >
                      {ayah.text}
                    </div>
                    
                    {ayah.audio && (
                      <div className="flex justify-end mb-6">
                        <audio 
                          controls 
                          preload="none" 
                          src={ayah.audio} 
                          className="h-10 w-full max-w-sm rounded-[24px] shadow-sm [&::-webkit-media-controls-panel]:bg-emerald-50 dark:[&::-webkit-media-controls-panel]:bg-emerald-900/30"
                        />
                      </div>
                    )}
                    
                    <div className="w-full h-px bg-gray-100 dark:bg-gray-700 my-4" />
                    
                    <div className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                      {translationAyah?.text}
                    </div>
                  </div>
                </div>
              );
            })}
          </Fragment>
        ))}
      </div>

      <div ref={observerRef} className="py-10 flex justify-center">
        {isFetchingNextPage ? (
          <QuranLoading type="infinite" />
        ) : hasNextPage ? (
          <p className="text-sm text-gray-400">Daha fazla yükleniyor...</p>
        ) : (
          <p className="text-sm text-gray-400">Surenin sonuna ulaştınız.</p>
        )}
      </div>
    </div>
  );
}
