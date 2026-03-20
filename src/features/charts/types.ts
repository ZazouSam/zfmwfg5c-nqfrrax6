import { ChartConfig } from "@/components/ui/chart"
import { COMPONENTSTATUS } from "@/types/index"

export interface ChartDataEntry {
  name: string
  data: number
  percentage: number
  
  fill: string
  label: string
}

export type ChartData = ChartDataEntry

export interface ChartStatus {
  label: string
  color: string
}

export type ChartStatusConfig = Record<string, ChartStatus> & ChartConfig

export interface BaseChartCardProps {
  status: COMPONENTSTATUS
  isSelected?: boolean
  title: string
  chartSize?: number
  onSelect?: () => void
}

export interface ChartProps {
  chartData: ChartDataEntry[]
  percentage: number
  chartSize: number
}
