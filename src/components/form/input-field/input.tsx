const FormElement = ({
  label,
  name,
  type = 'text',
  currentValue,
  details,
  step,
}: FormElementProps) => {
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
        step={step ?? 1}
      />
    </div>
  )
}

export default FormElement

type FormElementProps =
  | {
      label: string
      name: string
      type?: string
      currentValue?: string | null
      details?: string
      step?: number
    }
  | {
      label: string
      name: string
      type: 'number'
      currentValue?: string | null
      details?: string
      step?: number
    }
