import Link from 'next/link'
import React from 'react'
import { FaEarthAsia } from "react-icons/fa6";
import { buttonVariants } from './ui/button';

function NabBar() {
    return (
        <div className='border-b'>
             <div className='px-4 flex  items-center justify-between mx-auto h-16 max-w-4xl'>
               <Link href={'/'} className='flex items-center gap-2'>
                <FaEarthAsia size={'40'}/>
                <span className='font-bold text-2xl'>Earthy</span>
               </Link>
               <Link href={"/sign-in"} className={buttonVariants()}>
               signIn
               </Link>
             </div>
        </div>
    )
}

export default NabBar
