import { ReactNode } from 'react'

export default function FormSection({
  title,
  children,
}: {
  title: string
  children?: ReactNode
}) {
  return (
    <div className='bg-white flex flex-col gap-y-3 p-4 md:p-8 rounded-lg'>
      <h2 className='font-medium'>{title}</h2>
      {children}
    </div>
  )
}
