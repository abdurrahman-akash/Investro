"use client";
import React, { useState } from 'react';
import { Sidebar } from '@/components/dashboard/sidebar';
import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { MetricsCards } from '@/components/dashboard/metrics-cards';
import { QuickActions } from '@/components/dashboard/quick-actions';
import { TopPerformers } from '@/components/dashboard/top-performers';
import { TaskManagement } from '@/components/dashboard/task-management';
import { AnalyticsDashboard } from '@/components/dashboard/analytics-dashboard';
import { ProfileSettings } from '@/components/dashboard/profile-settings';

export default function DesktopDashboard() {
    const [activeSection, setActiveSection] = useState('dashboard');

    const renderContent = () => {
        switch (activeSection) {
            case 'dashboard':
                return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
                <p className="text-gray-600">Welcome back, here&apos;s what&apos;s happening today.</p>
              </div>
              <div className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleTimeString()}
              </div>
            </div>
            
            <MetricsCards />
            
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2">
                <QuickActions />
              </div>
              <div>
                <TopPerformers />
              </div>
            </div>
          </div>
        );
        case 'tasks':
            return <TaskManagement />;
        case 'analytics':
            return <AnalyticsDashboard />;
        case 'settings':
            return <ProfileSettings />;
        default:
            return (
            <div className="flex items-center justify-center h-64">
                <p className="text-gray-500">Content for {activeSection} coming soon...</p>
            </div>
        );
        }
    }

    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

            <div className="flex-1 flex flex-col overflow-hidden">
                <DashboardHeader />

                <main className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                    <div className="max-w-7xl mx-auto">
                        {renderContent()}
                    </div>
                </main>
            </div>
        </div>
    );
}