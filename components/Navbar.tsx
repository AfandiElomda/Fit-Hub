import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="navbar" >
        <Link href="/">
        <div className='flex items-center gap-2.5 cursor-pointer'>
            <Image 
            src="/images/file.svg"
            alt="logo"
            width={46}
            height={44}
            />  
        </div>
        <div className='flex items-center gap-8'>
          
      
        </div>
        </Link>
    </nav>
  )
}

export default Navbar