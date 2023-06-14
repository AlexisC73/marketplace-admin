import { redirect } from 'next/navigation'
import { requireSession } from '@/utils'

export default async function Home() {
  await requireSession()
  redirect('/dashboard')
}
