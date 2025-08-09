'use server'

import { createAdminClient } from '@/lib/supabase/admin'
import { revalidatePath } from 'next/cache'
import { RuleType } from '@risk-control/shared-types'

export async function addExecutionRule(formData: {
  ruleSetId: string
  type: RuleType
  parameters: any
}) {
  const supabase = await createAdminClient()

  const { error } = await supabase.from('ExecutionRule').insert([
    {
      ruleSetId: formData.ruleSetId,
      type: formData.type,
      parameters: formData.parameters,
    },
  ])

  if (error) {
    console.error('Error creating execution rule:', error)
    return { error: 'Failed to create execution rule.' }
  }

  revalidatePath(`/rulesets/${formData.ruleSetId}`)
  revalidatePath('/rulesets')
  return { success: true }
} 