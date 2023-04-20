import { hierarchy, stratify } from '@visx/hierarchy'
// import { color } from 'src/core/Color'
import { TreemapNode, DatasetVariable, Direction, ElementSize, Position } from './Types'
import { Data, Hierarchy, SvgRef } from './Types'
import { TooltipDataProps } from './Types'

// https://github.com/d3/d3-hierarchy/blob/master/README.md#stratify
export const treemapToHierarchy = (treemap: TreemapNode[]): Data =>
  stratify<TreemapNode>()
    .id((node) => node.label)
    .parentId((node) => node.parentLabel)(
      treemap.length ? treemap : [{ label: 'empty root', parentLabel: null, importance: null }],
    )
    .sum((node) => node.importance || 0)

// https://github.com/d3/d3-hierarchy/blob/master/README.md#hierarchy
export const hierarchyToRoot = (data: Data): Hierarchy =>
  hierarchy(data).sort((a, b) => (b.value || 0) - (a.value || 0))

export const getColor = (variablePalette: DatasetVariable[], label: string): string => {
  for (const variable of variablePalette) {
    if (label.includes(variable.variable)) return variable.color
  }
  return '#958CAB'
}

export const getTooltipData = (
  node: TreemapNode,
  depth: number,
  variablesPalette: DatasetVariable[],
): TooltipDataProps => ({
  term: (depth === 2 ? node.parentLabel : node.label) || '',
  importance: depth === 2 ? (node.importance || 0) * 2 : node.importance || 0,
  color: getColor(variablesPalette, node.label),
  coefficient: node.coefficient,
})

export const isLeaf = (height: number): boolean => height === 0

export const getAvailableSize = (svgElement: SvgRef, margin: Direction): ElementSize => {
  if (!svgElement) return { width: 0, height: 0 }

  const width = svgElement.clientWidth - margin.left - margin.right
  const height = svgElement.clientHeight - margin.top - margin.bottom
  return { width, height }
}

export const getMousePosition = (event: React.PointerEvent): Position => ({ x: event.clientX, y: event.clientY })
