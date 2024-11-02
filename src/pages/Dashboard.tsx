import React from 'react';
import { useAuth } from '../context/AuthContext';
import DonationForm from '../components/DonationForm';
import DonationList from '../components/DonationList';
import Chatbot from '../components/Chatbot';

export default function Dashboard() {
  const { user } = useAuth();
  const [showDonationForm, setShowDonationForm] = React.useState(false);
  const [donations, setDonations] = React.useState([]);

  const handleCreateDonation = (donation) => {
    setDonations((prev) => [
      {
        ...donation,
        id: Date.now().toString(),
        status: 'available',
        createdAt: new Date().toISOString(),
      },
      ...prev,
    ]);
    setShowDonationForm(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome, {user?.name}!</h1>
        <button
          onClick={() => setShowDonationForm(!showDonationForm)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
        >
          {showDonationForm ? 'View Donations' : 'Create Donation'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {showDonationForm ? (
            <DonationForm onSubmit={handleCreateDonation} />
          ) : (
            <DonationList
              donations={donations}
              onClaim={(id) =>
                setDonations((prev) =>
                  prev.map((d) =>
                    d.id === id ? { ...d, status: 'claimed' } : d
                  )
                )
              }
            />
          )}
        </div>
        <div>
          <Chatbot />
        </div>
      </div>
    </div>
  );
}