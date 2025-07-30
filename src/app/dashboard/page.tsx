
'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const mockActivities = [
  { id: 1, user: 'Sarah Johnson', action: 'created group', target: 'Marketing Team', time: '2 hours ago', avatar: 'SJ' },
  { id: 2, user: 'Mike Chen', action: 'joined group', target: 'Product Development', time: '3 hours ago', avatar: 'MC' },
  { id: 3, user: 'Emily Davis', action: 'updated permissions in', target: 'Design System', time: '5 hours ago', avatar: 'ED' },
  { id: 4, user: 'James Wilson', action: 'invited 3 members to', target: 'Engineering', time: '1 day ago', avatar: 'JW' },
  { id: 5, user: 'Lisa Brown', action: 'left group', target: 'Quality Assurance', time: '1 day ago', avatar: 'LB' }
];

const mockStats = {
  totalGroups: 6,
  totalMembers: 56,
  activeGroups: 4,
  pendingInvitations: 3
};

export default function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 bg-gray-50 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-2">Overview of your team collaboration activity</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Groups</p>
                  <p className="text-2xl font-bold text-gray-900">{mockStats.totalGroups}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <i className="ri-group-line text-blue-600 text-xl"></i>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-green-600 text-sm font-medium">+2 this month</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Members</p>
                  <p className="text-2xl font-bold text-gray-900">{mockStats.totalMembers}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <i className="ri-user-line text-green-600 text-xl"></i>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-green-600 text-sm font-medium">+12 this month</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Groups</p>
                  <p className="text-2xl font-bold text-gray-900">{mockStats.activeGroups}</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <i className="ri-pulse-line text-purple-600 text-xl"></i>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-gray-600 text-sm">Active today</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Invites</p>
                  <p className="text-2xl font-bold text-gray-900">{mockStats.pendingInvitations}</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <i className="ri-mail-line text-orange-600 text-xl"></i>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-orange-600 text-sm font-medium">Awaiting response</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Activity */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedPeriod('24h')}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                        selectedPeriod === '24h' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      24h
                    </button>
                    <button
                      onClick={() => setSelectedPeriod('7d')}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                        selectedPeriod === '7d' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      7d
                    </button>
                    <button
                      onClick={() => setSelectedPeriod('30d')}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                        selectedPeriod === '30d' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      30d
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {mockActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">{activity.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">
                          <span className="font-medium">{activity.user}</span> {activity.action}{' '}
                          <span className="font-medium">{activity.target}</span>
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <Link href="/activity">
                    <Button variant="outline">View All Activity</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <Link href="/groups" className="block">
                    <Button variant="outline" className="w-full justify-start">
                      <i className="ri-add-line mr-2"></i>
                      Create Group
                    </Button>
                  </Link>
                  <Link href="/invite" className="block">
                    <Button variant="outline" className="w-full justify-start">
                      <i className="ri-user-add-line mr-2"></i>
                      Invite Members
                    </Button>
                  </Link>
                  <Link href="/settings" className="block">
                    <Button variant="outline" className="w-full justify-start">
                      <i className="ri-settings-line mr-2"></i>
                      Settings
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Top Groups */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Most Active Groups</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-medium">PD</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Product Development</p>
                        <p className="text-xs text-gray-500">15 members</p>
                      </div>
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-arrow-right-s-line text-gray-400"></i>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-medium">MT</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Marketing Team</p>
                        <p className="text-xs text-gray-500">8 members</p>
                      </div>
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-arrow-right-s-line text-gray-400"></i>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-medium">DS</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Design System</p>
                        <p className="text-xs text-gray-500">5 members</p>
                      </div>
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-arrow-right-s-line text-gray-400"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
