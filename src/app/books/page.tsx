import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs'

export default function BooksPage() {
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
