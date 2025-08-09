import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { redirect } from 'next/navigation'
import { RuleSetDetailsView } from './RuleSetDetailsView'
import { RuleType } from '@risk-control/shared-types'

export default async function RuleSetDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const supabaseAdmin = await createAdminClient()
  const { data: ruleSet, error } = await supabaseAdmin
    .from('RuleSet')
    .select('*, rules:ExecutionRule(*)')
    .eq('id', id)
    .single()

  if (error || !ruleSet) {
    console.error('Error fetching rule set details:', error)
    redirect('/rulesets')
  }

  return <RuleSetDetailsView ruleSet={ruleSet} ruleTypes={Object.values(RuleType)} />
} 