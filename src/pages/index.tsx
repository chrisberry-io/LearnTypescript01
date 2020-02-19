import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { RadioGroup, Radio } from '../components/form/radio/radio'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Hi people</h1>
        <RadioGroup groupId="question01" label="Do you like javascript?">
          <Radio value="true">Yes</Radio>
          <Radio value="false">No</Radio>
        </RadioGroup>
        <Link to="/page-2/">Go to page 2</Link>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
