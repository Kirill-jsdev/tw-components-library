import React from 'react'
import styled from 'styled-components'
import { Tooltip as MUITooltip, TooltipProps } from '@material-ui/core'
import { color } from './color'
import { standardFormatter } from './number'

type Position = { x: number; y: number }

export interface TooltipDataProps {
  term: string
  importance: number
  coefficient?: number
  color: string
}

interface TreemapTooltipProps extends TooltipDataProps {
  className?: string
  children: TooltipProps['children']
  TooltipProps?: Omit<TooltipProps, 'children' | 'title'>
}

const TooltipData: React.FC<TooltipDataProps> = ({ term, importance, coefficient, color }) => (
  <Container>
    <Circle color={color} />
    <DataContainer>
      <Title>
        <b>{term}</b>
      </Title>
      <Span>
        Importance: <b>{standardFormatter(importance)}</b>
      </Span>
      {typeof coefficient === 'number' && (
        <Span>
          Coefficient: <b>{standardFormatter(coefficient)}</b>
        </Span>
      )}
    </DataContainer>
  </Container>
)

const Tooltip: React.FC<TreemapTooltipProps> = ({ children, className, TooltipProps, ...props }) => (
  <MUITooltip {...TooltipProps} classes={{ popper: className }} title={<TooltipData {...props} />} enterTouchDelay={0}>
    {children}
  </MUITooltip>
)

export const TreemapTooltip = styled(Tooltip)<{ $position: Position }>`
  overflow: hidden;
  border-radius: 0.75rem;
  transform: ${({ $position }) =>
    `translateX(-100%) translate3d(${$position.x}px, ${$position.y + 10}px, 0) !important`};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);

  & .MuiTooltip-tooltip {
    margin: 0;
    padding: 0;
  }
`

const Container = styled.div`
  display: flex;
  padding: 0.375rem;
  font-size: 0.75rem;
  justify-content: flex-start;
  color: ${color.black};
  background-color: ${color.white};
`

const DataContainer = styled.div`
  display: flex;
  margin-left: 0.375rem;
  flex-direction: column;
  justify-content: flex-start;
`

const Circle = styled.span<{ color: string }>`
  width: 1rem;
  height: 1rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.color};
`

const Title = styled.span`
  margin-bottom: 0.25rem;
  font-weight: 700;
`

const Span = styled.span`
  margin-left: 0.25rem;
`
