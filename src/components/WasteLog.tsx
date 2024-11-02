import React from 'react';
import { PlusCircle, Trash2 } from 'lucide-react';
import type { WasteLog } from '../types';

interface WasteLogProps {
  logs: WasteLog[];
  onAddLog: (log: Omit<WasteLog, 'id' | 'date'>) => void;
  onDeleteLog: (id: string) => void;
}

export default function WasteLog({ logs, onAddLog, onDeleteLog }: WasteLogProps) {
  const [formData, setFormData] = React.useState({
    foodItem: '',
    quantity: 1,
    unit: 'kg',
    reason: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddLog(formData);
    setFormData({ foodItem: '', quantity: 1, unit: 'kg', reason: '' });
  };

  return (
    <div className="w-full max-w-2xl">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Log Food Waste</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Food Item</label>
            <input
              type="text"
              value={formData.foodItem}
              onChange={(e) => setFormData({ ...formData, foodItem: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Quantity</label>
              <input
                type="number"
                min="0"
                step="0.1"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: parseFloat(e.target.value) })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Unit</label>
              <select
                value={formData.unit}
                onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              >
                <option value="kg">kg</option>
                <option value="g">g</option>
                <option value="items">items</option>
              </select>
            </div>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Reason</label>
            <input
              type="text"
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          <PlusCircle className="w-4 h-4 mr-2" />
          Add Log
        </button>
      </form>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Waste Logs</h2>
        <div className="space-y-4">
          {logs.map((log) => (
            <div
              key={log.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div>
                <h3 className="font-medium">{log.foodItem}</h3>
                <p className="text-sm text-gray-600">
                  {log.quantity} {log.unit} - {log.reason}
                </p>
                <p className="text-xs text-gray-500">{new Date(log.date).toLocaleDateString()}</p>
              </div>
              <button
                onClick={() => onDeleteLog(log.id)}
                className="p-2 text-red-600 hover:text-red-800"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
          {logs.length === 0 && (
            <p className="text-center text-gray-500">No waste logs yet. Start by adding one above!</p>
          )}
        </div>
      </div>
    </div>
  );
}