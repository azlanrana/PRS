import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { redirect } from 'next/navigation'
import { TradersView } from './TradersView'

export default async function TradersPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const supabaseAdmin = await createAdminClient()
  const { data: traders, error } = await supabaseAdmin
    .from('Trader')
    .select(
      `
    *,
    ruleSet:RuleSet (*)
    `
    )
  const { data: ruleSets } = await supabaseAdmin.from('RuleSet').select('*')

  if (error) {
    console.error('Error fetching traders:', {
      error,
      statusCode: error.code,
      message: error.message,
      details: error.details,
      hint: error.hint,
    })
    // Optionally, render an error state
  }

  return <TradersView traders={traders || []} ruleSets={ruleSets || []} />
} 