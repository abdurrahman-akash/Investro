'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BarChart3, 
  Search, 
  Filter, 
  Download, 
  Calendar,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Wallet,
  ArrowUpRight,
  ArrowDownLeft
} from 'lucide-react';

interface FinancialRecordsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FinancialRecordsModal({ isOpen, onClose }: FinancialRecordsModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('this-month');
  const [selectedType, setSelectedType] = useState('all');

  const financialSummary = [
    { label: 'Total Income', value: '₹45,230', change: '+12.5%', trend: 'up', icon: TrendingUp },
    { label: 'Total Expenses', value: '₹8,450', change: '+3.2%', trend: 'up', icon: TrendingDown },
    { label: 'Net Profit', value: '₹36,780', change: '+18.7%', trend: 'up', icon: DollarSign },
    { label: 'Pending Amount', value: '₹2,100', change: '-5.1%', trend: 'down', icon: Wallet }
  ];

  const transactions = [
    {
      id: 'TXN001',
      type: 'income',
      description: 'Task Completion Bonus',
      amount: 1250,
      date: '2024-01-15',
      time: '14:30',
      status: 'completed',
      category: 'earnings'
    },
    {
      id: 'TXN002',
      type: 'expense',
      description: 'Withdrawal Fee',
      amount: 10,
      date: '2024-01-15',
      time: '12:45',
      status: 'completed',
      category: 'fees'
    },
    {
      id: 'TXN003',
      type: 'income',
      description: 'Referral Bonus',
      amount: 300,
      date: '2024-01-14',
      time: '16:20',
      status: 'completed',
      category: 'referral'
    },
    {
      id: 'TXN004',
      type: 'expense',
      description: 'Platform Fee',
      amount: 25,
      date: '2024-01-14',
      time: '10:15',
      status: 'completed',
      category: 'fees'
    },
    {
      id: 'TXN005',
      type: 'income',
      description: 'Daily Task Reward',
      amount: 500,
      date: '2024-01-13',
      time: '18:30',
      status: 'pending',
      category: 'earnings'
    },
    {
      id: 'TXN006',
      type: 'income',
      description: 'Weekly Performance Bonus',
      amount: 2000,
      date: '2024-01-12',
      time: '09:00',
      status: 'completed',
      category: 'bonus'
    }
  ];

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || transaction.type === selectedType;
    return matchesSearch && matchesType;
  });

  const getTransactionIcon = (type: string) => {
    return type === 'income' ? ArrowUpRight : ArrowDownLeft;
  };

  const getTransactionColor = (type: string) => {
    return type === 'income' ? 'text-green-600' : 'text-red-600';
  };

  const getCategoryBadge = (category: string) => {
    const badges = {
      earnings: 'badge-success',
      referral: 'badge-info',
      bonus: 'badge-warning',
      fees: 'badge-error'
    };
    return badges[category as keyof typeof badges] || 'badge-info';
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5" />
            <span>Financial Records</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-2">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="form-input"
              >
                <option value="today">Today</option>
                <option value="this-week">This Week</option>
                <option value="this-month">This Month</option>
                <option value="last-month">Last Month</option>
                <option value="this-year">This Year</option>
              </select>
              
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="form-input"
              >
                <option value="all">All Types</option>
                <option value="income">Income</option>
                <option value="expense">Expenses</option>
              </select>
              
              <Button variant="outline" className="btn-secondary">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              
              <Button className="btn-primary">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          {/* Financial Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {financialSummary.map((summary, index) => {
              const Icon = summary.icon;
              const TrendIcon = summary.trend === 'up' ? TrendingUp : TrendingDown;
              
              return (
                <Card key={index} className="metric-card">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex items-center space-x-1 text-xs">
                        <TrendIcon className={`w-3 h-3 ${summary.trend === 'up' ? 'text-green-600' : 'text-red-600'}`} />
                        <span className={summary.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                          {summary.change}
                        </span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{summary.value}</div>
                    <div className="text-sm text-gray-600">{summary.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Chart Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Financial Trend</span>
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>Last 30 days</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                <div className="text-center">
                  <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Financial Chart</p>
                  <p className="text-sm text-gray-400">Income vs Expenses visualization</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Transaction History */}
          <Card>
            <CardHeader>
              <CardTitle>Transaction History ({filteredTransactions.length} records)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {filteredTransactions.map((transaction) => {
                  const TransactionIcon = getTransactionIcon(transaction.type);
                  const colorClass = getTransactionColor(transaction.type);
                  
                  return (
                    <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'
                        }`}>
                          <TransactionIcon className={`w-5 h-5 ${colorClass}`} />
                        </div>
                        
                        <div>
                          <div className="font-medium text-gray-900">{transaction.description}</div>
                          <div className="text-sm text-gray-500">
                            {transaction.id} • {transaction.date} at {transaction.time}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <span className={`badge ${getCategoryBadge(transaction.category)}`}>
                          {transaction.category}
                        </span>
                        
                        <div className="text-right">
                          <div className={`font-semibold ${colorClass}`}>
                            {transaction.type === 'income' ? '+' : '-'}₹{transaction.amount}
                          </div>
                          <span className={`badge ${
                            transaction.status === 'completed' ? 'badge-success' : 'badge-warning'
                          }`}>
                            {transaction.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Monthly Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Income Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { category: 'Task Earnings', amount: '₹25,400', percentage: 65 },
                    { category: 'Referral Bonus', amount: '₹8,200', percentage: 21 },
                    { category: 'Performance Bonus', amount: '₹5,630', percentage: 14 }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">{item.category}</span>
                        <span className="font-medium">{item.amount}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="progress-bar h-2 rounded-full" 
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Expense Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { category: 'Platform Fees', amount: '₹450', percentage: 70 },
                    { category: 'Withdrawal Fees', amount: '₹180', percentage: 28 },
                    { category: 'Other Charges', amount: '₹20', percentage: 2 }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">{item.category}</span>
                        <span className="font-medium">{item.amount}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-red-500 h-2 rounded-full" 
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}