
'use client';

import Link from 'next/link';
import Button from '../../components/ui/Button';

interface Group {
  id: number;
  name: string;
  description: string;
  members: number;
  role: string;
  avatar: string;
  color: string;
  lastActivity: string;
  isPrivate: boolean;
}

interface GroupCardProps {
  group: Group;
}

export default function GroupCard({ group }: GroupCardProps) {
  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Admin': return 'bg-red-100 text-red-700';
      case 'Member': return 'bg-blue-100 text-blue-700';
      case 'Viewer': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 ${group.color} rounded-lg flex items-center justify-center`}>
            <span className="text-white font-semibold">{group.avatar}</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-gray-900">{group.name}</h3>
              {group.isPrivate && (
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-lock-line text-gray-400 text-sm"></i>
                </div>
              )}
            </div>
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(group.role)}`}>
              {group.role}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
            <i className="ri-more-line"></i>
          </button>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{group.description}</p>

      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <div className="flex items-center gap-1">
          <i className="ri-user-line"></i>
          <span>{group.members} members</span>
        </div>
        <div className="flex items-center gap-1">
          <i className="ri-time-line"></i>
          <span>{group.lastActivity}</span>
        </div>
      </div>

      <div className="flex gap-2">
        <Link href={`/groups/${group.id}`} className="flex-1">
          <Button variant="outline" className="w-full">
            View Group
          </Button>
        </Link>
        <Link href={`/groups/${group.id}/chat`}>
          <Button variant="ghost" className="px-3">
            <i className="ri-message-line"></i>
          </Button>
        </Link>
      </div>
    </div>
  );
}
