import React, { useState, useEffect, useRef, useContext } from 'react'
import { TreemapNode, DatasetVariable, Direction } from './Types'
import { TreemapChartConsumer } from './TreemapChartConsumer'
import { treemapToHierarchy, hierarchyToRoot, isLeaf, getTooltipData } from './Util'
import { Hierarchy, MergedRef } from './Types'
import { TooltipDataProps as TooltipData } from './Types'

export interface TreemapChartProps {
  className?: string
  margin?: Direction
  treemap: TreemapNode[]
  predictorPalette: DatasetVariable[]
  nodesToHighlight?: string[]
  onNodeClick?: (node: string) => void
}

const Treemap: React.FC<TreemapChartProps> = ({
  className,
  margin = { top: 0, right: 0, bottom: 0, left: 0 },
  treemap,
  predictorPalette,
  nodesToHighlight = [],
  onNodeClick,
}) => {
  const mergedRef = useRef<MergedRef>(null)
  const [root, setRoot] = useState<Hierarchy>()
  const [hoveringLabel, setHoveringLabel] = useState<string | null>(null)
  const [tooltipData, setTooltipData] = useState<TooltipData>({
    term: '',
    coefficient: 0,
    importance: 0,
    color: '',
  })

  useEffect(() => {
    try {
      const hierarchy = treemapToHierarchy(treemap)
      setRoot(hierarchyToRoot(hierarchy))
    }
    finally {
        console.log('Treemap component')
    }
  }, [treemap])

  const getColor = (part: string) =>
    predictorPalette.find(({ variable }) => part.includes(variable))?.color ?? '#958CAB'

  const handlePointerMove = (event: React.PointerEvent<SVGRectElement>, node: TreemapNode, depth: number) => {
    const tooltipData = getTooltipData(node, depth, predictorPalette)

    setHoveringLabel(tooltipData.term)
    setTooltipData(tooltipData)
  }

  const handlePointerLeave = () => setHoveringLabel(null)

  if (!root) return null

  return (
    <TreemapChartConsumer
      className={className}
      ref={mergedRef}
      root={root}
      margin={margin}
      tooltipData={tooltipData}
      hoveringLabel={hoveringLabel}
      nodesToHighlight={nodesToHighlight}
      isLeaf={isLeaf}
      getColor={getColor}
      hoverHandler={handlePointerMove}
      leaveHandler={handlePointerLeave}
      onNodeClick={onNodeClick}
    />
  )
}

export default Treemap
