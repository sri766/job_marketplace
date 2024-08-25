"use client";
import { Slider } from '@/components/ui/slider'
import { Separator } from '@/components/ui/separator'
import { BriefcaseBusiness, Handshake, LocateIcon, Search } from 'lucide-react'
import React from 'react'
import { useSession } from 'next-auth/react';
import  JobListingPage  from '../components/Joblisting';

const page = () => {

  const { data: session } = useSession()

  return (
    <>
    {
      
      session ? (
        <>
        <div className='flex w-full justify-evenly py-6 items-center bg-black h-[100px] text-white'>
          <div className='flex justify-center items-center gap-2'>
            <div className='h-full w-full flex justify-center items-center border rounded-full p-2'>
              <Search/>
            </div>
            <h1 className='text-lg'>Designer</h1>
          </div>
          <Separator orientation='vertical'/>
          <div className='flex justify-center items-center gap-2'>
            <LocateIcon className='h-full w-full flex justify-center items-center border rounded-full p-2'/>
            <h1 className='text-lg'>Location</h1>
          </div>
          <Separator orientation='vertical'/>
          <div className='flex justify-center items-center gap-2'>
            <BriefcaseBusiness className='h-full w-full flex justify-center items-center border rounded-full p-2'/>
          <h1 className='text-lg'>Experience</h1>
          </div>
          <Separator orientation='vertical'/>
          <div className='flex justify-center items-center gap-2'>
            <Handshake className='flex justify-center items-center border rounded-full p-2' size={44} />
            <h1 className='text-lg'>Job Type</h1>
          </div>
          <Separator orientation='vertical'/>
          <div className='flex flex-col justify-center items-center'>
            <Slider defaultValue={[33]} max={100} step={1} />
            <h1 className='text-lg'>Salary Range</h1>
          </div>

        </div>
        
        <JobListingPage/>
        
        </>
      ):(
        <>
          <div className=''>
            <h1>Please Sign in to See the page!!</h1>
          </div>
        </>
      )
    }
    </>
  )
}

export default page
