import env from '@/utils/config/env'
import NextAuth, { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string
          password: string
        }
        try {
          const fetchConnect = await fetch(
            env.API_URL + '/auth/signin/seller',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email,
                password,
              }),
            }
          )

          if (fetchConnect.status === 200) {
            const user = await fetchConnect.json()
            if (user) {
              return user
            } else {
              return null
            }
          } else {
            throw new Error("L'identifiant ou le mot de passe sont incorrects.")
          }
        } catch (err: any) {
          if (err.message === 'fetch failed')
            throw new Error('Problème de liaison avec le server.')
          else {
            throw new Error(err.message)
          }
        }
      },
    }),
  ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
