import Pronoun from "@/components/pronouns/Pronoun";
import MetaData from "@/lib/MetaData";
export default function HistoryPage() {

  return (
    <>
      <MetaData
        title="Pronouns - q01q"
        description="Your history and past interactions."
      />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Pronouns</h1>
        <p className="text-gray-600">Your pronouns.</p>
        <Pronoun />
      </div>
    </>
  );
}
