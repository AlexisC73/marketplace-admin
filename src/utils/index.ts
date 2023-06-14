import { fakeSession } from '@/fake/session'
import { redirect } from 'next/navigation'

export const requireSession = async () => {
  const session = fakeSession
  if (!session) {
    redirect('/signin')
  } else {
    return { session }
  }
}
