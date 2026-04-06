import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  CheckCircle2Icon,
  ChevronRight,
  ChevronDown,
  FileText,
  FolderTree,
  FolderOpen,
  Folder,
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { items } from "./dataSentences";

const SentencesType = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  const [isNounOpen, setIsNounOpen] = useState(activeTab === "noun");
  const [nounType, setNounType] = useState<"normal" | "inneli">("normal");

  const [prevActiveTab, setPrevActiveTab] = useState(activeTab);
  if (activeTab !== prevActiveTab) {
    setPrevActiveTab(activeTab);
    if (activeTab === "noun") {
      setIsNounOpen(true);
    }
  }

  return (
    <div className="animate-in fade-in slide-in-from-left-12 duration-1000 ease-in-out flex mt-8 flex-col md:flex-row gap-8 w-full max-w-5xl items-start pb-10">
      {/* Tree View Navbar */}
      <div className="w-full md:w-64 border rounded-xl overflow-hidden shadow-sm bg-card/50 shrink-0">
        <div className="bg-muted px-4 py-3 flex items-center gap-2 border-b">
          <FolderTree className="h-5 w-5 text-muted-foreground" />
          <span className="font-semibold text-sm">Cümle Tipleri</span>
        </div>

        <div className="p-2 space-y-1">
          {/* Fiil Node */}
          <button
            onClick={() => setActiveTab("fiil")}
            className={`flex items-center w-full px-2 py-2 text-sm rounded-md transition-all ${
              activeTab === "fiil"
                ? "bg-primary text-primary-foreground font-medium shadow-sm"
                : "hover:bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            <FileText
              className={`w-4 h-4 mr-2 ${activeTab === "fiil" ? "text-primary-foreground" : "text-muted-foreground"}`}
            />
            Fiil Cümlesi
          </button>

          {/* İsim Node (Collapsible) */}
          <Collapsible open={isNounOpen} onOpenChange={setIsNounOpen}>
            <CollapsibleTrigger asChild>
              <button
                onClick={() => {
                  if (!isNounOpen) setIsNounOpen(true);
                  setActiveTab("noun");
                }}
                className={`flex items-center w-full px-2 py-2 text-sm rounded-md transition-all ${
                  activeTab === "noun" && !isNounOpen
                    ? "bg-primary text-primary-foreground font-medium shadow-sm"
                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {isNounOpen ? (
                  <ChevronDown className="w-4 h-4 mr-1 opacity-70" />
                ) : (
                  <ChevronRight className="w-4 h-4 mr-1 opacity-70" />
                )}
                {isNounOpen ? (
                  <FolderOpen className="w-4 h-4 mr-2 text-blue-500" />
                ) : (
                  <Folder className="w-4 h-4 mr-2 text-blue-500" />
                )}
                İsim Cümlesi
              </button>
            </CollapsibleTrigger>

            <CollapsibleContent className="pl-6 pt-1 pb-1 animate-in slide-in-from-top-1">
              <div className="border-l-2 border-muted pl-2 space-y-1">
                {/* Normal Noun */}
                <button
                  onClick={() => {
                    setActiveTab("noun");
                    setNounType("normal");
                  }}
                  className={`flex items-center w-full px-2 py-1.5 text-sm rounded-md transition-all ${
                    activeTab === "noun" && nounType === "normal"
                      ? "bg-accent text-accent-foreground font-medium"
                      : "hover:bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <FileText className="w-4 h-4 mr-2 opacity-50" />
                  Normal İsim Cümlesi
                </button>
                {/* İnneli Noun */}
                <button
                  onClick={() => {
                    setActiveTab("noun");
                    setNounType("inneli");
                  }}
                  className={`flex items-center w-full px-2 py-1.5 text-sm rounded-md transition-all ${
                    activeTab === "noun" && nounType === "inneli"
                      ? "bg-accent text-accent-foreground font-medium"
                      : "hover:bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <FileText className="w-4 h-4 mr-2 opacity-50" />
                  İnneli İsim Cümlesi
                </button>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 w-full space-y-6">
        <Alert className="bg-card">
          <CheckCircle2Icon className="h-4 w-4" />
          <AlertTitle>
            {activeTab === "noun"
              ? nounType === "normal"
                ? "Normal İsim Cümlesi"
                : "İnneli İsim Cümlesi"
              : "Fiil Cümlesi"}
          </AlertTitle>
          <AlertDescription>
            {activeTab === "noun"
              ? nounType === "normal"
                ? "İsim cümlesi 2 ana öğeden oluşur. Bunlar müpteda ve haber'dir. İsim cümlelerinde anlam _dır _dir diye verilir."
                : "İnne ve benzerleri isim cümlesinin başına gelerek anlamı pekiştirirler. Müptedayı nasb (fetha) yaparken haberi (damme) bırakırlar."
              : "Fiil cümlesi 3 ana öğeden oluşur. Bunlar fiil, fail ve meful'dur. Arapçada fiiller şahıslara göre çekildiği için fail açıkça belirtilmeyebilir. Yani bu durumda fail fiilin içindedir."}
          </AlertDescription>
        </Alert>

        <Accordion
          type="multiple"
          className="rounded-lg border bg-card w-full"
          defaultValue={["fiil", "müpteda", "inne"]}
        >
          {items(activeTab, nounType).map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="border-b px-4 last:border-b-0"
            >
              <AccordionTrigger className="hover:no-underline hover:bg-accent/50 rounded-md px-2 -mx-2 transition-colors">
                {item.trigger}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground px-2">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default SentencesType;
