"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 
import {  SigninSchema } from '@/lib/schema'
function SignInForm() {
    const form = useForm<z.infer<typeof SigninSchema>>({
        resolver: zodResolver(SigninSchema),
        defaultValues: {
          email:"",
          password:""
        },
      })
     
     
      function onSubmit(values: z.infer<typeof SigninSchema>) {
        
        console.log(values)
      }
    return (
        <div>
            <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type='email' placeholder="xyz@izxy.con" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type='password' placeholder="******" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex justify-center'>
        <Button className='w-full' type="submit">Sign In</Button>
            
        </div>
      </form>
    </Form>
        </div>
    )
}

export default SignInForm
