import SubmitButton from '@/components/form/button/button'
import FormElement from '@/components/form/input/input'
import Image from 'next/image'
import Link from 'next/link'
import AuthForm from '../components/form/AuthForm'

export default function SigninPage() {
  return (
    <AuthForm subTitle='Connectez-vous en remplissant vos informations'>
      <FormElement label='Addresse email' name='email' />
      <div className='flex flex-col gap-y-2'>
        <FormElement label='Mot de passe' name='password' />
        <Link
          href={'/auth/forgot'}
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
        <Link className='text-primary underline' href={'/auth/signup'}>
          Créez en un ici
        </Link>
      </p>
    </AuthForm>
  )
}
