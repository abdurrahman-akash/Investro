'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  CreditCard, 
  Wallet, 
  Smartphone, 
  Building2, 
  Shield,
  Check,
  AlertCircle,
  Plus
} from 'lucide-react';

interface RechargeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RechargeModal({ isOpen, onClose }: RechargeModalProps) {
  const [amount, setAmount] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const quickAmounts = [100, 500, 1000, 2000, 5000, 10000];

  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: CreditCard,
      description: 'Visa, Mastercard, Rupay',
      fee: '2.5%',
      processingTime: 'Instant'
    },
    {
      id: 'upi',
      name: 'UPI Payment',
      icon: Smartphone,
      description: 'PhonePe, GPay, Paytm',
      fee: 'Free',
      processingTime: 'Instant'
    },
    {
      id: 'netbanking',
      name: 'Net Banking',
      icon: Building2,
      description: 'All major banks',
      fee: '1.5%',
      processingTime: '2-5 minutes'
    },
    {
      id: 'wallet',
      name: 'Digital Wallet',
      icon: Wallet,
      description: 'Paytm, PhonePe Wallet',
      fee: '1%',
      processingTime: 'Instant'
    }
  ];

  const recentTransactions = [
    { id: 'TXN001', amount: '₹1,000', method: 'UPI', status: 'completed', date: '2024-01-15' },
    { id: 'TXN002', amount: '₹500', method: 'Card', status: 'completed', date: '2024-01-12' },
    { id: 'TXN003', amount: '₹2,000', method: 'Net Banking', status: 'completed', date: '2024-01-10' }
  ];

  const handleRecharge = () => {
    if (!amount || parseFloat(amount) < 100) return;
    
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      // Show success message and close modal
      onClose();
    }, 3000);
  };

  const selectedPaymentMethod = paymentMethods.find(method => method.id === selectedMethod);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <CreditCard className="w-5 h-5" />
            <span>Recharge Account</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Current Balance */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Current Balance</h3>
                  <div className="text-3xl font-bold text-blue-600">₹2,450.00</div>
                </div>
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <Wallet className="w-8 h-8 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recharge Form */}
            <div className="space-y-6">
              {/* Amount Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Select Amount</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="amount">Enter Amount (₹)</Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="Enter amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="form-input text-lg"
                      min="100"
                    />
                    <p className="text-sm text-gray-500">Minimum recharge amount: ₹100</p>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {quickAmounts.map((quickAmount) => (
                      <Button
                        key={quickAmount}
                        variant="outline"
                        onClick={() => setAmount(quickAmount.toString())}
                        className="btn-secondary"
                      >
                        ₹{quickAmount}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Payment Methods */}
              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {paymentMethods.map((method) => {
                    const Icon = method.icon;
                    return (
                      <div
                        key={method.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-all ${
                          selectedMethod === method.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedMethod(method.id)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            selectedMethod === method.id ? 'bg-blue-600' : 'bg-gray-100'
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
                            <Check className="w-5 h-5 text-blue-600" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </div>

            {/* Summary & Recent Transactions */}
            <div className="space-y-6">
              {/* Payment Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Payment Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Recharge Amount</span>
                      <span className="font-medium">₹{amount || '0'}</span>
                    </div>
                    
                    {selectedPaymentMethod && (
                      <>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Payment Method</span>
                          <span className="font-medium">{selectedPaymentMethod.name}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-gray-600">Processing Fee</span>
                          <span className="font-medium">
                            {selectedPaymentMethod.fee === 'Free' 
                              ? 'Free' 
                              : `₹${amount ? (parseFloat(amount) * parseFloat(selectedPaymentMethod.fee) / 100).toFixed(2) : '0'}`
                            }
                          </span>
                        </div>
                      </>
                    )}
                    
                    <hr />
                    
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total Amount</span>
                      <span>₹{amount ? (
                        parseFloat(amount) + 
                        (selectedPaymentMethod?.fee !== 'Free' 
                          ? parseFloat(amount) * parseFloat(selectedPaymentMethod?.fee || '0') / 100 
                          : 0)
                      ).toFixed(2) : '0'}</span>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5" />
                      <div className="text-sm text-yellow-800">
                        <p className="font-medium">Important Notes:</p>
                        <ul className="mt-1 space-y-1">
                          <li>• Funds will be added instantly after successful payment</li>
                          <li>• Refunds take 3-5 business days</li>
                          <li>• Keep transaction ID for reference</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handleRecharge}
                    disabled={!amount || parseFloat(amount) < 100 || isProcessing}
                    className="w-full btn-primary"
                  >
                    {isProcessing ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Plus className="w-4 h-4" />
                        <span>Recharge Now</span>
                      </div>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Transactions */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Recharges</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentTransactions.map((transaction) => (
                      <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium text-gray-900">{transaction.amount}</div>
                          <div className="text-sm text-gray-500">{transaction.method} • {transaction.date}</div>
                        </div>
                        <span className="badge badge-success">
                          {transaction.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Security Info */}
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2 text-green-700">
                    <Shield className="w-5 h-5" />
                    <span className="font-medium">Secure Payment</span>
                  </div>
                  <p className="text-sm text-green-600 mt-1">
                    Your payment information is encrypted and secure. We never store your card details.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}