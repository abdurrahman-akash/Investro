'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { TrendingUp, Star } from 'lucide-react';

export function TopPerformers() {
  const performers = [
    {
      id: '6240',
      name: 'Active Members',
      earnings: '+20E',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      status: 'Complete Task today',
      badge: 'Top Earner'
    },
    {
      id: '1117',
      name: 'Complete Members',
      earnings: '+20E',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      status: 'Complete Task today',
      badge: 'Rising Star'
    },
    {
      id: '4830',
      name: 'Task Members',
      earnings: '+20E',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      status: 'Complete Task today',
      badge: 'Consistent'
    },
    {
      id: '8231',
      name: 'Premium Members',
      earnings: '+20E',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      status: 'Complete Task today',
      badge: 'Elite'
    },
    {
      id: '1877',
      name: 'Elite Members',
      earnings: '+20E',
      avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      status: 'Complete Task today',
      badge: 'Champion'
    }
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center space-x-2 text-lg font-semibold text-gray-900">
            <span>Top Performers</span>
            <TrendingUp className="w-4 h-4 text-green-500" />
          </CardTitle>
          <p className="text-sm text-gray-600">Top performing members today</p>
        </div>
        <div className="flex items-center space-x-1 text-sm text-green-600 font-medium">
          <Star className="w-4 h-4" />
          <span>Live</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {performers.map((performer, index) => (
            <div key={performer.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={performer.avatar} />
                    <AvatarFallback>{performer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  {index < 3 && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{index + 1}</span>
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-medium text-gray-900">Congratulations ****{performer.id}</p>
                  <p className="text-sm text-gray-500">{performer.status}</p>
                  <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full mt-1">
                    {performer.badge}
                  </span>
                </div>
              </div>
              <span className="text-green-600 font-semibold text-lg">{performer.earnings}</span>
            </div>
          ))}
        </div>
        <Button variant="outline" className="w-full mt-4 text-blue-600 border-blue-200 hover:bg-blue-50">
          View all Members →
        </Button>
      </CardContent>
    </Card>
  );
}