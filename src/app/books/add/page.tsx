import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs'
import FormAreaField from '@/components/form/area-field/FormAreaField'
import FormImageField from '@/components/form/image-field/FormImageField'
import FormElement from '@/components/form/input-field/input'
import FormSection from './components/form-section/FormSection'

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
      <form className='flex flex-col flex-1 gap-y-5 2xl:grid 2xl:grid-cols-2xl-desktop 2xl:gap-x-6'>
        <div className='order-1 2xl:order-2'>
          <FormSection title='Image'>
            <FormImageField />
          </FormSection>
        </div>
        <div className='order-2 2xl:order-1'>
          <FormSection title='Informations générales'>
            <FormElement name='title' label='Nom du livre' />
            <FormElement name='author' label='Auteur' />
            <FormAreaField name='description' label='Description' />
            <div className='grid grid-cols-2 gap-x-4'>
              <FormElement
                label='Prix'
                details='(€)'
                name='price'
                type='number'
              />
              <FormElement
                label='Date de publication'
                name='price'
                type='date'
              />
            </div>
          </FormSection>
        </div>

        <div className='fixed 2xl:static order-3 bottom-0 left-0 right-0 md:pl-12 2xl:pl-0'>
          <div className='mx-auto max-2xl:max-w-[1000px] w-full flex items-center justify-around bg-white py-4 rounded-lg '>
            <button>Enregistrer</button>
            <button>Annuler</button>
          </div>
        </div>
      </form>
    </div>
  )
}
