const responses = {
  greeting: "Hello! I'm your Food Donation Assistant. How can I help you donate or find food donations today?",
  tips: [
    "Make sure to properly package food items before donation",
    "Only donate food that is still safe to consume",
    "Include accurate expiry dates with your donations",
    "Store perishable items properly before donation",
    "Contact the donor quickly for fresh food items",
  ],
  donationGuide: "To donate food:\n1. Click 'Create Donation'\n2. List available food items\n3. Add quantity and expiry date\n4. Provide your contact details\n5. Submit the listing",
  findingGuide: "To find donations:\n1. Browse available listings\n2. Check the location and expiry date\n3. Contact the donor through provided details\n4. Arrange pickup time",
};

export const generateResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();
  
  if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
    return responses.greeting;
  }
  
  if (lowerInput.includes('how') && lowerInput.includes('donate')) {
    return responses.donationGuide;
  }
  
  if (lowerInput.includes('find') && lowerInput.includes('food')) {
    return responses.findingGuide;
  }
  
  if (lowerInput.includes('tip') || lowerInput.includes('advice')) {
    return responses.tips[Math.floor(Math.random() * responses.tips.length)];
  }
  
  if (lowerInput.includes('safety') || lowerInput.includes('safe')) {
    return "Food safety tips:\n1. Check expiry dates\n2. Ensure proper packaging\n3. Maintain appropriate temperature\n4. Avoid damaged items\n5. Transport safely";
  }

  return "I can help you with donation guidelines, finding food, or safety tips. What would you like to know?";
}