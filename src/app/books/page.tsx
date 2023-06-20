import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs'
import { requireSession } from '@/utils'
import Link from 'next/link'

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
      <div>
        <Breadcrumbs breadcrumbs={pageBreadcrumbs} />
        <Link href={'/books/add'}>Ajouter un livre</Link>
      </div>
    </>
  )
}
