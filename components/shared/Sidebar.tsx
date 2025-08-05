'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { SignedIn, SignedOut,UserButton } from '@clerk/nextjs'
import { navLinks } from '../../constants'
import { usePathname } from 'next/navigation'
import {Button} from '../ui/button'

function Sidebar() {
  const pathname = usePathname() // Fixed: Added parentheses to call the hook
  
  return (
    <aside className='hidden h-screen w-72 bg-white p-5 shadow-md shadow-purple-200/50 lg:flex'>
      <div className='flex size-full flex-col gap-4'>
        <Link href="/" className=' flex items-center gap-2 md:py-2'>
          <Image src="/assets/images/logo-text.svg" alt="Imaginary Logo" width={150} height={50} />
        </Link>

        <nav className='h-full flex-col justify-between md:flex md:gap-4'>
    <SignedIn>
            <ul className='hidden w-full flex-col items-start gap-2 md:flex'>
              {navLinks.map((link) => {
                const isActive = link.route === pathname

                return (
                  <li 
                    key={link.route} 
                    className={` flex justify-center items-center p-16-semibold w-full whitespace-nowrap rounded-full bg-cover transition-all hover:bg-purple-100 hover:shadow-inner ${
                      isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
                    }`}
                  >
                  <Link className='p-16-semibold flex size-full gap-4 p-4' href={link.route}>
                  <Image 
                  src={link.icon}
                  alt="logo"
                  width={24}
                  height={24}
                  className={`${isActive && 'brightness-200'}`}
                  />
                  
                  
                  
                    
                      {link.label}
                    </Link>
                  </li>
                )
              })}

              <li className='flex justify-center items-center cursor-pointer gap-2 p-4 bg-purple-gradient text-white'>
                <UserButton  fallback='/' showName/>
              </li>
            </ul>
            </SignedIn>

            <SignedOut>
              <Button asChild className="bgcover bg-purple-700 py-4 px-6 ;">
              <Link href={"/sign-in"}>LogIn </Link>
              </Button>
              
            </SignedOut>


      
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar