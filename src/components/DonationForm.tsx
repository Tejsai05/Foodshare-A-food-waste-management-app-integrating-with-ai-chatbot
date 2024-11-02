import React from 'react';
import { PlusCircle } from 'lucide-react';
import type { DonationListing } from '../types';

interface DonationFormProps {
  onSubmit: (donation: Omit<DonationListing, 'id' | 'status' | 'createdAt'>) => void;
}

export default function DonationForm({ onSubmit }: DonationFormProps) {
  const [foodItems, setFoodItems] = React.useState<string[]>(['']);
  const [formData, setFormData] = React.useState({
    quantity: 1,
    unit: 'kg',
    location: '',
    expiryDate: '',
    contactInfo: '',
  });

  const handleAddFoodItem = () => {
    setFoodItems([...foodItems, '']);
  };

  const handleFoodItemChange = (index: number, value: string) => {
    const newFoodItems = [...foodItems];
    newFoodItems[index] = value;
    setFoodItems(newFoodItems);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nonEmptyFoodItems = foodItems.filter(item => item.trim() !== '');
    if (nonEmptyFoodItems.length === 0) return;

    onSubmit({
      ...formData,
      foodItems: nonEmptyFoodItems,
    });

    setFoodItems(['']);
    setFormData({
      quantity: 1,
      unit: 'kg',
      location: '',
      expiryDate: '',
      contactInfo: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Create Donation Listing</h2>
      
      <div className="space-y-4 mb-6">
        {foodItems.map((item, index) => (
          <div key={index}>
            <label className="block text-sm font-medium text-gray-700">
              Food Item {index + 1}
            </label>
            <input
              type="text"
              value={item}
              onChange={(e) => handleFoodItemChange(index, e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddFoodItem}
          className="text-green-600 hover:text-green-700 text-sm font-medium"
        >
          + Add another item
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Quantity</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: parseFloat(e.target.value) })}
            className="mt-1 block w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Unit</label>
          <select
            value={formData.unit}
            onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
            className="mt-1 block w-full"
          >
            <option value="kg">kg</option>
            <option value="g">g</option>
            <option value="items">items</option>
            <option value="servings">servings</option>
          </select>
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="mt-1 block w-full"
            required
            placeholder="Enter pickup location"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
          <input
            type="datetime-local"
            value={formData.expiryDate}
            onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
            className="mt-1 block w-full"
            required
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">Contact Information</label>
          <input
            type="text"
            value={formData.contactInfo}
            onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
            className="mt-1 block w-full"
            required
            placeholder="Phone number or email"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        <PlusCircle className="w-4 h-4 mr-2" />
        Create Donation
      </button>
    </form>
  );
}