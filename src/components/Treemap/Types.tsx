import { HierarchyNode } from 'd3-hierarchy'

export interface TreemapNode {
    label: string
    parentLabel: string | null
    importance: number | null
    coefficient?: number
    meta?: { [key: string]: string | null | number }
}

export interface DatasetVariable {
    variable: string
    color: string
    textColor: string
    minimumValue: number
    name: string
    maximumValue: number
    firstTimestamp: string
    lastTimestamp: string
    orderInTable: number
    type: string
    missingObservations: number
    averageValue: number
}

export type Direction = { top: number; right: number; bottom: number; left: number }
export type ElementSize = { width: number; height: number }
export type Position = { x: number; y: number }

export type Data = HierarchyNode<TreemapNode>
export type Hierarchy = HierarchyNode<Data>

export type SvgRef = SVGSVGElement | null | undefined
export type TooltipRef = HTMLDivElement | null | undefined
export interface MergedRef {
  getSvgRef: () => SvgRef
  getTooltipRef: () => TooltipRef
}

export interface TooltipDataProps {
    term: string
    importance: number
    coefficient?: number
    color: string
}