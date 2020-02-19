import * as React from 'react'
import styled from '@emotion/styled'

const StyledLayoutMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`

interface LayoutMainProps {
  children: React.ReactNode
  className?: string
}

const LayoutMain = ({ children, className }: LayoutMainProps) => {
  return <StyledLayoutMain className={className}>{children}</StyledLayoutMain>
}

export default LayoutMain
