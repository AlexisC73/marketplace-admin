'use client'
import { ImageIcon } from '@/assets/Image/Image'
import { ChangeEvent, FormEventHandler, useRef, useState } from 'react'

export default function FormImageField() {
  const fileRef = useRef<HTMLInputElement>(null)
  const previewRef = useRef<HTMLImageElement>(null)
  const [hasImage, setHasImage] = useState<boolean>(false)

  const handleClick = () => {
    fileRef.current?.click()
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target
    if (!input.files) {
      setHasImage(false)
      return
    }

    if (!input.files[0]) {
      setHasImage(false)
      return
    }

    setHasImage(true)

    const reader = new FileReader()
    reader.onload = (e) => {
      const image = e.target?.result
      previewRef.current?.setAttribute('src', image as string)
    }
    reader.readAsDataURL(input.files[0])
  }

  return (
    <div className='flex flex-col gap-x-3 hover:bg-[#fafafa] relative rounded-lg overflow-hidden'>
      {hasImage && (
        <div className='absolute inset-0 bg-[#00000081] flex justify-center'>
          <img ref={previewRef} className='object-cover h-full' src='' />
        </div>
      )}
      <button
        onClick={handleClick}
        type='button'
        className={`w-full py-20 border border-dashed flex items-center flex-col justify-center z-10 ${
          hasImage
            ? 'text-transparent hover:text-white bg:transparent hover:bg-[#222222dc]'
            : 'text-black bg-[#fafafa]'
        }`}
      >
        <ImageIcon className='text-[30px]' />
        <div className='text-center text-[14px] mt-4 flex flex-col gap-y-4'>
          <h3 className='text-[18px]'>
            {hasImage ? "Modifier l'image de " : 'Ajouter une image à'} votre
            produit
          </h3>
          <p className='font-light'>Uniquement au format PNG, JPG, JPEG</p>
        </div>
      </button>
      <input
        ref={fileRef}
        className='hidden'
        id='image'
        name='image'
        type='file'
        accept='image/png, image/jpeg, image/jpg'
        onChange={handleImageChange}
      />
    </div>
  )
}
