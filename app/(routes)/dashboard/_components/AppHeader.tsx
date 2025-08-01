import { UserButton } from '@clerk/nextjs'
//import { Link } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const menuOptions = [
  {
    id: 1,
    name: 'Home',
    path: '/dashboard'
  },
   {
    id: 2,
    name: 'History',
    path: '/dashboard/history'
  },
   {
    id: 3,
    name: 'Pricing',
    path: '/dashboard/billing'
  },
   {
    id: 4,
    name: 'Profile',
    path: '/profile'
  },
]
function AppHeader() {
  return (
    <div className='flex items-center justify-between p-3 shadow px-10 md:px-20 lg:px-40 -screen bg-gradient-to-br from-[#00C9FF] via-[#92FE9D] to-[#FFDEE9] text-[#0D1B2A] '> 
      <Image src={'/logo.png'} alt='logo' width={180} height={90}/>
      <div className='hidden md:flex gap-15 items-center '>
          {menuOptions.map((option,index)=>(
              <Link key={index} href={option.path} >
                   <h2 className='hover:font-bold cursor-pointer transition-all'>{option.name}</h2>
              </Link>
          ))}
      </div>
       <UserButton />
    </div>
  )
}

export default AppHeader
