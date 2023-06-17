import { NextResponse } from 'next/server'

export const sendApiResponse = (response: ApiResponse) => {
  if (!response.success) {
    return NextResponse.json(
      {
        success: false,
        error: response.error,
      },
      { status: response.status }
    )
  }
  return NextResponse.json(
    {
      success: true,
      data: response.data,
    },
    { status: response.status }
  )
}

export type ApiResponse =
  | {
      success: true
      status: number
      statusText?: string
      data: { message: string; [key: string]: any }
    }
  | { success: false; status: number; statusText?: string; error: string }
