'use client'
import { NotificationIcon } from '@/assets/Notification/notification'
import Brand from '../brand/brand'
import { ErrorIcon } from '@/assets/Error/error'
import Avatar from '../avatar/avatar'
import { BurgerMenuIcon } from '@/assets/Burger-menu/Burger'
import { SignoutIcon } from '@/assets/Signout/signout'
import { useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const toggleShowMenu = () => setShowMenu((prev) => !prev)

  const handleSignout = () => {
    signOut()
    redirect('/signin')
  }

  const { data: session, status } = useSession()
  if (status === 'loading') return <div>Loading ...</div>
  if (status === 'unauthenticated' || !session) redirect('/signin')

  return (
    <header
      className={`flex justify-between w-full px-3 lg:px-10 h-16 border-b-2 relative ${
        showMenu ? 'overflow-visible' : 'overflow-hidden'
      }`}
    >
      <Brand />
      <div className='flex items-center gap-x-8'>
        <div className='notif hidden sm:flex gap-x-3'>
          <ErrorIcon className='text-[18px]' />
          <NotificationIcon />
        </div>
        <div
          className='sm:hidden text-[1.5rem] cursor-pointer'
          onClick={toggleShowMenu}
        >
          <BurgerMenuIcon />
        </div>
        <div className='absolute left-0 sm:static sm:flex top-16 w-full border-b-2 sm:border-b-0 px-8 sm:px-0'>
          <div className='flex justify-between w-full items-center'>
            <div className='flex gap-x-3 items-center sm:border sm:px-3 sm:py-1 sm:rounded-full top-16 py-4 w-full sm:w-auto'>
              <div className='sm:block'>
                <Avatar size='small' />
              </div>
              <p className='sm:block font-medium'>{session.user.name}</p>
            </div>
            <span
              className='text-[18px] px-3 cursor-pointer'
              onClick={handleSignout}
            >
              <SignoutIcon />
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
