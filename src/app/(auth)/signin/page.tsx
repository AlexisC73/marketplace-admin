import { requireNoSession } from '@/utils'
import SigninForm from './SigninForm/SigninForm'

export default async function SigninPage() {
  await requireNoSession()

  return <SigninForm />
}
