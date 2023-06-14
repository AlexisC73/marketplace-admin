import SubmitButton from '@/components/form/button/button'
import FormElement from '@/components/form/input/input'
import Link from 'next/link'
import AuthForm from '../components/form/AuthForm'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { FormEventHandler } from 'react'

export default async function SignupPage() {
  const session = await getServerSession(authOptions)
  if (session) {
    redirect('/')
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    console.log('submit')
  }
  return (
    <AuthForm
      handleSubmit={handleSubmit}
      subTitle='Inscrivez-vous à l’aide du formulaire ci-dessous'
    >
      <FormElement label="Nom d'utilisateur" name='name' />
      <FormElement label='Addresse email' name='email' />
      <FormElement label='Mot de passe' name='password' type='password' />
      <FormElement
        label='Confirmation du mot de passe'
        name='password-confirmation'
        type='password'
      />
      <div className='my-6'>
        <SubmitButton>M'inscrire</SubmitButton>
      </div>

      <p className='text-[#4D4D4D]'>
        Vous avez déjà un compte ?{' '}
        <Link className='text-primary underline' href={'/signin'}>
          Connectez-vous ici
        </Link>
      </p>
    </AuthForm>
  )
}
