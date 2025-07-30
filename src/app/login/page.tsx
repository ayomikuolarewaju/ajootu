
'use client';

import { MemberLogin,FormState } from "@/actions/actionlogin"
import { useActionState } from "react"

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/ui/Button';

const Login = () =>{

   const initialState :FormState ={
    error:{},
  }
 
  const [state,formAction,isSubmitting] = useActionState(MemberLogin,initialState)

  return (

    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 bg-gray-50 py-12 px-6">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Login Your Account</h1>
              <p className="text-gray-600">Join thousands of teams collaborating with Ajootu</p>
            </div>

            <form action={formAction} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    state.error.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="john@example.com"
                />
                {state?.error.email && <p className="text-red-500">{state.error.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    state.error.password ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="••••••••"
                />
                {state?.error.password && <p className="text-red-500">{state.error.password}</p>}
              </div>
              
              <Button
                disabled={isSubmitting}
                className="w-full"
                size="lg"
              >
                {isSubmitting ? 'Login...' : 'Login'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Dont have an account?{' '}
                <Link href="/register" className="text-blue-600 hover:text-blue-500 font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}


export default Login