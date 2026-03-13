export   const makeColorfulLastWord = (word: string, color: string) => {
    const lastChar = word.slice(-2);
    const restOfWord = word.slice(0, -2);
    return (
      <span className="font-bold">
        {restOfWord}
        <span className={`font-black text-2xl text-${color}-600`}>
          {lastChar}
        </span>
      </span>
    );
  };

 export const nounSentenceItem = [
    {
      value: "müpteda",
      trigger: (
        <span>
          Müpteda (Özne) - Damme (
          <span className="text-2xl font-bold align-middle">ـُ</span>)
        </span>
      ),
      content: (
        <span>
          İsim cümlesinin öznesidir. Yani fiil cümlesindeki faildir. Genellikle
          merfu'dur. Örnek: {makeColorfulLastWord("الطَّالِبُ", "blue")}
          (Öğrenci)
        </span>
      ),
    },
    {
      value: "haber",
      trigger: (
        <span>
          Haber (Yüklem) - Damme (
          <span className="text-2xl font-bold align-middle">ـُ</span>)
        </span>
      ),
      content: (
        <div>
          <p>İsim cümlesinin haberidir. Anlama _dır _dir ekler.</p>
          <p>
            Örnek: {makeColorfulLastWord("طَوِيلٌ", "amber")}
            (Uzundur)
          </p>
        </div>
      ),
    },
  ];

  const inneliNounSentenceItem = [
    {
      value: "ismu-inne",
      trigger: (
        <span>
          İnne'nin İsmi (Müpteda) - Fetha (
          <span className="text-2xl font-bold align-middle">ـَ</span>)
        </span>
      ),
      content: (
        <div>
          <p> İnne isim cümlesi açar. Müptedayı fetalar.</p>
          <p>
            Örnek:{" "}
            <span className="text-blue-500 font-bold text-2xl"> إِنَّ</span>
            {makeColorfulLastWord("الطَّالِبَ", "blue")} (Şüphesiz öğrenci)
          </p>
        </div>
      ),
    },
    {
      value: "haberu-inne",
      trigger: (
        <span>
          İnne'nin Haberi - Damme (
          <span className="text-2xl font-bold align-middle">ـُ</span>)
        </span>
      ),
      content: (
        <div>
          <p> Haberin harekesi değişmez, yine damme kalır.</p>
          <p>Örnek: {makeColorfulLastWord("طَوِيلٌ", "amber")} (uzundur).</p>
        </div>
      ),
    },
  ];

  const verbSentencesItem = [
    {
      value: "fiil",
      trigger: "Fiil (Eylem)",
      content: (
        <div>
          <p>Cümlede iş, oluş veya hareket bildiren kelimedir.</p>
          <p>
            Örnek: <span className="font-bold text-lg">كَتَبَ</span> (Yazdı)
            <span>
              <span className="font-bold text-2xl">يَشْرَبُ</span> (İçiyor).
            </span>
          </p>
        </div>
      ),
    },
    {
      value: "fail",
      trigger: (
        <span>
          Fail (Özne) - Damme (
          <span className="text-2xl font-bold align-middle">ـُ</span>)
        </span>
      ),
      content: (
        <div>
          <p>
            Fiili gerçekleştiren kişidir. Fail olan ismin sonu genellikle Damme
            (ötre) ile biter.
          </p>
          <p>
            <span className="font-bold">
              Örnek: جَاءَ {makeColorfulLastWord("المعلِّمُ", "emerald")} (Öğretmen geldi).
            </span>
          </p>
        </div>
      ),
    },
    {
      value: "meful",
      trigger: (
        <span>
          Mef'ûl (Nesne) - Fetha (
          <span className="text-2xl font-bold align-middle">ـَ</span>)
        </span>
      ),
      content: (
        <div>
          <p>
            Fiilden etkilenen varlıktır. Mef'ûl olan ismin sonu genellikle Fetha
            (üstün) ile biter.
          </p>
          <p>
            Örnek:
            <span>
              <span className="font-bold text-lg">قَرَأَ الطَّالِبُ</span>
            </span>
            {makeColorfulLastWord("كِتَاباً", "amber")} (Öğrenci bir kitap okudu).
          </p>
        </div>
      ),
    },
    {
      value: "harficer",
      trigger: (
        <span>
          Harf-i Cer & Kesra (
          <span className="text-2xl font-bold align-middle">ـِ</span>)
        </span>
      ),
      content: (
        <div>
          <p>Başına geldiği ismin sonunu Kesra (esre) yapan edatlardır.</p>
          <p>
            Örnek: فِي {makeColorfulLastWord("الْبَيْتِ", "blue")} (Evde). 'fi' harfi cerdir, 'el-beyti' mecrurdur.
          </p>
        </div>
      ),
    },
  ];

export const items = (
    activeTab: string,
    nounType: string
) => {
    return activeTab === "fiil"
        ? verbSentencesItem
        : nounType === "normal"
            ? nounSentenceItem
            : inneliNounSentenceItem;
};
