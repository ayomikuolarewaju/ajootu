'use client'

import React from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Button from '@/components/ui/Button';



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


const SlugPage = ()=> {

  const params = useParams()

  const slugmain = mockGroups.find((f)=> Number(params.slug) === f.id)

  console.log(slugmain)

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Admin': return 'bg-red-100 text-red-700';
      case 'Member': return 'bg-blue-100 text-blue-700';
      case 'Viewer': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className='bg-white flex flex-col h-screen w-full '>
      <Header/>
        <div className='flex flex-col h-full w-full justify-center items-center'>
 
          <div className={`w-12 h-12 ${slugmain?.color} rounded-lg flex items-center justify-center`}>
            <span className="text-white font-semibold">{slugmain?.avatar}</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-gray-900">{slugmain?.name}</h3>
              {slugmain?.isPrivate && (
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-lock-line text-gray-400 text-sm"></i>
                </div>
              )}
            </div>
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium`}>
              {slugmain?.role}
            </span>
          </div>
        
        <div className="flex items-center gap-2 ">
          <Button className="w-[50] h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer m-2">
            <i className="ri-more-line">Join</i>
          </Button>
        </div>
      

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{slugmain?.description}</p>

      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <div className="flex items-center gap-1">
          <i className="ri-user-line"></i>
          <span>{slugmain?.members} members</span>
        </div>
        <div className="flex items-center gap-1">
          <i className="ri-time-line"></i>
          <span>{slugmain?.lastActivity}</span>
        </div>
      </div>
    </div> 
    <Footer/> 
    </div>
  )
}

export default SlugPage     