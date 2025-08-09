
'use server'

import { createAdminClient } from '@/lib/supabase/admin'
import { revalidatePath } from 'next/cache'

export async function assignRuleSet(traderId: string, ruleSetId: string) {
  const supabase = await createAdminClient()

  const { error } = await supabase
    .from('Trader')
    .update({ ruleSetId: ruleSetId || null })
    .eq('id', traderId)

  if (error) {
    console.error('Error assigning rule set:', error)
    return { error: 'Failed to assign rule set.' }
  }

  revalidatePath('/traders')
  return { success: true }
} 