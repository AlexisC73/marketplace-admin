import { PropsWithChildren } from 'react'

export default function SubmitButton({ children }: PropsWithChildren) {
  return (
    <button type='submit' className='bg-primary py-2 text-white w-full rounded'>
      {children}
    </button>
  )
}
