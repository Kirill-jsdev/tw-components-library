import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react'
import styled from 'styled-components'
import { Group } from '@visx/group'
import { Treemap, treemapSquarify } from '@visx/hierarchy'
import { TreemapNode, Direction } from './Types'
import { useResizeListener } from './useResizeListener'
import { Node } from './Node'
import { Hierarchy, Data, MergedRef } from './Types'
import { TreemapTooltip, TooltipDataProps as TooltipData } from './Tooltip'

interface TreemapChartProps {
  className?: string
  root: Hierarchy
  margin: Direction
  tooltipData: TooltipData
  hoveringLabel: string | null
  nodesToHighlight?: string[]
  isLeaf: (height: number) => boolean
  getColor: (label: string) => string
  hoverHandler: (event: React.PointerEvent<SVGRectElement>, node: TreemapNode, depth: number) => void
  leaveHandler: () => void
  onNodeClick?: (node: string) => void
}

export const TreemapChartConsumer = forwardRef<MergedRef, TreemapChartProps>(
  (
    {
      className,
      root,
      margin,
      tooltipData,
      hoveringLabel,
      nodesToHighlight = [],
      isLeaf,
      getColor,
      hoverHandler,
      leaveHandler,
      onNodeClick,
    },
    ref,
  ) => {
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
    const [setDimensionsRef, dimensions] = useResizeListener()
    const svgRef = useRef<SVGSVGElement>(null)
    const tooltipRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => ({
      getSvgRef: () => svgRef.current,
      getTooltipRef: () => tooltipRef.current,
    }))

    const handleMouseMove = (event: React.MouseEvent) => {
      event.preventDefault()
      event.stopPropagation()
      setPosition({ x: event.pageX, y: event.pageY })
    }

    return (
      <Container className={className} ref={setDimensionsRef}>
        <TreemapTooltip {...tooltipData} TooltipProps={{ onMouseMove: handleMouseMove }} $position={position}>
          <Svg ref={svgRef}>
            <Treemap<Data>
              top={margin.top}
              root={root}
              size={[dimensions?.width ?? 0, dimensions?.height ?? 0]}
              tile={treemapSquarify}
              round
            >
              {(treemap) => (
                <Group>
                  {treemap
                    .descendants()
                    .reverse()
                    .map((node) => (
                      <Group
                        key={`Group-${node.data.data.parentLabel}-${node.data.data.label}`}
                        top={node.y0 + margin.top}
                        left={node.x0 + margin.left}
                      >
                        {isLeaf(node.height) ? (
                          <Node
                            depth={node.depth}
                            width={node.x1 - node.x0}
                            height={node.y1 - node.y0}
                            data={node.data.data}
                            color={getColor(node.data.data.label)}
                            hoveringLabel={hoveringLabel}
                            hoverHandler={hoverHandler}
                            leaveHandler={leaveHandler}
                            nodesToHighlight={nodesToHighlight}
                            onNodeClick={onNodeClick}
                          />
                        ) : (
                          <rect
                            width={node.x1 - node.x0}
                            height={node.y1 - node.y0}
                            stroke={'#fff'}
                            strokeWidth={2}
                            fill="transparent"
                          />
                        )}
                      </Group>
                    ))}
                </Group>
              )}
            </Treemap>
          </Svg>
        </TreemapTooltip>
      </Container>
    )
  },
)
TreemapChartConsumer.displayName = 'TreemapChartConsumer'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const Svg = styled.svg`
  pointer-events: none;
  width: inherit;
  height: inherit;
`
