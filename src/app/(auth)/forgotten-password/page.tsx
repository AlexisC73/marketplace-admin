import FormElement from '@/components/form/input-field/input'
import AuthForm from '../components/form/AuthForm'
import SubmitButton from '@/components/form/button/button'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function ForgotPage() {
  const session = await getServerSession(authOptions)
  if (session) {
    redirect('/')
  }
  return (
    <AuthForm subTitle='Vous avez oublié votre mot de passe ?'>
      <FormElement label='Addresse email' name='email' />
      <SubmitButton>Récuperer mon mot de passe</SubmitButton>
      <span>
        Je me souvient de mon mot de passe !{' '}
        <Link className='text-primary underline' href={'/signin'}>
          Revenir à l'accueil
        </Link>
      </span>
    </AuthForm>
  )
}
