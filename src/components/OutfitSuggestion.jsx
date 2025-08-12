import { getOutfitSuggestion } from "../utils/outfitLogic";

export default function OutfitSuggestion({ temp, condition }) {
  const suggestion = getOutfitSuggestion(temp, condition);

  return (
    <div className="outfit-suggestion">
      <strong>Recommendation:</strong> {suggestion}
    </div>
  );
}
