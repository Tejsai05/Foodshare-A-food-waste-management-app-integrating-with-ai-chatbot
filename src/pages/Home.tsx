import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Clock, MessageSquare } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Share Food, <span className="text-green-600">Share Love</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Join our community in reducing food waste while helping those in need.
          Connect with donors and recipients in your area.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <Link
            to="/signup"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="mt-3 sm:mt-0 sm:ml-3 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200"
          >
            Sign In
          </Link>
        </div>
      </div>

      <div className="mt-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pt-6">
            <div className="flow-root bg-white rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                  Reduce Food Waste
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  Help reduce food waste by donating excess food to those who need it.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="flow-root bg-white rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                  Connect Locally
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  Find and connect with food donors and recipients in your local area.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="flow-root bg-white rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                  Real-time Updates
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  Get instant notifications about available donations and claims.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="flow-root bg-white rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                  AI Assistant
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  Get help and answers from our intelligent chatbot assistant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}