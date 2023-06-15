import { requireSession } from '@/utils'
import React from 'react'
import Navbar from './Navbar/Navbar'

export default async function Dashboard() {
  await requireSession()
  return (
    <>
      <Navbar />
    </>
  )
}
