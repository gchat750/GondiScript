import DictionarySearch from "@/components/DictionarySearch";

export default function Dictionary() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Gondi Dictionary
          </h1>
          <p className="text-muted-foreground">
            Search for words in Gondi, Hindi, or English
          </p>
        </div>

        <DictionarySearch />
      </div>
    </div>
  );
}
