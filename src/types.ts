export interface DonationListing {
  id: string;
  foodItems: string[];
  quantity: number;
  unit: string;
  location: string;
  expiryDate: string;
  contactInfo: string;
  status: 'available' | 'claimed' | 'expired';
  createdAt: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}