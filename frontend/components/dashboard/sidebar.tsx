import Image from 'next/image';
import { Building2, LayoutDashboard, BarChart3, TrendingUp, Settings, LogOut, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/auth-context';

interface SidebarProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

export function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
    const { logout } = useAuth();
    const user = {
        name: "Admin User",
        email: "admin@ipg.com",
        role: "Administrator",
        avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
        balance: 1000,
    };

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'tasks', label: 'Task Management', icon: BarChart3 },
        { id: 'analytics', label: 'Profit Analytics', icon: TrendingUp },
        { id: 'settings', label: 'Profile Settings', icon: Settings },
    ];

    return (
        <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-full">
            <div className="p-6 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h2 className="font-bold text-gray-900">IPG Admin</h2>
                    <p className="text-sm text-gray-500">{user?.name}</p>
                </div>
                </div>
            </div>

            {/* User Info */}
            <div className="p-6 border-b border-slate-200">
                <div className="flex items-center space-x-3">
                <Image
                    src={user.avatar}
                    alt={user.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-900 truncate">{user?.name}</p>
                    <p className="text-xs text-slate-500 truncate">{user?.email}</p>
                </div>
                </div>
                <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">Balance</span>
                    <span className="text-lg font-bold text-blue-600">{user?.balance}E</span>
                </div>
                </div>
            </div>

            <nav className="flex-1 p-4 space-y-3">
                {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                    <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                        isActive
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                    >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : ''}`} />
                    <span className='font-medium'>{item.label}</span>
                    </button>
                );
                })}
            </nav>

            {/* Bottom Actions */}
            <div className="p-4 border-t border-gray-200 space-y-2">
                <Button
                variant="ghost"
                className="w-full justify-start text-gray-600 hover:text-gray-900"
                >
                <HelpCircle className="w-4 h-4 mr-2" />
                Help & Support
                </Button>
                <Button
                onClick={logout}
                variant="ghost"
                className="w-full justify-start rounded-xl text-red-600 hover:bg-red-50 transition-colors duration-200 hover:text-red-800"
                >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
                </Button>
            </div>                                              
        </div>
    );
}