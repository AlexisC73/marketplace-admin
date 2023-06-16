'use client'
import { ImageIcon } from '@/assets/Image/Image'
import { useRef } from 'react'

export default function FormImageField() {
  const fileRef = useRef<HTMLInputElement>(null)
  const handleClick = () => {
    fileRef.current?.click()
  }
  return (
    <div className='flex flex-col gap-x-3'>
      <button
        onClick={handleClick}
        className='w-full py-20 border hover:bg-[#fafafa] border-dashed rounded-lg flex items-center flex-col justify-center'
      >
        <ImageIcon className='text-[30px]' />
        <div className='text-center text-[14px] mt-4 flex flex-col gap-y-4'>
          <h3 className='text-[18px]'>Ajouter une image à votre produit</h3>
          <p className='font-light'>Uniquement au format PNG, JPG, JPEG</p>
        </div>
      </button>
      <input
        ref={fileRef}
        className='hidden'
        id='image'
        name='image'
        type='file'
      />
    </div>
  )
}
