import Link from 'next/link'
import { ReactNode } from 'react'

export default function NavigationLink({
  label,
  href,
  icon,
  menuOpen,
}: {
  label: string
  href: string
  icon: ReactNode
  menuOpen: boolean
}) {
  return (
    <li
      className={`md:w-full h-10 flex items-center px-5 md:px-0 ${
        menuOpen ? 'md:justify-start' : 'md:justify-center'
      } 2xl:justify-start text-[1.15rem] md:text-[1.3rem] 2xl:text-[15px] font-medium`}
    >
      <Link href={href} className='flex items-center gap-x-4'>
        <span
          className={`w-8 h-8 md:w-12 flex items-center justify-center md:text-[24px] 2xl:text-[18px]`}
        >
          {icon}
        </span>
        <p className={`${menuOpen ? '' : 'md:hidden'} 2xl:block`}>{label}</p>
      </Link>
    </li>
  )
}
