import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Group } from '@visx/group'
import { lighten } from '@material-ui/core'
import { TreemapNode } from './Types'
import { COLOR_TO_TEXT_COLOR_MAP } from './color'

type NodeColors = {
  background: string
  text: string
}

interface NodeProps {
  depth: number
  width: number
  height: number
  data: TreemapNode
  color: string
  hoveringLabel: string | null
  nodesToHighlight?: string[]
  hoverHandler: (e: React.PointerEvent<SVGRectElement>, node: TreemapNode, depth: number) => void
  leaveHandler: () => void
  onNodeClick?: (node: string) => void
}

const shouldEmphasize = (data: TreemapNode, depth: number, label: string | null): boolean => {
  if (!label) return false
  switch (depth) {
    case 1:
      return data.label.toLowerCase() === label.toLowerCase()
    case 2:
      if (!data.parentLabel) return false
      return data.parentLabel.toLowerCase() === label.toLowerCase()
    case 0:
    default:
      return false
  }
}

function getHoverColors(nodeColor: string, data: TreemapNode, depth: number, hoveringLabel: string): NodeColors {
  const emphasize = shouldEmphasize(data, depth, hoveringLabel)

  const hoverColor = emphasize ? nodeColor : lighten(nodeColor, 0.3)
  const nodeTextColor = COLOR_TO_TEXT_COLOR_MAP[nodeColor] ?? '#EBECF0'
  const textColor = emphasize ? nodeTextColor : lighten(nodeTextColor, 0.3)

  return { background: hoverColor, text: textColor }
}

function getColors(nodeColor: string, data: TreemapNode, depth: number, nodesToHighlight: string[]): NodeColors {
  const nodeTextColor = COLOR_TO_TEXT_COLOR_MAP[nodeColor] ?? '#EBECF0'
  const lightTextColor = lighten(nodeTextColor, 0.3)

  if (nodesToHighlight.length === 0) return { background: nodeColor, text: lightTextColor }

  const emphasize = nodesToHighlight.some((n) => shouldEmphasize(data, depth, n))
  const background = emphasize ? nodeColor : lighten(nodeColor, 0.3)
  const text = emphasize ? nodeTextColor : lightTextColor

  return { background, text }
}

export const Node: React.FC<NodeProps> = ({
  depth,
  width,
  height,
  data,
  color: nodeColor,
  hoveringLabel,
  hoverHandler,
  leaveHandler,
  nodesToHighlight = [],
  onNodeClick,
}) => {
  const isHovering = Boolean(hoveringLabel)
  const { background: bgColor, text: txtColor } = isHovering
    ? getHoverColors(nodeColor, data, depth, hoveringLabel ?? '')
    : getColors(nodeColor, data, depth, nodesToHighlight)

  const handleNodeClick = () => {
    if (!onNodeClick) return
    switch (depth) {
      case 1:
        onNodeClick(data.label)
      case 2:
        if (!data.parentLabel) return
        onNodeClick(data.parentLabel)
      case 0:
      default:
        return
    }
  }

  return (
    <Group>
      <Rect
        width={width}
        height={height}
        stroke={'#fff'}
        strokeWidth={depth === 1 ? 2 : 0}
        fill={bgColor}
        onPointerMove={(e) => hoverHandler(e, data, depth)}
        onPointerLeave={leaveHandler}
        onClick={handleNodeClick}
      />
      <foreignObject width={width} height={height} dominantBaseline="middle" textAnchor="middle">
        <TextContainer>
          <Text $color={txtColor}>{data.label}</Text>
        </TextContainer>
      </foreignObject>
    </Group>
  )
}

const rectAnimation = keyframes`
  0% { transform: scale(0); opacity: 0; }
  100% { transform:  scale(1); opacity: 100; }
`

const Rect = styled.rect`
  pointer-events: auto;
  animation: ${rectAnimation} 0.4s ease;
`

const TextContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const Text = styled.p<{ $color: string }>`
  margin: 0.3125rem;
  font-size: 0.75rem;
  color: ${(props) => props.$color};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
