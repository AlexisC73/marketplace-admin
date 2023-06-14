import FormElement from '@/components/form/input/input'
import AuthForm from '../components/form/AuthForm'
import SubmitButton from '@/components/form/button/button'
import Link from 'next/link'

export default function ForgotPage() {
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
