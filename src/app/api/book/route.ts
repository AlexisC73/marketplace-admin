import env from '@/utils/config/env'
import { getServerSession } from 'next-auth'
import { NextRequest } from 'next/server'
import { authOptions } from '../auth/[...nextauth]/route'
import { sendApiResponse } from '@/utils/api-response'

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    const formData = await req.formData()
    const request = await fetch(`${env.API_URL}/book`, {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${session?.user.access_token}`,
      },
    })

    if (request.ok) {
      return sendApiResponse({
        success: true,
        data: { message: 'Book created successfully' },
        status: 201,
        statusText: 'Created',
      })
    } else {
      const response = await request.json()
      return sendApiResponse({
        success: false,
        error: response.message,
        status: 400,
        statusText: request.statusText,
      })
    }
  } catch (err) {
    return sendApiResponse({
      success: false,
      error: 'Il y a une erreur de liaison avec le server.',
      status: 400,
      statusText: 'Bad Request',
    })
  }
}
