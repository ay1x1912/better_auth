import {z}  from 'zod'


export const SignInSchem=z.object({
    email:z.string().email(),
    password:z.string().min(6,{message:"Password contain at least 6 character(s)"})

})
export const SignUpSchema=z.object({
    name:z.string().min(2,{message:"Name must contain at least 2 character(s)"}),
    email:z.string().email(),
    password:z.string().min(6,{message:"Password contain at least 6 character(s)"})
}) 