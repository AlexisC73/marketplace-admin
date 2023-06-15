import Navbar from '@/components/Navbar/Navbar'

export default function NavBarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main className='app md:pl-12 2xl:pl-[320px]'>{children}</main>
    </>
  )
}
