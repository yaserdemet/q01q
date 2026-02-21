import type { LatLngExpression } from "leaflet";

export const changeColorOfIcon = (type : string) => {
     switch(type){
      case "MEKKE & MEDİNE":
        return "text-red-500";
      case "İSRA & MİRAÇ":
        return "text-blue-500";
      case "HZ. İBRAHİM":
        return "text-green-500";
      case "HZ. MUSA":
        return "text-yellow-500";
      case "DİĞER PEYGAMBERLER":
        return "text-blue-500";
      default:
        return "text-gray-500";
    }
}

  export type BaseEvent = {
    id: number;
    name: string;
    coordinates: LatLngExpression;
    surah?: string;
    ayah?: string;
    category?: "battle" | "prophet" | "miracle" | "journey";
    description?: string;
  };

 export type QuranGroup = {
    type: string;
    events: BaseEvent[];
  };
 export const QURAN_EVENTS: QuranGroup[] = [
    {
      type: "MEKKE & MEDİNE",
      events: [
        {
          id: 1,
          name: "Kâbe’nin İnşası",
          coordinates: [21.4225, 39.8262],
          surah: "Bakara",
          ayah: "2:127",
          category: "prophet",
        },
        {
          id: 2,
          name: "Fil Olayı",
          coordinates: [21.4225, 39.8262],
          surah: "Fil",
          ayah: "105:1-5",
          category: "miracle",
        },
        {
          id: 3,
          name: "İlk Vahiy (Hira Mağarası)",
          coordinates: [21.4583, 39.8579],
          surah: "Alak",
          ayah: "96:1-5",
          category: "miracle",
        },
        {
          id: 4,
          name: "Hicret Başlangıcı (Mekke)",
          coordinates: [21.3891, 39.8579],
          surah: "Tevbe",
          ayah: "9:40",
          category: "journey",
        },
        {
          id: 5,
          name: "Hicret Varış (Medine)",
          coordinates: [24.5247, 39.5692],
          category: "journey",
        },
        {
          id: 6,
          name: "Bedir Savaşı",
          coordinates: [23.7833, 38.7833],
          surah: "Enfal",
          ayah: "8:5-19",
          category: "battle",
        },
        {
          id: 7,
          name: "Uhud Savaşı",
          coordinates: [24.5167, 39.6167],
          surah: "Âl-i İmran",
          ayah: "3:121-180",
          category: "battle",
        },
        {
          id: 8,
          name: "Hendek Savaşı",
          coordinates: [24.4667, 39.6],
          surah: "Ahzab",
          ayah: "33:9-27",
          category: "battle",
        },
        {
          id: 9,
          name: "Hudeybiye Antlaşması",
          coordinates: [21.45, 39.8],
          surah: "Fetih",
          ayah: "48:1",
          category: "journey",
        },
        {
          id: 10,
          name: "Mekke’nin Fethi",
          coordinates: [21.4225, 39.8262],
          surah: "Nasr",
          ayah: "110:1-3",
          category: "battle",
        },
      ],
    },
    {
      type: "İSRA & MİRAÇ",
      events: [
        {
          id: 11,
          name: "İsra Başlangıcı (Mescid-i Haram)",
          coordinates: [21.4225, 39.8262],
          surah: "İsra",
          ayah: "17:1",
          category: "miracle",
        },
        {
          id: 12,
          name: "İsra Varış (Mescid-i Aksa)",
          coordinates: [31.7767, 35.2345],
          surah: "İsra",
          ayah: "17:1",
          category: "miracle",
        },
      ],
    },
    {
      type: "HZ. İBRAHİM",
      events: [
        {
          id: 13,
          name: "Nemrut’un Ateşi",
          coordinates: [37.1674, 38.7955],
          surah: "Enbiya",
          ayah: "21:68-69",
          category: "miracle",
        },
        {
          id: 14,
          name: "İbrahim’in Göçü (Ur → Harran)",
          coordinates: [36.8663, 39.031],
          category: "journey",
        },
        {
          id: 15,
          name: "İbrahim’in Filistin’e Gelişi",
          coordinates: [31.7683, 35.2137],
          category: "journey",
        },
      ],
    },
    {
      type: "HZ. MUSA",
      events: [
        {
          id: 16,
          name: "Tur Dağı’nda Vahiy",
          coordinates: [28.5394, 33.975],
          surah: "Taha",
          ayah: "20:9-14",
          category: "miracle",
        },
        {
          id: 17,
          name: "Firavun’un Sarayı",
          coordinates: [30.0444, 31.2357],
          surah: "Kasas",
          ayah: "28:8",
          category: "prophet",
        },
        {
          id: 18,
          name: "Kızıldeniz’in Yarılması",
          coordinates: [29.9668, 32.5498],
          surah: "Şuara",
          ayah: "26:63",
          category: "miracle",
        },
        {
          id: 19,
          name: "Firavun’un Boğulması",
          coordinates: [29.9668, 32.5498],
          surah: "Yunus",
          ayah: "10:90-92",
          category: "miracle",
        },
        {
          id: 20,
          name: "Tih Çölünde Kırk Yıl",
          coordinates: [29.5, 34.9],
          surah: "Maide",
          ayah: "5:26",
          category: "journey",
        },
      ],
    },
    {
      type: "DİĞER PEYGAMBERLER",
      events: [
        {
          id: 21,
          name: "Nuh’un Gemisi (Cudi)",
          coordinates: [37.4167, 42.3167],
          surah: "Hud",
          ayah: "11:44",
          category: "miracle",
        },
        {
          id: 22,
          name: "Âd Kavmi (Ahkaf)",
          coordinates: [16.95, 52.7],
          surah: "Ahkaf",
          ayah: "46:21",
          category: "prophet",
        },
        {
          id: 23,
          name: "Semud Kavmi (Medain Salih)",
          coordinates: [26.8, 37.9667],
          surah: "Hicr",
          ayah: "15:80-84",
          category: "prophet",
        },
        {
          id: 24,
          name: "Lut Kavmi (Sodom)",
          coordinates: [31.559, 35.4732],
          surah: "Hud",
          ayah: "11:82",
          category: "miracle",
        },
        {
          id: 25,
          name: "Yunus’un Kavmi (Nineveh)",
          coordinates: [36.3456, 43.1575],
          surah: "Yunus",
          ayah: "10:98",
          category: "prophet",
        },
        {
          id: 26,
          name: "Yusuf’un Kuyuya Atılması",
          coordinates: [32.0, 35.5],
          surah: "Yusuf",
          ayah: "12:15",
          category: "prophet",
        },
        {
          id: 27,
          name: "Yusuf’un Zindanı (Mısır)",
          coordinates: [30.0444, 31.2357],
          surah: "Yusuf",
          ayah: "12:33",
          category: "prophet",
        },
        {
          id: 28,
          name: "Yusuf’un Aziz Oluşu",
          coordinates: [30.0444, 31.2357],
          surah: "Yusuf",
          ayah: "12:54",
          category: "prophet",
        },
        {
          id: 29,
          name: "Süleyman ve Sebe Melikesi",
          coordinates: [15.3694, 44.191],
          surah: "Neml",
          ayah: "27:22-44",
          category: "prophet",
        },
        {
          id: 30,
          name: "Süleyman’ın Sarayı (Kudüs)",
          coordinates: [31.7767, 35.2345],
          surah: "Sebe",
          ayah: "34:12",
          category: "prophet",
        },
        {
          id: 31,
          name: "Ashab-ı Kehf",
          coordinates: [31.9433, 35.9306],
          surah: "Kehf",
          ayah: "18:9-26",
          category: "miracle",
        },
        {
          id: 32,
          name: "Ashab-ı Uhdud",
          coordinates: [17.0, 44.0],
          surah: "Buruc",
          ayah: "85:4-8",
          category: "miracle",
        },
        {
          id: 33,
          name: "Bahçe Sahipleri",
          coordinates: [15.5, 44.2],
          surah: "Kalem",
          ayah: "68:17-33",
          category: "miracle",
        },
        {
          id: 34,
          name: "Huneyn Savaşı",
          coordinates: [21.4333, 40.5167],
          surah: "Tevbe",
          ayah: "9:25",
          category: "battle",
        },
        {
          id: 35,
          name: "Tebük Seferi",
          coordinates: [28.3838, 36.555],
          surah: "Tevbe",
          ayah: "9:38",
          category: "journey",
        },
        {
          id: 36,
          name: "Bi’r Maune Olayı",
          coordinates: [24.9, 39.2],
          category: "battle",
        },
        {
          id: 37,
          name: "Raci Olayı",
          coordinates: [23.9, 39.0],
          category: "battle",
        },
        {
          id: 38,
          name: "Beytülmakdis’in İlk Kıblesi",
          coordinates: [31.7767, 35.2345],
          surah: "Bakara",
          ayah: "2:144",
          category: "miracle",
        },
        {
          id: 39,
          name: "Zülkarneyn’in Seddi",
          coordinates: [42.0, 44.0],
          surah: "Kehf",
          ayah: "18:94",
          category: "miracle",
        },
        {
          id: 40,
          name: "Meryem’e Müjde",
          coordinates: [31.7054, 35.2024],
          surah: "Meryem",
          ayah: "19:16-21",
          category: "miracle",
        },
        {
          id: 41,
          name: "İsa’nın Doğumu",
          coordinates: [31.7054, 35.2024],
          surah: "Meryem",
          ayah: "19:22-30",
          category: "miracle",
        },
        {
          id: 42,
          name: "Havarilerin Sofrası",
          coordinates: [31.78, 35.22],
          surah: "Maide",
          ayah: "5:112-115",
          category: "miracle",
        },
        {
          id: 43,
          name: "Sebe Barajının Yıkılışı",
          coordinates: [15.4, 45.3333],
          surah: "Sebe",
          ayah: "34:16",
          category: "miracle",
        },
        {
          id: 44,
          name: "Karun’un Helakı",
          coordinates: [30.0444, 31.2357],
          surah: "Kasas",
          ayah: "28:81",
          category: "miracle",
        },
        {
          id: 45,
          name: "Belam Kıssası (rivayet)",
          coordinates: [32.0, 35.3],
          surah: "Araf",
          ayah: "7:175",
          category: "prophet",
        },
        {
          id: 46,
          name: "Talut ve Calut Savaşı",
          coordinates: [31.7767, 35.2345],
          surah: "Bakara",
          ayah: "2:251",
          category: "battle",
        },
        {
          id: 47,
          name: "Davud’un Calut’u Yenmesi",
          coordinates: [31.7767, 35.2345],
          surah: "Bakara",
          ayah: "2:251",
          category: "battle",
        },
        {
          id: 48,
          name: "İsrailoğullarının Çölde Yolculuğu",
          coordinates: [29.5, 34.9],
          surah: "Bakara",
          ayah: "2:57",
          category: "journey",
        },
        {
          id: 49,
          name: "Musa’ya Kudret Helvası",
          coordinates: [29.5, 34.9],
          surah: "Bakara",
          ayah: "2:57",
          category: "miracle",
        },
        {
          id: 50,
          name: "Bakara (İnek) Olayı",
          coordinates: [31.78, 35.22],
          surah: "Bakara",
          ayah: "2:67-73",
          category: "miracle",
        },
        {
          id: 51,
          name: "Cumartesi Yasağına Uymayanlar",
          coordinates: [31.78, 35.22],
          surah: "Araf",
          ayah: "7:163",
          category: "miracle",
        },
      ],
    },
  ];