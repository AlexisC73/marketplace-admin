import Image from 'next/image'

const fakeSession = {
  user: {
    name: 'John Doe',
    email: 'John.Doe@email.fr',
    avatarUrl:
      'https://dev-thebookplace.s3.eu-west-2.amazonaws.com/avatar/default-avatar.jpeg',
  },
}

interface Props {
  size: 'small' | 'medium' | 'large'
}

export default function Avatar({ size }: Props) {
  const session = fakeSession
  const pxSize = size === 'small' ? 16 : size === 'medium' ? 32 : 48
  const customClass =
    size === 'small'
      ? 'h-[16px] w-[16px]'
      : size === 'medium'
      ? 'h-[32px] w-[32px]'
      : 'h-[48px] w-[48px]'
  return (
    <div className={`rounded-full overflow-hidden ${customClass}`}>
      <Image
        src={session.user.avatarUrl}
        alt='avatar'
        height={pxSize}
        width={pxSize}
        className='object-cover h-full w-full'
      />
    </div>
  )
}
