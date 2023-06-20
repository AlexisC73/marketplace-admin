import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs'
import AddBookForm from './components/form/AddBookForm'
import { requireSession } from '@/utils'

export default async function AddBookPage() {
  await requireSession()
  const pageBreadcrumbs = [
    {
      href: '/books',
      name: 'Livres',
    },
    {
      href: '/books/add',
      name: 'Ajouter un livre',
    },
  ]

  return (
    <div className='pb-24'>
      <div className='bg-white md:bg-transparent'>
        <Breadcrumbs breadcrumbs={pageBreadcrumbs} />
      </div>
      <h1 className='text-[20px] font-bold pl-4 bg-white md:bg-transparent md:pb-6'>
        Ajouter un livre
      </h1>
      <AddBookForm />
    </div>
  )
}
