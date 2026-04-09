import React from 'react';

export default function SmartContractPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Smart Contract</h1>
        <div className="bg-gray-800 rounded-lg p-6">
          <p className="text-gray-300 mb-4">
            EcoMine smart contract information will be displayed here.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="text-xl font-semibold mb-2">Contract Address</h3>
              <p className="text-sm text-gray-400">Coming soon...</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="text-xl font-semibold mb-2">Network</h3>
              <p className="text-sm text-gray-400">Ethereum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}