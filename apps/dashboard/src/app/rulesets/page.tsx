import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { redirect } from 'next/navigation'
import { RuleSetsView } from './RuleSetsView'

export default async function RuleSetsPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const supabaseAdmin = await createAdminClient()
  const { data: ruleSets, error } = await supabaseAdmin
    .from('RuleSet')
    .select('*, rules:ExecutionRule(*)')

  if (error) {
    console.error('Error fetching rule sets:', error)
  }

  return <RuleSetsView ruleSets={ruleSets || []} />
} 