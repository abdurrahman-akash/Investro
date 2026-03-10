'use client';

import { 
  User, 
  FileText, 
  Zap, 
  Gift, 
  CreditCard, 
  Download, 
  BarChart3, 
  Settings 
} from 'lucide-react';

export function MobileQuickActions() {
  const actions = [
    { title: 'Personal Information', icon: User, color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { title: 'Team Reports', icon: FileText, color: 'text-green-600', bgColor: 'bg-green-50' },
    { title: 'Invite friends', icon: Zap, color: 'text-yellow-600', bgColor: 'bg-yellow-50' },
    { title: 'Wheel of Fortune', icon: Gift, color: 'text-purple-600', bgColor: 'bg-purple-50' },
    { title: 'Recharge', icon: CreditCard, color: 'text-indigo-600', bgColor: 'bg-indigo-50' },
    { title: 'Withdrawal', icon: Download, color: 'text-red-600', bgColor: 'bg-red-50' },
    { title: 'Financial Records', icon: BarChart3, color: 'text-teal-600', bgColor: 'bg-teal-50' },
    { title: 'Daily statement', icon: Settings, color: 'text-gray-600', bgColor: 'bg-gray-50' },
    { title: 'Wealth management', icon: BarChart3, color: 'text-orange-600', bgColor: 'bg-orange-50' },
    { title: 'Credit centres', icon: CreditCard, color: 'text-pink-600', bgColor: 'bg-pink-50' },
    { title: 'Download APP', icon: Download, color: 'text-cyan-600', bgColor: 'bg-cyan-50' },
    { title: 'Employee Handbook', icon: FileText, color: 'text-violet-600', bgColor: 'bg-violet-50' }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="grid grid-cols-4 gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <button
              key={index}
              className="action-card rounded-lg p-3 flex flex-col items-center space-y-2"
            >
              <div className={`w-8 h-8 ${action.bgColor} rounded-lg flex items-center justify-center`}>
                <Icon className={`w-4 h-4 ${action.color}`} />
              </div>
              <p className="text-gray-900 text-xs text-center font-medium">{action.title}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}