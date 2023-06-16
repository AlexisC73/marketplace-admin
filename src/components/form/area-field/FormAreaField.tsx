export default function FormAreaField({ name, label }: any) {
  return (
    <div className='flex flex-col gap-y-1'>
      <label htmlFor={name} className='text-[14px]'>
        {label}
      </label>
      <textarea
        className='border bg-[#FAFAFA] px-3 py-2 rounded-md resize-none'
        rows={6}
        id={name}
        name={name}
      />
    </div>
  )
}
