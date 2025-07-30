
'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';

import GroupCard from './GroupCard';

const mockGroups = [
  {
    id: 1,
    name: 'Product Development',
    description: 'Main product development team working on core features and improvements',
    members: 12,
    role: 'Admin',
    avatar: 'PD',
    color: 'bg-blue-500',
    lastActivity: '2 hours ago',
    isPrivate: false
  },
  {
    id: 2,
    name: 'Marketing Team',
    description: 'Creative marketing campaigns and brand strategy coordination',
    members: 8,
    role: 'Member',
    avatar: 'MT',
    color: 'bg-green-500',
    lastActivity: '1 day ago',
    isPrivate: true
  },
  {
    id: 3,
    name: 'Design System',
    description: 'UI/UX design standards and component library maintenance',
    members: 5,
    role: 'Member',
    avatar: 'DS',
    color: 'bg-purple-500',
    lastActivity: '3 hours ago',
    isPrivate: false
  },
  {
    id: 4,
    name: 'Quality Assurance',
    description: 'Testing protocols and quality control for all product releases',
    members: 6,
    role: 'Viewer',
    avatar: 'QA',
    color: 'bg-orange-500',
    lastActivity: '5 hours ago',
    isPrivate: false
  },
  {
    id: 5,
    name: 'Customer Success',
    description: 'Customer support and success initiatives to improve user experience',
    members: 10,
    role: 'Admin',
    avatar: 'CS',
    color: 'bg-pink-500',
    lastActivity: '1 hour ago',
    isPrivate: true
  },
  {
    id: 6,
    name: 'Engineering',
    description: 'Backend infrastructure and system architecture development',
    members: 15,
    role: 'Member',
    avatar: 'EN',
    color: 'bg-indigo-500',
    lastActivity: '4 hours ago',
    isPrivate: false
  }
];

export default function Groups() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const filteredGroups = mockGroups.filter(group => {
    const matchesSearch = group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         group.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterType === 'all') return matchesSearch;
    if (filterType === 'admin') return matchesSearch && group.role === 'Admin';
    if (filterType === 'member') return matchesSearch && group.role === 'Member';
    if (filterType === 'private') return matchesSearch && group.isPrivate;
    if (filterType === 'public') return matchesSearch && !group.isPrivate;
    
    return matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 bg-gray-50 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Groups</h1>
                <p className="text-gray-600 mt-2">Manage your team groups and collaborate effectively</p>
              </div>
              <Button onClick={() => setIsCreateModalOpen(true)} className="flex items-center gap-2">
                <i className="ri-add-line"></i>
                Create Group
              </Button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="ri-search-line text-gray-400"></i>
                </div>
                <input
                  type="text"
                  placeholder="Search groups..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setFilterType('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    filterType === 'all' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilterType('admin')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    filterType === 'admin' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Admin
                </button>
                <button
                  onClick={() => setFilterType('member')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    filterType === 'member' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Member
                </button>
                <button
                  onClick={() => setFilterType('private')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    filterType === 'private' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Private
                </button>
              </div>
            </div>
          </div>

          {/* Groups Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGroups.map((group) => (
              <GroupCard key={group.id} group={group} />
            ))}
          </div>

          {/* Empty State */}
          {filteredGroups.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-group-line text-gray-400 text-2xl"></i>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No groups found</h3>
              <p className="text-gray-500 mb-4">
                {searchTerm ? 'Try adjusting your search terms' : 'Create your first group to get started'}
              </p>
              {!searchTerm && (
                <Button onClick={() => setIsCreateModalOpen(true)}>
                  Create Group
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

{/*       <CreateGroupModal 
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
 */}
      <Footer />
    </div>
  );
}
