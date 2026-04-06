import { quranClient } from "./quranClient";

export interface Surah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
}

export interface SearchMatch {
  number: number;
  text: string;
  numberInSurah: number;
  surah: {
    number: number;
    name: string;
    englishName: string;
  };
}

export interface Ayah {
  number: number;
  text: string;
  numberInSurah: number;
  audio?: string;
  juz: number;
  manzil: number;
  page: number;
  ruku: number;
  hizbQuarter: number;
  sajda: boolean | object;
}

export interface SurahData {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  revelationType: string;
  numberOfAyahs: number;
  ayahs: Ayah[];
}

export const quranApi = {
  fetchSurahs: async (): Promise<Surah[]> => {
    const { data } = await quranClient.get("/surah");
    return data.data;
  },

  searchQuran: async (query: string, edition: string): Promise<SearchMatch[] | null> => {
    if (!query) return null;
    const { data } = await quranClient.get(`/search/${query}/all/${edition}`);
    return data.data.matches;
  },

  fetchSurahMeta: async (id: string): Promise<SurahData> => {
    const { data } = await quranClient.get(`/surah/${id}`);
    return data.data;
  },

  fetchAyahsPage: async (id: string, edition: string, offset: number, limit: number) => {
    const [arabicRes, translationRes] = await Promise.all([
      quranClient.get(`/surah/${id}/ar.alafasy`, { params: { offset, limit } }),
      quranClient.get(`/surah/${id}/${edition}`, { params: { offset, limit } }),
    ]);

    return {
      arabicAyahs: arabicRes.data.data.ayahs as Ayah[],
      translationAyahs: translationRes.data.data.ayahs as Ayah[],
    };
  },

  fetchQuranMetaAll: async () => {
    const { data } = await quranClient.get("/meta");
    return data.data;
  },
};
