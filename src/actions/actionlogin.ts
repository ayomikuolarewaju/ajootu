"use server"

import { prisma } from "./db";
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

  export type FormState = {
  error: SubErrors
}
  export type SubErrors = {
    password?:string;
    email?:string;
  }
 
 
 export async function MemberLogin(prevState:FormState,formdata:FormData){
    
    const password = formdata.get('password') as string
    const email = formdata.get('email') as string
   

    const error:SubErrors ={}

    if(!password){
        error.password = "Password is required"
    }
    if(!email){
      error.email = "email is required"
  }
 
    if(Object.keys(error).length > 0){
       return{error}
    }
  
   try {

     const res = await prisma.User.findOne({
      password,
      email
     })

    if(!res.ok){
      const errorData = await res.json()
      return {error:errorData}
    }
    
   } catch (error) {
    console.error('Fetch error:', error);
   }
    console.log('Form submitted successfully');

    const cookieStore = await cookies()
    
    cookieStore.set('formSuccess', 'true', {
    httpOnly: true,
    path: '/',
    maxAge: 600, 
  })

     return redirect('/')
  }