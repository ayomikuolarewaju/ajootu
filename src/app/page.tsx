'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import heroimg from '@/assests/img.png';
import Image from 'next/image';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="mb-10">
        <Header/>
      </div>
      
      {/* Hero Section */}
      <section>
        <div>
          <Image
            src={heroimg}
            fill
            alt="Background"
            className="object-cover object-center"
            priority
            
          />
       
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/60 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl text-left">
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Seamless Team Collaboration Made Simple
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Create groups, invite members, and manage your team with powerful role-based access control. 
              Experience the future of team collaboration with our intuitive platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register">
                <Button size="lg" className="text-lg px-8 py-4">
                  Get Started Free
                </Button>
              </Link>
              <Link href="/groups">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Explore Groups
                </Button>
              </Link>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white z-50 mt-[100px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Team Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to streamline your team collaboration and boost productivity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-group-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Easy Group Creation</h3>
              <p className="text-gray-600">
                Create and customize groups in seconds. Set up project teams, departments, or any organizational structure that fits your needs.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-user-add-line text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Member Invitations</h3>
              <p className="text-gray-600">
                Invite team members via email or shareable links. Streamlined onboarding process gets your team up and running quickly.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-shield-user-line text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Role-Based Access Control</h3>
              <p className="text-gray-600">
                Granular permissions system ensures the right people have the right access. Manage admin, member, and viewer roles effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600">Active Teams</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Team Collaboration?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of teams who trust TeamSync for their collaboration needs. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="hover:border-white hover:text-white bg-blue-700  text-lg px-8 py-4 text-blue-700 font-bold">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="hover:border-white hover:text-white hover:bg-blue-700 bg-white text-lg px-8 py-4 text-blue-700 font-bold">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
