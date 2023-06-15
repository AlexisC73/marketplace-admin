import NavBarLayout from '@/layout/navbar/navbarLayout'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='fr'>
      <body className='flex'>
        <NavBarLayout>{children}</NavBarLayout>
      </body>
    </html>
  )
}
