import { Sector } from 'recharts'
import React from 'react'

import { ChartDataEntry } from './types'

export interface AnimatedSectorProps {
  cx: number
  cy: number
  innerRadius: number
  outerRadius: number
  startAngle: number
  endAngle: number
  fill: string
  payload: any
  value: number
  name: string
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

export function processChartData(
  data: Record<string, number>,
  config: Record<string, { label: string; color: string }>,
  total: number
): ChartDataEntry[] {
  return Object.entries(data).map(([status, value]) => ({
    name: config[status]?.label ?? 'Unknown',
    data: value || 0,
    percentage: total > 0 ? ((value || 0) / total) * 100 : 0,
    fill: config[status]?.color ?? config.other?.color ?? '#666',
    label: `${config[status]?.label ?? 'Unknown'}: ${value || 0}`
  }))
}


export const createAnimatedSector = ({
  cx,
  cy,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fill,
}: AnimatedSectorProps) => (
  <g>
    <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius}
      outerRadius={outerRadius + 6}
      startAngle={startAngle}
      endAngle={endAngle}
      fill={fill}

    />
  </g>
)

export const getChartAnimation = (index: number) => ({
  animationBegin: index * 150,
  animationDuration: 300,
  animationEasing: 'ease-out-cubic'
})
