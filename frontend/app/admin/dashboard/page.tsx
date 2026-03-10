"use client";
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import DesktopDashboard from '@/components/dashboard/desktop-dashboard';
import MobileDashboard from '@/components/dashboard/mobile-dashboard';

export default function AdminDashboard() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-black text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

    return (
        <div className="min-h-screen w-full">
      {/* Desktop View */}
      <div className="hidden lg:block">
        <DesktopDashboard />
      </div>
      
      {/* Mobile/Tablet View */}
      <div className="lg:hidden w-full overflow-x-hidden">
        <MobileDashboard />
      </div>
    </div>
    );
}