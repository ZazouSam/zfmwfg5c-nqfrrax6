import { ChartStatusConfig, ChartDataEntry } from './types'

export function processChartData<T extends string>(
  counts: Record<T, number>,
  config: ChartStatusConfig,
  total: number
): ChartDataEntry[] {
  if (!counts || !config || total === 0) {
    return []
  }

  type Entries<T> = {
    [K in keyof T]: [K, T[K]];
  }[keyof T][];

  return (Object.entries(counts) as Entries<typeof counts>)
    .map(([status, count]) => ({
      name: status,
      data: count,
      percentage: (count / total) * 100,
      fill: config[status]?.color ?? 'var(--gray)',
      label: status
    } satisfies ChartDataEntry))
}

export function validateChartData(
  data: Record<string, number>,
  total: number,
  completedValue: number
): { isValid: boolean; error?: string } {
  if (!data || Object.keys(data).length === 0) {
    return { isValid: false, error: '' }
  }

  if (total <= 0) {
    return { isValid: false, error: 'Invalid total count' }
  }

  if (completedValue < 0 || completedValue > total) {
    return { isValid: false, error: 'Invalid completed value' }
  }

  const sum = Object.values(data).reduce((acc, val) => acc + (val || 0), 0)
  if (sum <= 0) {
    return { isValid: false, error: '' }
  }

  return { isValid: true }
}
