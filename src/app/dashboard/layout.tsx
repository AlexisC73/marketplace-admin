import NavBarLayout from '@/layout/navbar/navbarLayout'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <NavBarLayout>{children}</NavBarLayout>
}
