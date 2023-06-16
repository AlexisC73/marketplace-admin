const FormElement = ({
  label,
  name,
  type = 'text',
  currentValue,
  details,
}: {
  label: string
  name: string
  type?: string
  currentValue?: string | null
  details?: string
}) => {
  return (
    <div className='flex flex-col gap-y-2 2xl:text-[14px] w-full'>
      <label htmlFor={name}>
        {label}
        <span className='text-[12px] text-[#6b6b6b]'>{details}</span>
      </label>
      <input
        className='bg-[#FAFAFA] border outline-none w-full h-[44px] rounded px-4'
        type={type}
        name={name}
        id={name}
        placeholder={currentValue ?? ''}
      />
    </div>
  )
}

export default FormElement
