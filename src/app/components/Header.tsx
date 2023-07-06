"use client"

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai"

function Header() {
  const {status, data} = useSession();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);
  const handleLoginClick = () => signIn();
  const handleLogoutClick = () => {
    setMenuIsOpen(false);
    signOut();
  };

  return (
    <div className="container mx-auto h-[93px] p-5 flex justify-between items-center">
      <Image width={183} height={32} src="/logo.png" alt="Trips logo" />

      {status === "unauthenticated" && <button className='text-primary text-sm font-semibold' onClick={handleLoginClick}>Login</button>}
      {status === "authenticated" && (
        <div className="flex items-center gap-4 border border-solid rounded-full border-grayLight p-2 px-3 relative">
          <AiOutlineMenu 
            size={20}
            color='#717171'
            onClick={handleMenuClick}
          />
          <Image width={35} height={35} src={data?.user?.image!} alt={data.user?.name!} className='rounded-full shadow-md'/>

          {menuIsOpen && (
            <div className="absolute top-16 left-0 w-full h-full bg-white rounded-full shadow-xl flex items-center justify-center">
              <button 
                className='text-primary text-sm font-semibold'
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Header;