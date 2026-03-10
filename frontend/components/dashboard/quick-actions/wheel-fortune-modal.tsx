'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Gift, 
  Star, 
  Coins, 
  Trophy, 
  Zap,
  RotateCcw,
  Clock,
  Award
} from 'lucide-react';

interface WheelFortuneModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WheelFortuneModal({ isOpen, onClose }: WheelFortuneModalProps) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [lastWin, setLastWin] = useState<string | null>(null);
  const [spinsLeft, setSpinsLeft] = useState(3);

  const prizes = [
    { label: '₹100', color: 'bg-red-500', icon: Coins },
    { label: '₹50', color: 'bg-blue-500', icon: Coins },
    { label: '₹200', color: 'bg-green-500', icon: Coins },
    { label: 'Bonus Spin', color: 'bg-purple-500', icon: RotateCcw },
    { label: '₹75', color: 'bg-orange-500', icon: Coins },
    { label: '₹500', color: 'bg-yellow-500', icon: Trophy },
    { label: '₹25', color: 'bg-pink-500', icon: Coins },
    { label: 'Try Again', color: 'bg-gray-500', icon: Zap }
  ];

  const recentWins = [
    { prize: '₹100', date: '2024-01-15', time: '14:30' },
    { prize: '₹50', date: '2024-01-14', time: '16:45' },
    { prize: 'Bonus Spin', date: '2024-01-13', time: '12:20' },
    { prize: '₹75', date: '2024-01-12', time: '18:15' }
  ];

  const handleSpin = () => {
    if (spinsLeft <= 0 || isSpinning) return;
    
    setIsSpinning(true);
    
    // Simulate spinning animation
    setTimeout(() => {
      const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];
      setLastWin(randomPrize.label);
      setSpinsLeft(prev => prev - 1);
      setIsSpinning(false);
    }, 3000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Gift className="w-5 h-5" />
            <span>Wheel of Fortune</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Game Info */}
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Daily Fortune Wheel</h3>
                  <p className="text-gray-600">Spin the wheel and win amazing prizes!</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{spinsLeft}</div>
                  <div className="text-sm text-gray-600">Spins Left</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Wheel Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Spin to Win!</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-6">
                {/* Wheel Visualization */}
                <div className="relative">
                  <div className={`w-64 h-64 rounded-full border-8 border-gray-300 relative overflow-hidden ${
                    isSpinning ? 'animate-spin' : ''
                  }`} style={{ animationDuration: isSpinning ? '3s' : '0s' }}>
                    {prizes.map((prize, index) => {
                      const angle = (360 / prizes.length) * index;
                      const Icon = prize.icon;
                      return (
                        <div
                          key={index}
                          className={`absolute w-full h-full ${prize.color} opacity-80`}
                          style={{
                            clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos((angle + 45) * Math.PI / 180)}% ${50 + 50 * Math.sin((angle + 45) * Math.PI / 180)}%)`
                          }}
                        >
                          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-white text-xs font-bold text-center">
                            <Icon className="w-4 h-4 mx-auto mb-1" />
                            <div>{prize.label}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Pointer */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                    <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-red-600"></div>
                  </div>
                </div>

                {/* Spin Button */}
                <Button
                  onClick={handleSpin}
                  disabled={spinsLeft <= 0 || isSpinning}
                  className="w-32 h-32 rounded-full text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50"
                >
                  {isSpinning ? (
                    <div className="flex flex-col items-center">
                      <RotateCcw className="w-6 h-6 animate-spin mb-1" />
                      <span className="text-sm">Spinning...</span>
                    </div>
                  ) : spinsLeft > 0 ? (
                    <div className="flex flex-col items-center">
                      <Star className="w-6 h-6 mb-1" />
                      <span>SPIN</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <Clock className="w-6 h-6 mb-1" />
                      <span className="text-sm">Come Back Tomorrow</span>
                    </div>
                  )}
                </Button>

                {/* Last Win */}
                {lastWin && (
                  <Card className="w-full bg-green-50 border-green-200">
                    <CardContent className="p-4 text-center">
                      <div className="flex items-center justify-center space-x-2 text-green-700">
                        <Trophy className="w-5 h-5" />
                        <span className="font-semibold">Congratulations!</span>
                      </div>
                      <div className="text-2xl font-bold text-green-800 mt-1">You won {lastWin}!</div>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>

            {/* Prize Information & History */}
            <div className="space-y-6">
              {/* Available Prizes */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="w-5 h-5" />
                    <span>Available Prizes</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {prizes.map((prize, index) => {
                      const Icon = prize.icon;
                      return (
                        <div key={index} className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                          <div className={`w-6 h-6 ${prize.color} rounded-full flex items-center justify-center`}>
                            <Icon className="w-3 h-3 text-white" />
                          </div>
                          <span className="font-medium text-gray-900">{prize.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Wins */}
              <Card>
                <CardHeader>
                  <CardTitle>Your Recent Wins</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentWins.map((win, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                            <Trophy className="w-4 h-4 text-yellow-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{win.prize}</div>
                            <div className="text-sm text-gray-500">{win.date} at {win.time}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Rules */}
              <Card>
                <CardHeader>
                  <CardTitle>Game Rules</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• You get 3 free spins per day</li>
                    <li>• Spins reset at midnight</li>
                    <li>• Prizes are added to your account instantly</li>
                    <li>• Bonus spins can be used immediately</li>
                    <li>• Minimum withdrawal amount applies</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}