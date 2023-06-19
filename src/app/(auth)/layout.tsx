import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { authOptions } from '../api/auth/[...nextauth]/route'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='lg:grid grid-cols-2 min-h-screen flex justify-center bg-white mb-10'>
      {children}
      <aside className='h-screen rounded-full hidden lg:block'>
        <Image
          src={
            'https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
          }
          alt='Bibliotheque'
          height={900}
          width={900}
          className='object-cover w-full h-full'
        />
      </aside>
    </main>
  )
}
