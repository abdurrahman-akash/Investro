'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Download, 
  Wallet, 
  Building2, 
  CreditCard, 
  AlertCircle,
  Check,
  DollarSign
} from 'lucide-react';

interface WithdrawalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WithdrawalModal({ isOpen, onClose }: WithdrawalModalProps) {
  const [amount, setAmount] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('bank');
  const [accountDetails, setAccountDetails] = useState({
    accountNumber: '',
    ifscCode: '',
    accountHolder: '',
    upiId: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const availableBalance = 2450;
  const minimumWithdrawal = 500;

  const withdrawalMethods = [
    {
      id: 'bank',
      name: 'Bank Transfer',
      icon: Building2,
      description: 'Direct bank account transfer',
      processingTime: '1-3 business days',
      fee: '₹10'
    },
    {
      id: 'upi',
      name: 'UPI Transfer',
      icon: CreditCard,
      description: 'Instant UPI payment',
      processingTime: 'Instant',
      fee: 'Free'
    }
  ];

  const recentWithdrawals = [
    { id: 'WTH001', amount: '₹1,000', method: 'Bank Transfer', status: 'completed', date: '2024-01-12' },
    { id: 'WTH002', amount: '₹750', method: 'UPI', status: 'processing', date: '2024-01-10' },
    { id: 'WTH003', amount: '₹500', method: 'Bank Transfer', status: 'completed', date: '2024-01-08' }
  ];

  const handleWithdrawal = () => {
    if (!amount || parseFloat(amount) < minimumWithdrawal || parseFloat(amount) > availableBalance) return;
    
    setIsProcessing(true);
    
    // Simulate withdrawal processing
    setTimeout(() => {
      setIsProcessing(false);
      onClose();
    }, 3000);
  };

  const selectedWithdrawalMethod = withdrawalMethods.find(method => method.id === selectedMethod);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Download className="w-5 h-5" />
            <span>Withdraw Funds</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Available Balance */}
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Available Balance</h3>
                  <div className="text-3xl font-bold text-green-600">₹{availableBalance.toLocaleString()}</div>
                  <p className="text-sm text-gray-600 mt-1">Minimum withdrawal: ₹{minimumWithdrawal}</p>
                </div>
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                  <Wallet className="w-8 h-8 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Withdrawal Form */}
            <div className="space-y-6">
              {/* Amount */}
              <Card>
                <CardHeader>
                  <CardTitle>Withdrawal Amount</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="withdrawAmount">Amount (₹)</Label>
                    <Input
                      id="withdrawAmount"
                      type="number"
                      placeholder="Enter amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="form-input text-lg"
                      min={minimumWithdrawal}
                      max={availableBalance}
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Min: ₹{minimumWithdrawal}</span>
                      <span>Max: ₹{availableBalance}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {[500, 1000, 2000].map((quickAmount) => (
                      <Button
                        key={quickAmount}
                        variant="outline"
                        onClick={() => setAmount(quickAmount.toString())}
                        className="btn-secondary"
                        disabled={quickAmount > availableBalance}
                      >
                        ₹{quickAmount}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Withdrawal Method */}
              <Card>
                <CardHeader>
                  <CardTitle>Withdrawal Method</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {withdrawalMethods.map((method) => {
                    const Icon = method.icon;
                    return (
                      <div
                        key={method.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-all ${
                          selectedMethod === method.id
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedMethod(method.id)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            selectedMethod === method.id ? 'bg-green-600' : 'bg-gray-100'
                          }`}>
                            <Icon className={`w-5 h-5 ${
                              selectedMethod === method.id ? 'text-white' : 'text-gray-600'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-900">{method.name}</div>
                            <div className="text-sm text-gray-500">{method.description}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-gray-900">Fee: {method.fee}</div>
                            <div className="text-xs text-gray-500">{method.processingTime}</div>
                          </div>
                          {selectedMethod === method.id && (
                            <Check className="w-5 h-5 text-green-600" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Account Details */}
              <Card>
                <CardHeader>
                  <CardTitle>
                    {selectedMethod === 'bank' ? 'Bank Account Details' : 'UPI Details'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedMethod === 'bank' ? (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="accountNumber">Account Number</Label>
                        <Input
                          id="accountNumber"
                          placeholder="Enter account number"
                          value={accountDetails.accountNumber}
                          onChange={(e) => setAccountDetails(prev => ({ ...prev, accountNumber: e.target.value }))}
                          className="form-input"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ifscCode">IFSC Code</Label>
                        <Input
                          id="ifscCode"
                          placeholder="Enter IFSC code"
                          value={accountDetails.ifscCode}
                          onChange={(e) => setAccountDetails(prev => ({ ...prev, ifscCode: e.target.value }))}
                          className="form-input"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="accountHolder">Account Holder Name</Label>
                        <Input
                          id="accountHolder"
                          placeholder="Enter account holder name"
                          value={accountDetails.accountHolder}
                          onChange={(e) => setAccountDetails(prev => ({ ...prev, accountHolder: e.target.value }))}
                          className="form-input"
                        />
                      </div>
                    </>
                  ) : (
                    <div className="space-y-2">
                      <Label htmlFor="upiId">UPI ID</Label>
                      <Input
                        id="upiId"
                        placeholder="Enter UPI ID (e.g., user@paytm)"
                        value={accountDetails.upiId}
                        onChange={(e) => setAccountDetails(prev => ({ ...prev, upiId: e.target.value }))}
                        className="form-input"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Summary & History */}
            <div className="space-y-6">
              {/* Withdrawal Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Withdrawal Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Withdrawal Amount</span>
                      <span className="font-medium">₹{amount || '0'}</span>
                    </div>
                    
                    {selectedWithdrawalMethod && (
                      <>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Processing Fee</span>
                          <span className="font-medium">{selectedWithdrawalMethod.fee}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-gray-600">Processing Time</span>
                          <span className="font-medium">{selectedWithdrawalMethod.processingTime}</span>
                        </div>
                      </>
                    )}
                    
                    <hr />
                    
                    <div className="flex justify-between text-lg font-semibold">
                      <span>You&apos;ll Receive</span>
                      <span>₹{amount ? (
                        parseFloat(amount) - 
                        (selectedWithdrawalMethod?.fee !== 'Free' 
                          ? parseFloat(selectedWithdrawalMethod?.fee.replace('₹', '') || '0') 
                          : 0)
                      ).toFixed(2) : '0'}</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                      <div className="text-sm text-blue-800">
                        <p className="font-medium">Important Information:</p>
                        <ul className="mt-1 space-y-1">
                          <li>• Withdrawals are processed during business hours</li>
                          <li>• Ensure account details are correct</li>
                          <li>• Processing times may vary by bank</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handleWithdrawal}
                    disabled={
                      !amount || 
                      parseFloat(amount) < minimumWithdrawal || 
                      parseFloat(amount) > availableBalance ||
                      isProcessing ||
                      (selectedMethod === 'bank' && (!accountDetails.accountNumber || !accountDetails.ifscCode || !accountDetails.accountHolder)) ||
                      (selectedMethod === 'upi' && !accountDetails.upiId)
                    }
                    className="w-full btn-primary"
                  >
                    {isProcessing ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Download className="w-4 h-4" />
                        <span>Withdraw Funds</span>
                      </div>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Withdrawals */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Withdrawals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentWithdrawals.map((withdrawal) => (
                      <div key={withdrawal.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium text-gray-900">{withdrawal.amount}</div>
                          <div className="text-sm text-gray-500">{withdrawal.method} • {withdrawal.date}</div>
                        </div>
                        <span className={`badge ${
                          withdrawal.status === 'completed' ? 'badge-success' : 
                          withdrawal.status === 'processing' ? 'badge-warning' : 'badge-error'
                        }`}>
                          {withdrawal.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Withdrawal Limits */}
              <Card className="bg-yellow-50 border-yellow-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-yellow-800">
                    <DollarSign className="w-5 h-5" />
                    <span>Withdrawal Limits</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-yellow-800">
                    <div className="flex justify-between">
                      <span>Daily Limit:</span>
                      <span className="font-medium">₹50,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly Limit:</span>
                      <span className="font-medium">₹5,00,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Used Today:</span>
                      <span className="font-medium">₹0</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}