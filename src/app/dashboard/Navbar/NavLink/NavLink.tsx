import Link from 'next/link'
import { ReactNode } from 'react'

export default function NavigationLink({
  label,
  href,
  icon,
}: {
  label: string
  href: string
  icon: ReactNode
}) {
  return (
    <li className='w-[200px] h-10 flex items-center px-5 text-[1.1rem] font-medium'>
      <Link href={href} className='flex items-center gap-x-4'>
        <span className='w-8 h-8 flex items-center justify-center'>{icon}</span>
        <p className=''>{label}</p>
      </Link>
    </li>
  )
}
