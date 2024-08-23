"use client";
import { Briefcase } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react"


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from 'next/image';

import { Button } from '../../components/ui/button';
import { Separator } from '@/components/ui/separator';

const Navbar = () => {

  const { data: session } = useSession()

  // const isLogin = false;

  return (
    <>
    <nav className={`flex justify-center items-center h-[40px] md:h-[90px] ${session ? 'bg-black text-white' : 'bg-transparent'} transition-colors duration-500`}>
      <div className='flex justify-between items-center w-full max-w-7xl'>
        <div className='logo flex justify-start items-center'>
          <h1 className='text-3xl flex justify-center items-center font-bold '>
            <Briefcase size={38} className='inline m-2'/>
            JobNest
          </h1>
        </div>
        <div className='flex justify-center font-light items-center gap-10 text-sm md:text-lg'>
          <Link href='/' className='hover:text-gray-400 transition-colors duration-300'>Find job</Link>
          <Link href='/' className='hover:text-gray-400 transition-colors duration-300'>Message</Link>
          <Link href='/' className='hover:text-gray-400 transition-colors duration-300'>Hiring</Link>
          <Link href='/' className='hover:text-gray-400 transition-colors duration-300'>Community</Link>
          <Link href='/' className='hover:text-gray-400 transition-colors duration-300'>FAQ</Link>
        </div>
        <div className='profile'>
          {
            session ? (
              <DropdownMenu>
                <DropdownMenuTrigger className='flex gap-2'>
                  <Image src="https://avatar.vercel.sh/mohit" className="rounded-full border-2 border-gray-500" alt='Profile' width={34} height={34} />
                  <span className='text-lg font-semibold'>Hi, User</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>About</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem onClick={()=>signOut()}>Sign Out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className='flex gap-2'>
                <Button variant="outline" onClick={()=> signIn()}>Login</Button>
                <Button>Create an Account</Button>
              </div>
            )
          }
        </div>
      </div>
    </nav>
    <Separator/>
    </>
  );
}

export default Navbar;
