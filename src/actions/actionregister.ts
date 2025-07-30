"use server";

import { redirect } from "next/navigation";
import { prisma } from "./db";
import {cookies} from "next/headers"


 export type FormState = {
  error: SubErrors
}
  export type SubErrors = {
    firstName?:string;
    lastName?:string;
    email?:string;
    password?:string
    confirmPassword?:string
    isAgreed?:boolean;
  }

export async function CreateUser(prevState:FormState,formdata:FormData) {

  const firstName = formdata.get("firstName");
  const lastName = formdata.get("lastName");
  const email = formdata.get("email");
  const password = formdata.get("password")
  const confirmPassword = formdata.get("confirmPassword")
  const isAgreed  = formdata.get("isAgreed")

  const error:SubErrors ={}

    if(!firstName){
      error.firstName = "First Name is required"
    }

     if(!lastName){
      error.lastName = "Last Name is required"
    }

    if(!password){
        error.password = "Password is required"
    }

     if(!confirmPassword){
      error.confirmPassword = "Confirm Password is required"
    }

    if(!email){
      error.email = "Email is required"
  }
 
    if(!isAgreed){
       error.isAgreed = true
    }

    if(Object.keys(error).length > 0){
       return{error}
    }

    try {
    
          const res = await prisma.student.create({ data:{

            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            isAgreed
           
          }});
    
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
 
  return redirect("/");
}

