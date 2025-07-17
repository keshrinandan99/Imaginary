'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { SignIn } from '@clerk/nextjs'
import { navLinks } from '../../../constants'
import { usePathname } from 'next/navigation'

function Sidebar() {
  const pathname = usePathname() // Fixed: Added parentheses to call the hook
  
  return (
    <aside className='sidebar'>
      <div className='flex size-full flex-col gap-4'>
        <Link href="/" className='sidebar-logo'>
          <Image src="/assets/images/logo-text.svg" alt="Imaginary Logo" width={150} height={50} />
        </Link>

        <nav className='sidebar-nav'>
          <SignIn>
            <ul className='side-nav_elements'>
              {navLinks.map((link) => {
                const isActive = link.route === pathname

                return (
                  <li 
                    key={link.route} 
                    className={`side-nav_element group ${
                      isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
                    }`}
                  >
                    <Link href={link.route}>
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </SignIn>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar