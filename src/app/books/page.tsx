import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs'
import { requireSession } from '@/utils'

export default async function BooksPage() {
  await requireSession()
  const pageBreadcrumbs = [
    {
      href: '/books',
      name: 'Livres',
    },
  ]
  return (
    <>
      <div className='ml-10 mt-3'>
        <Breadcrumbs breadcrumbs={pageBreadcrumbs} />
      </div>
    </>
  )
}
