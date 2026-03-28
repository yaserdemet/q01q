import React from "react";

type FailsType = {
  id: number;
  root: string;
  meaning: string;
  ayah: string;
  ayahArabic: React.ReactNode;
  ayahMeaning: string;
};

export const fails: FailsType[] = [
  {
    id: 1,
    root: "كتب",
    meaning: "kâtip (yazan kişi)",
    ayah: "Bakara 282",
    ayahArabic: (
      <>
        وَلْيَكْتُب بَّيْنَكُمْ <span className="text-red-500 font-bold">كَاتِبٌ</span> بِالْعَدْلِ
      </>
    ),
    ayahMeaning: "Aranızda bir kâtip adaletle yazsın.",
  },
  {
    id: 2,
    root: "خرج",
    meaning: "hariç (çıkan) — if'al babından müfail",
    ayah: "En'âm 95",
    ayahArabic: (
      <>
        يُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَ
        <span className="text-red-500 font-bold">مُخْرِجُ</span> الْمَيِّتِ مِنَ الْحَيِّ
      </>
    ),
    ayahMeaning: "O, diriyi ölüden çıkarır, ölüyü de diriden çıkarandır.",
  },
  {
    id: 3,
    root: "حكم",
    meaning: "hâkim (hükmeden kişi)",
    ayah: "Yunus 109",
    ayahArabic: (
      <>
        وَاصْبِرْ حَتَّىٰ يَحْكُمَ اللَّهُ وَهُوَ خَيْرُ{" "}
        <span className="text-red-500 font-bold">الْحَاكِمِينَ</span>
      </>
    ),
    ayahMeaning: "Allah hükmünü verinceye kadar sabret. O, hüküm verenlerin en hayırlısıdır.",
  },
  {
    id: 4,
    root: "ظلم",
    meaning: "zâlim (zulmeden kişi)",
    ayah: "Hucurât 11",
    ayahArabic: (
      <>
        وَمَن لَّمْ يَتُبْ فَأُولَٰئِكَ هُمُ{" "}
        <span className="text-red-500 font-bold">الظَّالِمُونَ</span>
      </>
    ),
    ayahMeaning: "Kim tevbe etmezse işte onlar zalimlerin ta kendileridir.",
  },
  {
    id: 5,
    root: "خسر",
    meaning: "hâsir (hüsrana uğrayan)",
    ayah: "Bakara 27",
    ayahArabic: (
      <>
        أُولَٰئِكَ هُمُ <span className="text-red-500 font-bold">الْخَاسِرُونَ</span>
      </>
    ),
    ayahMeaning: "İşte onlar hüsrana uğrayanların ta kendileridir.",
  },
  {
    id: 6,
    root: "سفر",
    meaning: "sefir (yolcu, elçi)",
    ayah: "Abese 15",
    ayahArabic: (
      <>
        بِأَيْدِي <span className="text-red-500 font-bold">سَفَرَةٍ</span> كِرَامٍ بَرَرَةٍ
      </>
    ),
    ayahMeaning: "Değerli ve itaatkâr elçilerin ellerindedir.",
  },
  {
    id: 7,
    root: "شهد",
    meaning: "şâhit (gören, tanıklık eden)",
    ayah: "Burûc 3",
    ayahArabic: (
      <>
        وَ<span className="text-red-500 font-bold">شَاهِدٍ</span> وَمَشْهُودٍ
      </>
    ),
    ayahMeaning: "Şahitlik edene ve şahitlik edilene andolsun.",
  },
  {
    id: 8,
    root: "ورث",
    meaning: "vâris (miras alan)",
    ayah: "Hicr 23",
    ayahArabic: (
      <>
        وَإِنَّا لَنَحْنُ نُحْيِي وَنُمِيتُ وَنَحْنُ{" "}
        <span className="text-red-500 font-bold">الْوَارِثُونَ</span>
      </>
    ),
    ayahMeaning: "Şüphesiz biz diriltiriz, biz öldürürüz ve asıl vâris biziz.",
  },
  {
    id: 9,
    root: "نظر",
    meaning: "nâzır (bakan, gözeten)",
    ayah: "Kıyâme 23",
    ayahArabic: (
      <>
        إِلَىٰ رَبِّهَا <span className="text-red-500 font-bold">نَاظِرَةٌ</span>
      </>
    ),
    ayahMeaning: "Rablerine bakarlar.",
  },
  {
    id: 10,
    root: "ذكر",
    meaning: "zâkir (zikreden, anan)",
    ayah: "Ahzâb 35",
    ayahArabic: (
      <>
        وَ<span className="text-red-500 font-bold">الذَّاكِرِينَ</span> اللَّهَ كَثِيرًا وَ
        <span className="text-red-500 font-bold">الذَّاكِرَاتِ</span>
      </>
    ),
    ayahMeaning: "Allah'ı çokça zikreden erkekler ve zikreden kadınlar...",
  },
  {
    id: 11,
    root: "ثبت",
    meaning: "sâbit (değişmeyen)",
    ayah: "İbrahim 24",
    ayahArabic: (
      <>
        أَصْلُهَا <span className="text-red-500 font-bold">ثَابِتٌ</span> وَفَرْعُهَا فِي السَّمَاءِ
      </>
    ),
    ayahMeaning: "Kökü sabit, dalları ise göktedir.",
  },
  {
    id: 12,
    root: "عبد",
    meaning: "âbid (kulluk eden)",
    ayah: "Kâfirûn 3",
    ayahArabic: (
      <>
        وَلَا أَنتُمْ <span className="text-red-500 font-bold">عَابِدُونَ</span> مَا أَعْبُدُ
      </>
    ),
    ayahMeaning: "Siz de benim kulluk ettiğime kulluk edecek değilsiniz.",
  },
];
