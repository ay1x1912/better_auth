import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import SignUpForm from '@/components/SignUpForm'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
function SignUpPage() {
    return (
        <Card className='w-full max-w-md  mx-auto'>
  <CardHeader className='flex flex-col items-center '>
    <CardTitle>Sign Up</CardTitle>
    <CardDescription>hello</CardDescription>
  </CardHeader>
  <CardContent> 
    <SignUpForm/>
  </CardContent>
  <CardFooter className='flex justify-center'>
    <p>Already have an account ?</p>
    <Button className='p-1' variant={'link'}>
        <Link href={'/sign-in'}>Sign In</Link>
    </Button>
  </CardFooter>
</Card>
    )
}

export default SignUpPage
