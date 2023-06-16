import { ArrowIcon } from '@/assets/Arrow/Arrow'
import { HomeIcon } from '@/assets/Home/Home'
import Link from 'next/link'

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: { href: string; name: string }[]
}) {
  return (
    <ol className='flex gap-x-2 items-center'>
      <li>
        <Link href={'/'}>
          <HomeIcon />
        </Link>
      </li>
      {breadcrumbs.map((breadcrumb) => (
        <Breadcrumb key={breadcrumb.href} {...breadcrumb} />
      ))}
    </ol>
  )
}

const Breadcrumb = ({ href, name }: { href: string; name: string }) => {
  return (
    <>
      <span className='text-[11px]'>
        <ArrowIcon />
      </span>
      <li>
        <Link href={href}>{name}</Link>
      </li>
    </>
  )
}
