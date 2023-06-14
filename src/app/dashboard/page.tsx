import Header from '@/components/header/header'
import { requireSession } from '@/utils'

export default async function Dashboard() {
  const { session } = await requireSession()
  return (
    <>
      <Header />
    </>
  )
}
