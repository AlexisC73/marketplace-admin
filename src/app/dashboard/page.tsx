import { requireSession } from '@/utils'
import React from 'react'

export default async function Dashboard() {
  await requireSession()
  return <div></div>
}
