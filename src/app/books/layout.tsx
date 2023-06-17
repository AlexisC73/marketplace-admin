import NavBarLayout from '@/layout/navbar/navbarLayout'

export default function BooksPageLayout({
  children,
}: {
  children?: React.ReactNode
}) {
  return <NavBarLayout>{children}</NavBarLayout>
}
