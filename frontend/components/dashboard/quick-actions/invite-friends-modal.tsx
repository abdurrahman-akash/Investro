'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Zap, 
  Copy, 
  Mail, 
  MessageSquare, 
  Share2, 
  Gift,
  Users,
  DollarSign,
  Check,
  Send
} from 'lucide-react';

interface InviteFriendsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InviteFriendsModal({ isOpen, onClose }: InviteFriendsModalProps) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('Join me on IPG and start earning today! Use my referral code to get started.');
  const [copied, setCopied] = useState(false);
  
  const referralCode = 'IPG2024REF123';
  const referralLink = `https://ipg.com/join?ref=${referralCode}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendInvite = () => {
    // Send invite logic here
    setEmail('');
  };

  const referralStats = [
    { label: 'Total Invites', value: '12', icon: Users, color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { label: 'Successful Joins', value: '8', icon: Check, color: 'text-green-600', bgColor: 'bg-green-50' },
    { label: 'Pending Invites', value: '4', icon: Send, color: 'text-orange-600', bgColor: 'bg-orange-50' },
    { label: 'Referral Earnings', value: '₹2,400', icon: DollarSign, color: 'text-purple-600', bgColor: 'bg-purple-50' }
  ];

  const recentInvites = [
    { email: 'john.doe@example.com', status: 'joined', date: '2024-01-15', earnings: '₹300' },
    { email: 'jane.smith@example.com', status: 'pending', date: '2024-01-14', earnings: '₹0' },
    { email: 'mike.johnson@example.com', status: 'joined', date: '2024-01-12', earnings: '₹300' },
    { email: 'sarah.wilson@example.com', status: 'pending', date: '2024-01-10', earnings: '₹0' }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Zap className="w-5 h-5" />
            <span>Invite Friends & Earn</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Referral Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {referralStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="metric-card">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-8 h-8 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                        <Icon className={`w-4 h-4 ${stat.color}`} />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Referral Program Info */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Referral Program Benefits</h3>
                  <p className="text-gray-600">Earn rewards for every successful referral</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">₹300</div>
                  <div className="text-sm text-gray-600">Per Successful Referral</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-green-600">₹100</div>
                  <div className="text-sm text-gray-600">Bonus for New Member</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">5%</div>
                  <div className="text-sm text-gray-600">Lifetime Commission</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Invite Methods */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Email Invitation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>Send Email Invitation</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Friend&apos;s Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="friend@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Personal Message</Label>
                  <textarea
                    id="message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="form-input w-full resize-none"
                    placeholder="Add a personal message..."
                  />
                </div>
                
                <Button 
                  onClick={handleSendInvite}
                  className="w-full btn-primary"
                  disabled={!email}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Invitation
                </Button>
              </CardContent>
            </Card>

            {/* Share Links */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Share2 className="w-5 h-5" />
                  <span>Share Your Links</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Referral Code</Label>
                  <div className="flex space-x-2">
                    <Input
                      value={referralCode}
                      readOnly
                      className="form-input"
                    />
                    <Button
                      onClick={handleCopyCode}
                      variant="outline"
                      className="btn-secondary"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Referral Link</Label>
                  <div className="flex space-x-2">
                    <Input
                      value={referralLink}
                      readOnly
                      className="form-input text-sm"
                    />
                    <Button
                      onClick={handleCopyLink}
                      variant="outline"
                      className="btn-secondary"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="btn-secondary">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button variant="outline" className="btn-secondary">
                    <Share2 className="w-4 h-4 mr-2" />
                    More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Invites */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Invitations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Email</th>
                      <th>Status</th>
                      <th>Date Sent</th>
                      <th>Earnings</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentInvites.map((invite, index) => (
                      <tr key={index}>
                        <td className="font-medium">{invite.email}</td>
                        <td>
                          <span className={`badge ${
                            invite.status === 'joined' ? 'badge-success' : 'badge-warning'
                          }`}>
                            {invite.status}
                          </span>
                        </td>
                        <td className="text-gray-500">{invite.date}</td>
                        <td className="font-semibold text-green-600">{invite.earnings}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}