import { createClient } from '@supabase/supabase-js'

// IMPORTANT: This client is for SERVER-SIDE USE ONLY.
// It uses the Service Role Key and should never be exposed to the browser.

export async function createAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    console.error('Environment variables check:', {
      hasUrl: !!supabaseUrl,
      hasServiceKey: !!supabaseServiceRoleKey,
      serviceKeyPrefix: supabaseServiceRoleKey?.substring(0, 10) + '...'
    })
    throw new Error('Missing Supabase environment variables')
  }

  const client = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    }
  })

  // Test the client
  const { data: testData, error: testError } = await client.from('Trader').select('count').single()
  console.log('Admin client test:', { success: !testError, error: testError })

  return client
} 