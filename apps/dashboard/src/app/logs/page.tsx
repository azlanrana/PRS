import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { redirect } from 'next/navigation'
import { LogsView } from './LogsView'

export default async function LogsPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const supabaseAdmin = await createAdminClient()
  const { data: logs, error } = await supabaseAdmin
    .from('ExecutionLog')
    .select('*')
    .order('createdAt', { ascending: false })
    .limit(100)

  if (error) {
    console.error('Error fetching execution logs:', error)
    redirect('/')
  }

  return <LogsView logs={logs || []} />
} 