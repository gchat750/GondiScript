import VocabularyCard from "../VocabularyCard";

export default function VocabularyCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
      <VocabularyCard
        gondi="𑴌𑴳𑵃𑴱𑵄𑴲"
        pronunciation="Namaskar"
        english="Hello / Greetings"
        hindi="नमस्कार"
        example="𑴌𑴳𑵃𑴱𑵄𑴲, 𑴌𑴺𑵄𑴱 𑴬𑴼𑴟 - Hello, how are you?"
      />
      <VocabularyCard
        gondi="𑴝𑴱𑴟𑵃𑴱"
        pronunciation="Danram"
        english="Thank you"
        hindi="धन्यवाद"
      />
      <VocabularyCard
        gondi="𑴤𑴱𑴥"
        pronunciation="Map"
        english="Father"
        hindi="पिता"
      />
    </div>
  );
}
