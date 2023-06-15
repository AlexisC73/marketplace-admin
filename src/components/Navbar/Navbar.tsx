'use client'

import { BurgerMenuIcon } from '@/assets/Burger-menu/Burger'
import { useState } from 'react'
import NavigationLink from './NavLink/NavLink'
import UserInfo from './UserInfo/UserInfo'
import Brand from '@/components/brand/brand'
import { SellIcon } from '@/assets/Sell/sell'
import { BookIcon } from '@/assets/Book/book'
import { NotificationIcon } from '@/assets/Notification/notification'
import { ErrorIcon } from '@/assets/Error/error'
import { SettingIcon } from '@/assets/Setting/setting'
import { DashboardIcon } from '@/assets/Dashboard/dashboard'

const NAV_LINKS = [
  {
    label: 'Tableau de bord',
    href: '/dashboard',
    icon: <DashboardIcon />,
  },
  { label: 'Livres', href: '/', icon: <BookIcon /> },
  { label: 'Ventes', href: '/sell', icon: <SellIcon /> },
  {
    label: 'Notifications',
    href: '/notifications',
    icon: <NotificationIcon />,
  },
  {
    label: 'Litiges',
    href: '/dispute',
    icon: <ErrorIcon />,
  },
  {
    label: 'Paramètres',
    href: '/settings',
    icon: <SettingIcon />,
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen((prev) => !prev)

  return (
    <>
      {isOpen && (
        <div className='overlay fixed inset-0 bg-black opacity-30'></div>
      )}
      <div
        className={`w-4/6 ${isOpen ? 'md:w-[300px] md:px-4' : 'md:w-12'} ${
          isOpen ? 'max-md:translate-x-0' : 'max-md:-translate-x-full'
        } 2xl:w-[320px] 2xl:px-4 bg-white fixed top-0 left-0 bottom-0 flex md:shadow-lg`}
      >
        <div className='hidden 2xl:flex absolute top-6 left-8'>
          <Brand />
        </div>
        <div className='w-full relative z-50'>
          <button
            onClick={toggleMenu}
            className={`-right-10 ${
              isOpen ? 'md:-right-10' : 'md:left-1'
            } absolute 2xl:hidden`}
          >
            <SideBurger />
          </button>
          <div className='navbar flex h-full flex-col pt-32 w-full'>
            <ul className='flex flex-col gap-y-3 md:gap-y-8 2xl:gap-y-4 flex-1'>
              {NAV_LINKS.map((link) => (
                <NavigationLink key={link.href} menuOpen={isOpen} {...link} />
              ))}
            </ul>
            <div className='p-4 md:p-0 md:py-4'>
              <UserInfo menuOpen={isOpen} name='Alexis' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const SideBurger = () => {
  return (
    <div className='w-10 h-10 flex items-center justify-center bg-white max-sm:bg-[#f5f5f5] text-[25px] rounded-r-md'>
      <BurgerMenuIcon />
    </div>
  )
}
