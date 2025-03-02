import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import SignInForm from '@/components/SignInForm'
  
function SignInPage() {
    return (
        
            <Card className='w-full mx-auto  max-w-md'>
                <CardHeader className='flex flex-col items-center'>
                        <CardTitle>Sign In</CardTitle>
                         <CardDescription>Welcome back please sign in to conntinue</CardDescription>
                </CardHeader>
               <CardContent>
                         <SignInForm/>
               </CardContent>
                <CardFooter className='flex justify-center '>
                            <p>Dont't have an account </p>
                            <Button className='px-1' variant={'link'}>
                            <Link  href={'/sign-up'}>SignUp</Link>
                            </Button>
                            
                 </CardFooter>
             </Card>

       
    )
}

export default SignInPage
