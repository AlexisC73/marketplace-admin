import Brand from '@/components/brand/brand'

interface Props {
  subTitle: string
  children: React.ReactNode
}

export default function AuthForm({ subTitle, children }: Props) {
  return (
    <section className='flex items-center md:justify-center flex-col relative gap-y-10 w-full md:max-w-[640px] lg:max-w-[500px] px-8 mx-auto mt-5'>
      <div className='lg:absolute top-8 left-0 right-0 flex justify-center lb:m-auto'>
        <Brand />
      </div>

      <div className='flex flex-col items-center gap-y-2'>
        <h2 className='text-primary font-bold text-[20px]'>Bonjour !</h2>
        <p className='text-[#4D4D4D] text-center'>{subTitle}</p>
      </div>

      <form className='w-full flex flex-col gap-y-5'>{children}</form>
    </section>
  )
}
