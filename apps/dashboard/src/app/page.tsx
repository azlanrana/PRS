import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { redirect } from 'next/navigation'
import { DashboardView } from './DashboardView'

export default async function Dashboard({
  searchParams,
}: {
  searchParams: Promise<{ from?: string; to?: string }>
}) {
  const { from, to } = await searchParams
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const supabaseAdmin = await createAdminClient()

  const { count: totalTraders, error: tradersError } = await supabaseAdmin
    .from('Trader')
    .select('*', { count: 'exact', head: true })

  const { count: manipulatedTraders, error: manipulatedError } =
    await supabaseAdmin
      .from('Trader')
      .select('ruleSetId', { count: 'exact', head: true })
      .not('ruleSetId', 'is', null)

  let query = supabaseAdmin
    .from('ExecutionLog')
    .select('requestPayload, responsePayload, createdAt')

  if (from) {
    query = query.gte('createdAt', from)
  }
  if (to) {
    query = query.lte('createdAt', to)
  }

  const { data: logs, error: logsError } = await query

  if (tradersError || manipulatedError || logsError) {
    console.error({ tradersError, manipulatedError, logsError })
  }

  let originalProfit = 0
  let manipulatedProfit = 0

  if (logs) {
    for (const log of logs) {
      originalProfit += log.requestPayload?.profit || 0
      manipulatedProfit += log.responsePayload?.profit || 0
    }
  }

  const stats = {
    totalTraders: totalTraders ?? 0,
    manipulatedTraders: manipulatedTraders ?? 0,
    totalExecutions: logs?.length ?? 0,
    originalProfit,
    manipulatedProfit,
  }

  return <DashboardView stats={stats} />
}
