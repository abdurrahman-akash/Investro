'use client';

import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export function MobileBalanceCard() {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div className="bg-white rounded-xl p-6 space-y-4 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between">
        <h2 className="text-gray-900 text-lg font-semibold">01017258206</h2>
        <button
          onClick={() => setShowBalance(!showBalance)}
          className="text-gray-500 hover:text-gray-700"
        >
          {showBalance ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
        </button>
      </div>
      
      <div className="text-center text-gray-600 text-sm">
        Effective date: 2025-06-02—2025-06-04
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="metric-card rounded-lg p-4">
          <p className="text-sm text-gray-600">Total balance(E)</p>
          <p className="text-2xl font-bold text-gray-900">{showBalance ? '0' : '***'}</p>
        </div>
        <div className="metric-card rounded-lg p-4">
          <p className="text-sm text-gray-600">Work deposit</p>
          <p className="text-2xl font-bold text-gray-900">{showBalance ? '0' : '***'}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
          <p className="text-gray-600 text-sm">Review funds</p>
          <p className="text-gray-900 font-semibold">{showBalance ? '0.00' : '***'}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
          <p className="text-gray-600 text-sm">Available amount</p>
          <p className="text-gray-900 font-semibold">{showBalance ? '0.00' : '***'}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-200">
          <p className="text-gray-600 text-xs">Yesterday&apos;s earnings</p>
          <p className="text-gray-900 font-semibold text-sm">{showBalance ? '0.00' : '***'}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-200">
          <p className="text-gray-600 text-xs">Today&apos;s earnings</p>
          <p className="text-gray-900 font-semibold text-sm">{showBalance ? '0.00' : '***'}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-200">
          <p className="text-gray-600 text-xs">This month&apos;s earnings</p>
          <p className="text-gray-900 font-semibold text-sm">{showBalance ? '60' : '***'}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-200">
          <p className="text-gray-600 text-xs">Total revenue</p>
          <p className="text-gray-900 font-semibold text-sm">{showBalance ? '60' : '***'}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-200">
          <p className="text-gray-600 text-xs">Commission</p>
          <p className="text-gray-900 font-semibold text-sm">{showBalance ? '0.00' : '***'}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-200">
          <p className="text-gray-600 text-xs">Referral rebate</p>
          <p className="text-gray-900 font-semibold text-sm">{showBalance ? '0.00' : '***'}</p>
        </div>
      </div>
    </div>
  );
}