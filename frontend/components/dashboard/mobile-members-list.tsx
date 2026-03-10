'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function MobileMembersList() {
  const members = [
    {
      id: '6240',
      status: 'Complete task today',
      earnings: '20E',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: '1117',
      status: 'Complete task today',
      earnings: '20E',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: '4830',
      status: 'Complete task today',
      earnings: '20E',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: '8231',
      status: 'Complete task today',
      earnings: '20E',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: '1877',
      status: 'Complete task today',
      earnings: '20E',
      avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Membership list</h2>
      <div className="space-y-4">
        {members.map((member) => (
          <div key={member.id} className="flex items-center justify-between p-3 action-card rounded-lg">
            <div className="flex items-center space-x-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src={member.avatar} />
                <AvatarFallback>M</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-gray-900 font-medium">Congratulations ****{member.id}</p>
                <p className="text-gray-600 text-sm">{member.status}</p>
              </div>
            </div>
            <span className="text-green-600 font-semibold">{member.earnings}</span>
          </div>
        ))}
      </div>
    </div>
  );
}