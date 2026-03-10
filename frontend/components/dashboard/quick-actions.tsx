'use client';

import { Card } from '@/components/ui/card';
import { 
  User, 
  FileText, 
  UserPlus, 
  Zap, 
  CreditCard, 
  Download, 
  BarChart3,
  TrendingUp,
  Shield,
  Smartphone,
  BookOpen,
  Settings
} from 'lucide-react';
import React, { useState } from 'react';
import { 
  InviteFriendsModal, 
  PersonalInformationModal, 
  TeamReportsModal,
  WheelFortuneModal,
  RechargeModal,
  WithdrawalModal,
  FinancialRecordsModal 
} from './quick-actions/index';

export function QuickActions() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const actions = [
    { 
      id: 'personal', 
      label: 'Personal Information', 
      icon: User, 
      iconColor: 'from-blue-500 to-blue-600', 
      bg: 'bg-blue-50' 
    },
    { 
      id: 'reports', 
      label: 'Team Reports', 
      icon: FileText, 
      iconColor: 'from-emerald-500 to-emerald-600', 
      bg: 'bg-emerald-50' 
    },
    { 
      id: 'invite', 
      label: 'Invite Friends', 
      icon: UserPlus, 
      iconColor: 'from-purple-500 to-purple-600', 
      bg: 'bg-purple-50' 
    },
    { 
      id: 'fortune', 
      label: 'Wheel of Fortune', 
      icon: Zap, 
      iconColor: 'from-yellow-500 to-yellow-600', 
      bg: 'bg-yellow-50' 
    },
    { 
      id: 'recharge', 
      label: 'Recharge Account', 
      icon: CreditCard, 
      iconColor: 'from-green-500 to-green-600', 
      bg: 'bg-green-50' 
    },
    { 
      id: 'withdrawal', 
      label: 'Withdrawal', 
      icon: Download, 
      iconColor: 'from-red-500 to-red-600', 
      bg: 'bg-red-50' 
    },
    { 
      id: 'records', 
      label: 'Financial Records', 
      icon: BarChart3, 
      iconColor: 'from-indigo-500 to-indigo-600', 
      bg: 'bg-indigo-50' 
    },
    { 
      id: 'wealth', 
      label: 'Wealth Management', 
      icon: TrendingUp, 
      iconColor: 'from-pink-500 to-pink-600', 
      bg: 'bg-pink-50' 
    },
    { 
      id: 'credit', 
      label: 'Credit Centres', 
      icon: Shield, 
      iconColor: 'from-orange-500 to-orange-600', 
      bg: 'bg-orange-50' 
    },
    { 
      id: 'app', 
      label: 'Download APP', 
      icon: Smartphone, 
      iconColor: 'from-cyan-500 to-cyan-600', 
      bg: 'bg-cyan-50' 
    },
    { 
      id: 'handbook', 
      label: 'Employee Handbook', 
      icon: BookOpen, 
      iconColor: 'from-violet-500 to-violet-600', 
      bg: 'bg-violet-50' 
    },
    { 
      id: 'settings', 
      label: 'System Settings', 
      icon: Settings, 
      iconColor: 'from-slate-500 to-slate-600', 
      bg: 'bg-slate-50' 
    }
  ];

  // Update these to match your action ids
  

  const handleActionClick = (actionId: string) => {
    const implementedActions = [
    'personal', 
    'reports', 
    'invite', 
    'fortune', 
    'recharge', 
    'withdrawal', 
    'records'
  ];
    // Check if the action is implemented
    if (implementedActions.includes(actionId)) {
      setActiveModal(actionId);
    } else {
      alert(`${actions.find(a => a.id === actionId)?.label} feature coming soon!`);
    }
  };

  const closeModal = () => setActiveModal(null);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Quick Actions</h2>
        <p className="text-slate-600">Manage your account and access key features</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Card
              key={action.id}
              className="p-6 cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 border border-slate-100 group"
              onClick={() => handleActionClick(action.id)}
            >
              <div className="text-center">
                <div className={`${action.bg} p-4 rounded-2xl inline-block mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 ${action.iconColor || 'text-slate-600'}`} />
                </div>
                <p className="text-slate-700 font-medium text-sm leading-tight">{action.label}</p>
              </div>
            </Card>
          );
        })}
      </div>
      {/* Modal */}]
      <PersonalInformationModal 
        isOpen={activeModal === 'personal'} 
        onClose={closeModal} 
      />

      <TeamReportsModal 
        isOpen={activeModal === 'reports'} 
        onClose={closeModal} 
      />

      <InviteFriendsModal
        isOpen={activeModal === 'invite'}
        onClose={closeModal}
      />

      <WheelFortuneModal 
        isOpen={activeModal === 'fortune'} 
        onClose={closeModal} 
      />
      <RechargeModal 
        isOpen={activeModal === 'recharge'} 
        onClose={closeModal} 
      />
      <WithdrawalModal 
        isOpen={activeModal === 'withdrawal'} 
        onClose={closeModal} 
      />
      <FinancialRecordsModal 
        isOpen={activeModal === 'records'} 
        onClose={closeModal} 
      />
    </div>
  );
}