'use client'
import SubmitButton from '@/components/form/button/button'
import FormElement from '@/components/form/input/input'
import Link from 'next/link'
import AuthForm from '../components/form/AuthForm'
import { FormEventHandler } from 'react'
import { signIn } from 'next-auth/react'

export default async function SigninPage() {
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const email = data.get('email')
    const password = data.get('password')

    signIn('credentials', {
      email,
      password,
      redirect: true,
      callbackUrl: '/',
    })
  }

  return (
    <AuthForm
      handleSubmit={handleSubmit}
      subTitle='Connectez-vous en remplissant vos informations'
    >
      <FormElement label='Addresse email' name='email' />
      <div className='flex flex-col gap-y-2'>
        <FormElement label='Mot de passe' name='password' type='password' />
        <Link
          href={'/forgotten-password'}
          className='self-end underline text-[#4D4D4D]'
        >
          Mot de passe oublié ?
        </Link>
      </div>

      <div className='my-6'>
        <SubmitButton>Me connecter</SubmitButton>
      </div>

      <p className='text-[#4D4D4D]'>
        Vous n'avez pas encore de compte ?{' '}
        <Link className='text-primary underline' href={'/signup'}>
          Créez en un ici
        </Link>
      </p>
    </AuthForm>
  )
}
