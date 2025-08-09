'use server'

import { createAdminClient } from '@/lib/supabase/admin'
import { revalidatePath } from 'next/cache'

export async function createRuleSet(formData: {
  name: string
  description: string
}) {
  const supabase = await createAdminClient()

  const { error } = await supabase.from('RuleSet').insert([
    {
      name: formData.name,
      description: formData.description,
    },
  ])

  if (error) {
    console.error('Error creating rule set:', error)
    return { error: 'Failed to create rule set.' }
  }

  revalidatePath('/rulesets')
  return { success: true }
}

export async function updateRuleSet(
  id: string,
  data: { name: string; description: string }
) {
  const supabase = await createAdminClient()

  const { error } = await supabase
    .from('RuleSet')
    .update({
      name: data.name,
      description: data.description,
    })
    .eq('id', id)

  if (error) {
    console.error('Error updating rule set:', error)
    return { error: 'Failed to update rule set.' }
  }

  revalidatePath('/rulesets')
  return { success: true }
}

export async function deleteRuleSet(id: string) {
  const supabase = await createAdminClient()

  const { error } = await supabase.from('RuleSet').delete().eq('id', id)

  if (error) {
    console.error('Error deleting rule set:', error)
    return { error: 'Failed to delete rule set.' }
  }

  revalidatePath('/rulesets')
  return { success: true }
} 