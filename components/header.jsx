import React from 'react'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  return (
    <header> 
      <Link href="/">
          <Image
            src={"/logo.png"}
            alt="Carrer Coach Logo"
            width={200}
            height={60}
            className="h-12 py-1 w-auto object-contain"
          />
        </Link>
      <div>
      <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
      </div>

      
         </header>
  )
}

export default Header