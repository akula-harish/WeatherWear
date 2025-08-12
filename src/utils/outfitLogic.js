export function getOutfitSuggestion(temp, condition) {
  if (condition.toLowerCase().includes("rain")) {
    return "Take an umbrella and wear waterproof shoes.";
  } else if (temp < 10) {
    return "Wear a warm coat and scarf.";
  } else if (temp < 20) {
    return "A light jacket should be fine.";
  } else if (condition.toLowerCase().includes("sun")) {
    return "Sunglasses and light clothing recommended.";
  } else {
    return "Casual wear is fine today.";
  }
}
