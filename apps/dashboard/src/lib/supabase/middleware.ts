import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options) {
          supabaseResponse.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options) {
          supabaseResponse.cookies.delete({
            name,
            ...options,
          })
        },
      },
    }
  )

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // If the user is trying to access the login page
  if (request.nextUrl.pathname === '/login') {
    // If the user is already logged in, redirect them to the dashboard
    if (session) {
      return NextResponse.redirect(new URL('/', request.url))
    }
    // If they are not logged in, let them see the login page
    return supabaseResponse
  }

  // If there is no session and the user is not on the login page,
  // redirect them to the login page.
  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // If the user is logged in and not on the login page, let them proceed.
  return supabaseResponse
} 