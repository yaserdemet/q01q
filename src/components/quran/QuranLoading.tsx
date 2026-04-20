import React from "react";

interface QuranLoadingProps {
  type?: "surahs" | "search" | "infinite";
}

const QuranLoading: React.FC<QuranLoadingProps> = ({ type = "surahs" }) => {
  if (type === "search") {
    return (
      <div className="flex justify-center flex-col items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mb-4"></div>
        <p className="text-emerald-700 font-medium">Arama yapılıyor, lütfen bekleyin...</p>
      </div>
    );
  }

  if (type === "infinite") {
    return (
      <div className="py-8 flex justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
    </div>
  );
};

export default React.memo(QuranLoading);
