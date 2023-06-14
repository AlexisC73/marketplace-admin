import { requireNoSession } from '@/utils'
import SignupForm from './SignupForm/SignupForm'

export default async function SignupPage() {
  await requireNoSession()
  return <SignupForm />
}
