import * as React from 'react'
import styled from '@emotion/styled'

import { dimensions } from '../styles/variables'

const StyledPage = styled.div`
  display: block;
  flex: 1;
  position: relative;
  padding: ${dimensions.containerPadding}rem;
  margin-bottom: 3rem;
`

interface PageProps {
  children: React.ReactNode
  className?: string
}

const Page = ({ children, className }: PageProps) => <StyledPage className={className}>{children}</StyledPage>

export default Page
