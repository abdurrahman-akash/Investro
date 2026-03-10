'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  FileText, 
  Search, 
  Filter, 
  Download, 
  TrendingUp, 
  TrendingDown,
  Users,
  Target,
  Calendar,
  BarChart3
} from 'lucide-react';

interface TeamReportsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TeamReportsModal({ isOpen, onClose }: TeamReportsModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('this-month');

  const teamStats = [
    { label: 'Total Members', value: '24', change: '+3', trend: 'up', icon: Users },
    { label: 'Active Today', value: '18', change: '+2', trend: 'up', icon: Target },
    { label: 'Tasks Completed', value: '156', change: '+12', trend: 'up', icon: BarChart3 },
    { label: 'Team Performance', value: '94%', change: '-2%', trend: 'down', icon: TrendingUp }
  ];

  const teamMembers = [
    {
      id: '001',
      name: 'John Doe',
      role: 'Team Lead',
      tasksCompleted: 45,
      performance: 98,
      earnings: '₹12,500',
      status: 'active',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: '002',
      name: 'Jane Smith',
      role: 'Senior Member',
      tasksCompleted: 38,
      performance: 95,
      earnings: '₹10,200',
      status: 'active',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: '003',
      name: 'Mike Johnson',
      role: 'Member',
      tasksCompleted: 32,
      performance: 87,
      earnings: '₹8,900',
      status: 'active',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: '004',
      name: 'Sarah Wilson',
      role: 'Member',
      tasksCompleted: 28,
      performance: 92,
      earnings: '₹7,800',
      status: 'inactive',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const filteredMembers = teamMembers.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <FileText className="w-5 h-5" />
            <span>Team Reports</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search team members..."
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

          {/* Team Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {teamStats.map((stat, index) => {
              const Icon = stat.icon;
              const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;
              
              return (
                <Card key={index} className="metric-card">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex items-center space-x-1 text-xs">
                        <TrendIcon className={`w-3 h-3 ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`} />
                        <span className={stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                          {stat.change}
                        </span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Team Members Table */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Team Performance ({filteredMembers.length} members)</span>
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>Updated 2 hours ago</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Member</th>
                      <th>Role</th>
                      <th>Tasks Completed</th>
                      <th>Performance</th>
                      <th>Earnings</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMembers.map((member) => (
                      <tr key={member.id}>
                        <td>
                          <div className="flex items-center space-x-3">
                            <Avatar className="w-8 h-8">
                              <AvatarImage src={member.avatar} />
                              <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-gray-900">{member.name}</p>
                              <p className="text-sm text-gray-500">ID: {member.id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="text-gray-600">{member.role}</td>
                        <td className="font-semibold">{member.tasksCompleted}</td>
                        <td>
                          <div className="flex items-center space-x-2">
                            <div className="w-16 bg-gray-200 rounded-full h-2">
                              <div 
                                className="progress-bar h-2 rounded-full" 
                                style={{ width: `${member.performance}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium">{member.performance}%</span>
                          </div>
                        </td>
                        <td className="font-semibold text-green-600">{member.earnings}</td>
                        <td>
                          <span className={`badge ${
                            member.status === 'active' ? 'badge-success' : 'badge-warning'
                          }`}>
                            {member.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Performance Chart Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle>Team Performance Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                <div className="text-center">
                  <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Performance Chart</p>
                  <p className="text-sm text-gray-400">Chart visualization would be implemented here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}