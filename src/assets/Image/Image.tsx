import { SVGProps } from 'react'

export function ImageIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <g
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      >
        <path d='M15 8h.01M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6z'></path>
        <path d='m3 16l5-5c.928-.893 2.072-.893 3 0l5 5'></path>
        <path d='m14 14l1-1c.928-.893 2.072-.893 3 0l3 3'></path>
      </g>
    </svg>
  )
}
