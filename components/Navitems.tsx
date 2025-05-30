'use client';

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils';

const navItems = [

{ label:'Home', href:'/' },
{ label:'Activities', href:'/Activities' },
{ label:'Clubs-&-Groups', href:'/Clubs-&-Groups' },
{ label:'Shop', href:'/Shop' },
{ label:'Account', href:'/Account' }
]

const Navitems = () => {
  const pathname = usePathname();

  return (
    <nav className='flex items-center gap-4'>
      {navItems.map(({ label, href }) => (
        <Link href={href} key={label} className={cn(pathname===href && 'text-primary font-semibold')}>
          {label}
        </Link>
      ) )}
    </nav>
  )
}

export default Navitems