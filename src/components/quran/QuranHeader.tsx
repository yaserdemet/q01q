import { BookOpen, Search, X } from "lucide-react";
import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface QuranHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  edition: string;
  setEdition: (edition: string) => void;
  clearSearch: () => void;
}

const QuranHeader: React.FC<QuranHeaderProps> = ({ 
  searchQuery, 
  setSearchQuery, 
  edition, 
  setEdition, 
  clearSearch 
}) => {
  return (
    <>
      <div className="flex items-center space-x-3 mb-8">
        <BookOpen className="w-8 h-8 text-emerald-600" />
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Kuran-ı Kerim Sureleri
        </h1>
      </div>

      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:max-w-2xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 z-10" />
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Kuran'da ara (örn: cennet, namaz)..."
              className="pl-10 pr-10 py-6 text-lg rounded-xl dark:bg-gray-800/50"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                onClick={clearSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground hover:text-emerald-600 rounded-full"
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>
          <div className="w-full md:w-auto">
            <Select value={edition} onValueChange={setEdition}>
              <SelectTrigger className="w-full md:w-[240px] py-6 text-lg rounded-xl dark:bg-gray-800/50">
                <SelectValue placeholder="Meal Seçin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tr.diyanet">TR - Diyanet İşleri</SelectItem>
                <SelectItem value="en.asad">EN - Muhammad Asad</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(QuranHeader);
