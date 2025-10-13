import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import VocabularyCard from "./VocabularyCard";

const mockDictionary = [
  { gondi: "𑴌𑴳𑵃𑴱𑵄𑴲", pronunciation: "Namaskar", english: "Hello", hindi: "नमस्कार" },
  { gondi: "𑴝𑴱𑴟𑵃𑴱", pronunciation: "Danram", english: "Thank you", hindi: "धन्यवाद" },
  { gondi: "𑴤𑴱𑴥", pronunciation: "Map", english: "Father", hindi: "पिता" },
  { gondi: "𑴱𑴥", pronunciation: "Ap", english: "Mother", hindi: "माता" },
  { gondi: "𑵑", pronunciation: "Onji", english: "One", hindi: "एक" },
];

export default function DictionarySearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<"all" | "gondi" | "hindi" | "english">("all");

  const filteredResults = mockDictionary.filter((word) => {
    const searchLower = searchTerm.toLowerCase();
    if (!searchTerm) return true;

    switch (filter) {
      case "gondi":
        return word.gondi.includes(searchTerm);
      case "hindi":
        return word.hindi.toLowerCase().includes(searchLower);
      case "english":
        return word.english.toLowerCase().includes(searchLower);
      default:
        return (
          word.gondi.includes(searchTerm) ||
          word.hindi.toLowerCase().includes(searchLower) ||
          word.english.toLowerCase().includes(searchLower) ||
          word.pronunciation.toLowerCase().includes(searchLower)
        );
    }
  });

  return (
    <div className="space-y-6" data-testid="dictionary-search">
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search in Gondi, Hindi, or English..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                data-testid="input-dictionary-search"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <Badge
                variant={filter === "all" ? "default" : "outline"}
                className="cursor-pointer hover-elevate active-elevate-2"
                onClick={() => setFilter("all")}
                data-testid="filter-all"
              >
                All
              </Badge>
              <Badge
                variant={filter === "gondi" ? "default" : "outline"}
                className="cursor-pointer hover-elevate active-elevate-2"
                onClick={() => setFilter("gondi")}
                data-testid="filter-gondi"
              >
                Gondi
              </Badge>
              <Badge
                variant={filter === "hindi" ? "default" : "outline"}
                className="cursor-pointer hover-elevate active-elevate-2"
                onClick={() => setFilter("hindi")}
                data-testid="filter-hindi"
              >
                Hindi
              </Badge>
              <Badge
                variant={filter === "english" ? "default" : "outline"}
                className="cursor-pointer hover-elevate active-elevate-2"
                onClick={() => setFilter("english")}
                data-testid="filter-english"
              >
                English
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredResults.map((word, index) => (
          <VocabularyCard key={index} {...word} />
        ))}
      </div>

      {filteredResults.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-muted-foreground">No words found. Try a different search term.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
