'use client';

import { Button } from '@/components/ui/button';
import { TrendingUp, Target } from 'lucide-react';

export function MobileTaskArea() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="metric-card rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-6 h-6 bg-blue-50 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-3 h-3 text-blue-600" />
            </div>
            <p className="text-sm text-gray-600">Today&apos;s earnings</p>
          </div>
          <p className="text-xl font-bold text-gray-900">E 0</p>
        </div>
        <div className="metric-card rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-6 h-6 bg-green-50 rounded-lg flex items-center justify-center">
              <Target className="w-3 h-3 text-green-600" />
            </div>
            <p className="text-sm text-gray-600">Total balance</p>
          </div>
          <p className="text-xl font-bold text-gray-900">E 0.00</p>
        </div>
      </div>
      
      <div className="metric-card rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Starting</h3>
          <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-full">0/5</span>
        </div>
        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
          Start Task
        </Button>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
        <h4 className="text-blue-900 font-medium mb-2">Important Notice</h4>
        <ul className="text-blue-800 text-sm space-y-1">
          <li>• Working hours: 09:01-23:59</li>
          <li>• If you need assistance, please contact your hiring manager</li>
        </ul>
      </div>
    </div>
  );
}