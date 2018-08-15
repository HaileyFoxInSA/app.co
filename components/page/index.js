import React from 'react'
import PropTypes from 'prop-types'
import { TopBar } from '@components/top-bar'
import { Footer } from '@components/footer'

import { StyledPage } from './styled'

const Page = ({ children, ...rest }) => (
  <StyledPage {...rest}>
    <TopBar />
    <StyledPage.Section flexDirection={['column']} alignItems="center" pt={[3, 4]} px={[2, 0]}>
      {children}
    </StyledPage.Section>
    <StyledPage.Section flexDirection={['column']} alignItems="center" px={[2, 0]}>
      <Footer pb={3} />
    </StyledPage.Section>
  </StyledPage>
)

const pxProps = ({ px }) => (px ? { px: [2, 4] } : {})
const pyProps = ({ py }) => (py ? { py: [1, 4] } : {})

const Section = (props) => <StyledPage.Section {...props} {...pxProps(props)} {...pyProps(props)} />

Page.Sidebar = StyledPage.Aside
Page.Section = Section
Page.Section.Content = StyledPage.Content

Page.propTypes = {
  children: PropTypes.node.isRequired
}
export { Page }
