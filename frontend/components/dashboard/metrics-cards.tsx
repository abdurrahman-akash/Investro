'use client';

import { Card} from '@/components/ui/card';
import { TrendingUp, TrendingDown, DollarSign, Wallet, Calendar, Target, Award } from 'lucide-react';

export function MetricsCards() {
    const stats = {
        totalBalance: 15000.75,
        workDeposit: 5000.00,
        availableAmount: 12000.50,
        todayEarnings: 300.25,
        thisWeekEarnings: 1500.00,
        thisMonthEarnings: 6000.00
    };
  const metrics = [
    {
      title: 'Total Balance',
      value: stats.totalBalance,
      icon: Wallet,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      change: '+12.5%',
      changeType: 'positive'
    },
    {
      title: 'Work Deposit',
      value: stats.workDeposit,
      icon: DollarSign,
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      change: '+8.2%',
      changeType: 'positive'
    },
    {
      title: 'Available Amount',
      value: stats.availableAmount.toFixed(2),
      icon: Target,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      change: '+15.3%',
      changeType: 'positive'
    },
    {
      title: "Today's Earnings",
      value: stats.todayEarnings.toFixed(2),
      icon: Calendar,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      change: '+5.7%',
      changeType: 'positive'
    },
    {
      title: 'This Week',
      value: stats.thisWeekEarnings,
      icon: TrendingUp,
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
      change: '+22.1%',
      changeType: 'positive'
    },
    {
      title: 'This Month',
      value: stats.thisMonthEarnings,
      icon: Award,
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600',
      change: '+18.9%',
      changeType: 'positive'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {metrics.map((stat, index) => (
        <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl ${stat.bgColor}`}>
              <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
            </div>
            <div className={`flex items-center space-x-1 text-sm font-medium ${
              stat.changeType === 'positive' ? 'text-emerald-600' : 'text-red-600'
            }`}>
              {stat.changeType === 'positive' ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              <span>{stat.change}</span>
            </div>
          </div>
          <div>
            <p className="text-slate-600 text-sm font-medium mb-1">{stat.title}</p>
            <p className="text-slate-900 font-bold text-2xl">{stat.value}E</p>
          </div>
        </Card>
      ))}
    </div>
  );
}