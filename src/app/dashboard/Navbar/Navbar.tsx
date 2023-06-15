'use client'

import { BurgerMenuIcon } from '@/assets/Burger-menu/Burger'
import { useState } from 'react'
import NavigationLink from './NavLink/NavLink'
import UserInfo from './UserInfo/UserInfo'
import Brand from '@/components/brand/brand'

const NAV_LINKS = [
  { label: 'Accueil', href: '/', icon: <BurgerMenuIcon /> },
  { label: 'Mes projets', href: '/projects', icon: <BurgerMenuIcon /> },
  { label: 'Mes tâches', href: '/tasks', icon: <BurgerMenuIcon /> },
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
        } 2xl:w-[400px] 2xl:px-4 bg-white fixed top-0 left-0 bottom-0 flex md:shadow-lg`}
      >
        <div className='hidden 2xl:flex absolute top-6 left-20'>
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
            <ul className='flex flex-col gap-y-3 flex-1'>
              {NAV_LINKS.map((link) => (
                <NavigationLink menuOpen={isOpen} {...link} />
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
