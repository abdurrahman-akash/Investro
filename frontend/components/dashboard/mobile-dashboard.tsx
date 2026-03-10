'use client';

import { useState } from 'react';
import { MobileHeader } from '@/components/dashboard/mobile-header';
import { MobileBalanceCard } from '@/components/dashboard/mobile-balance-card';
import { MobileQuickActions } from '@/components/dashboard/mobile-quick-actions';
import { MobileBottomNav } from '@/components/dashboard/mobile-bottom-nav';
import { MobileTaskArea } from '@/components/dashboard/mobile-task-area';
import { MobileMembersList } from '@/components/dashboard/mobile-members-list';

export default function MobileDashboard() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col h-screen">
        <MobileHeader />
        
        <main className="flex-1 overflow-y-auto pb-20">
          {activeTab === 'home' && (
            <div className="p-4 space-y-6">
              <MobileBalanceCard />
              <MobileQuickActions />
              <MobileTaskArea />
            </div>
          )}
          
          {activeTab === 'tasks' && (
            <div className="p-4 space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Task Area</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="action-card rounded-lg p-4 text-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">{i + 1}</span>
                      </div>
                      <p className="text-gray-900 text-sm font-medium">Task {i + 1}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'profit' && (
            <div className="p-4 space-y-6">
              <MobileMembersList />
            </div>
          )}
          
          {activeTab === 'my' && (
            <div className="p-4 space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Profile Settings</h2>
                <div className="space-y-4">
                  <div className="action-card rounded-lg p-4">
                    <p className="text-gray-900 font-medium">Account Settings</p>
                  </div>
                  <div className="action-card rounded-lg p-4">
                    <p className="text-gray-900 font-medium">Security</p>
                  </div>
                  <div className="action-card rounded-lg p-4">
                    <p className="text-gray-900 font-medium">Notifications</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
        
        <MobileBottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}