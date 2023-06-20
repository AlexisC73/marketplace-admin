'use client'
import FormImageField from '@/components/form/image-field/FormImageField'
import FormSection from './form-section/FormSection'
import FormElement from '@/components/form/input-field/input'
import FormAreaField from '@/components/form/area-field/FormAreaField'
import Link from 'next/link'
import { FormEventHandler } from 'react'
import { ApiResponse } from '@/utils/api-response'

export default function AddBookForm() {
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    fetch('/api/book', {
      method: 'POST',
      body: formData,
    }).then(async (res) => {
      const data: ApiResponse = await res.json()
      if (data.success) {
        form.reset()
      } else {
        console.error(data.error)
      }
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col flex-1 gap-y-5 2xl:grid 2xl:grid-cols-2xl-desktop 2xl:gap-x-6'
    >
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
              step={0.01}
            />
            <FormElement
              label='Date de publication'
              name='publicationDate'
              type='date'
            />
          </div>
        </FormSection>
      </div>

      <div className='fixed 2xl:static order-3 bottom-0 left-0 right-0 md:pl-12 2xl:pl-0'>
        <div className='mx-auto max-2xl:max-w-[1000px] w-full flex items-center justify-around bg-white py-4 rounded-lg '>
          <button>Enregistrer</button>
          <Link href={'/books'}>Annuler</Link>
        </div>
      </div>
    </form>
  )
}
