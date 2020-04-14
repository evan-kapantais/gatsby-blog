import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import '../stylesheets/layout.scss'

import SEO from './seo'
import { Header, IndexHeader } from './header'
import Footer from './footer'

const StyledLayout = styled.div `
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  width: 100%;

  main {
    padding: ${props => props.padding || 0};
  }
`

const Layout = (props) => {
  return (
    <StyledLayout>
      <SEO title={props.title}/>
      {props.title === 'Resting' ? <IndexHeader/> : <Header/>}
      <main padding={props.title === 'Resting' ? '0' : '0 2rem'}>{props.children}</main>
      <Footer />
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout