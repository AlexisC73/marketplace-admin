import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export const requireSession = async () => {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect('/signin')
  } else {
    return { session }
  }
}

export const requireNoSession = async () => {
  const session = await getServerSession(authOptions)
  if (!!session) {
    redirect('/')
  }
}
