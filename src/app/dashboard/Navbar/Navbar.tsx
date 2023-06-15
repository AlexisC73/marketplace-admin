'use client'

import { BurgerMenuIcon } from '@/assets/Burger-menu/Burger'
import { useState } from 'react'
import NavigationLink from './NavLink/NavLink'
import UserInfo from './UserInfo/UserInfo'

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
        className={`w-4/6 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } bg-white fixed top-0 left-0 bottom-0 flex`}
      >
        <div className='w-full relative z-50'>
          <button
            onClick={toggleMenu}
            className={`-right-10 absolute 2xl:hidden`}
          >
            <SideBurger />
          </button>
          <div className='navbar flex h-full flex-col pt-32 w-full'>
            <ul className='flex flex-col gap-y-3 flex-1'>
              {NAV_LINKS.map((link) => (
                <NavigationLink {...link} />
              ))}
            </ul>
            <div>
              <UserInfo name='Alexis' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const SideBurger = () => {
  return (
    <div className='w-10 h-10 flex items-center justify-center bg-[#e7e7e7] text-[25px] rounded-r-md'>
      <BurgerMenuIcon />
    </div>
  )
}
