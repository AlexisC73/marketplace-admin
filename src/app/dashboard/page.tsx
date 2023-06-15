import { requireSession } from '@/utils'
import React from 'react'

export default async function Dashboard() {
  await requireSession()
  return (
    <div>
      <h1>Coucou les amis</h1>
    </div>
  )
}
