import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs'
import AddBookForm from './components/form/AddBookForm'

export default function AddBookPage() {
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
    <div className='flex-1 flex flex-col pb-24 max-2xl:max-w-[1000px] w-full mx-auto relative 2xl:px-10'>
      <div className='pl-4 mt-10 bg-white md:bg-transparent py-4'>
        <Breadcrumbs breadcrumbs={pageBreadcrumbs} />
      </div>
      <h1 className='text-[20px] font-bold pl-4 bg-white md:bg-transparent md:pb-6'>
        Ajouter un livre
      </h1>
      <AddBookForm />
    </div>
  )
}
