'use client';

import { Building2, User, LogOut, Bell } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export function MobileHeader() {
  const user = {
        name: "Admin User",
        email: "admin@ipg.com",
        role: "Administrator",
        avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
        balance: 1000,
        earnings: {
            today: 150,
            thisMonth: 3000,
        },
    };

    const logout = () => {
        // Handle logout logic here
        console.log('User logged out');
    }

  return (
    <header className="bg-white p-4 flex items-center justify-between border-b border-gray-200">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
          <Building2 className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-gray-900 font-bold">IPG</h1>
          <p className="text-gray-600 text-sm">Welcome {user?.name}</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <button className="relative p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors">
            <Bell className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>
        <Avatar className="w-10 h-10 border-2 border-gray-200">
          <AvatarImage src={user?.avatar} />
          <AvatarFallback className="bg-gray-100 text-gray-600">
            <User className="w-4 h-4" />
          </AvatarFallback>
        </Avatar>
        <Button
          onClick={logout}
          variant="ghost"
          className="w-full justify-start rounded-xl text-red-600 hover:bg-red-50 transition-colors duration-200 hover:text-red-800 font-medium"
        >
          <LogOut className="w-4 h-4 mr-2" />
        </Button>
      </div>
    </header>
  );
}