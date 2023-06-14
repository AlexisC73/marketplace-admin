import { Session } from 'next-auth'

export const fakeSession: Session = {
  expires: 'fake-expires',
  user: {
    name: 'John Doe',
    email: 'john@doe.fr',
    access_token: 'fake-token',
    avatarUrl: 'https://via.placeholder.com/150',
    id: 'fake-id',
    role: 'SELLER',
  },
}
