'use client'
import { SignoutIcon } from '@/assets/Signout/signout'
import Avatar from '@/components/avatar/avatar'
import { signOut } from 'next-auth/react'

export default function UserInfo({
  name,
  menuOpen,
}: {
  name: string
  menuOpen: boolean
}) {
  const handleSignout = () => {
    signOut()
  }
  return (
    <div className='flex flex-col gap-y-3'>
      <div className='flex items-center gap-x-3 text-[18px] font-medium'>
        <div className={`w-8 h-8 md:w-12 flex items-center justify-center`}>
          <Avatar size='medium' />
        </div>

        <p className={`${menuOpen ? '' : 'md:hidden'} 2xl:block`}>{name}</p>
      </div>
      <div>
        <button
          onClick={handleSignout}
          className='flex w-full gap-x-3 items-center'
        >
          <div className={`w-8 h-8 md:w-12 flex items-center justify-center`}>
            <SignoutIcon className='text-[20px]' />
          </div>
          <p className={`${menuOpen ? '' : 'md:hidden'} 2xl:block`}>
            Me déconnecter
          </p>
        </button>
      </div>
    </div>
  )
}
