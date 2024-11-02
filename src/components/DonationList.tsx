import React from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';
import type { DonationListing } from '../types';

interface DonationListProps {
  donations: DonationListing[];
  onClaim: (id: string) => void;
}

export default function DonationList({ donations, onClaim }: DonationListProps) {
  const getStatusColor = (status: DonationListing['status']) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'claimed':
        return 'bg-blue-100 text-blue-800';
      case 'expired':
        return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div className="space-y-4">
      {donations.map((donation) => (
        <div
          key={donation.id}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                {donation.foodItems.join(', ')}
              </h3>
              <p className="text-sm text-gray-500">
                {donation.quantity} {donation.unit}
              </p>
            </div>
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                donation.status
              )}`}
            >
              {donation.status}
            </span>
          </div>

          <div className="space-y-2 text-sm text-gray-500">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              {donation.location}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Expires: {new Date(donation.expiryDate).toLocaleString()}
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              {donation.contactInfo}
            </div>
          </div>

          {donation.status === 'available' && (
            <button
              onClick={() => onClaim(donation.id)}
              className="mt-4 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Claim Donation
            </button>
          )}
        </div>
      ))}

      {donations.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <p className="text-gray-500">No donations available at the moment.</p>
          <p className="text-sm text-gray-400">Create a new donation to get started!</p>
        </div>
      )}
    </div>
  );
}