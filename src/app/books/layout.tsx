import NavBarLayout from '@/layout/navbar/navbarLayout'

export default function BooksPageLayout({
  children,
}: {
  children?: React.ReactNode
}) {
  return (
    <div className='pl-4 mt-10 2xl:px-10 flex-1 flex flex-col max-2xl:max-w-[1000px] w-full mx-auto relative'>
      <NavBarLayout>{children}</NavBarLayout>
    </div>
  )
}
