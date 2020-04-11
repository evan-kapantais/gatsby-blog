import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'

import Header from "./header"
import Footer from "./footer"
import "../stylesheets/layout.scss"

const StyledLayout = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  width: 100%;

  main {
    padding: ${props => props.padding || '0 2rem'};
  }
`

const Layout = (props) => {
  return (
    <StyledLayout padding={props.padding}>
      <Header 
      notitle={props.notitle} 
      noheader={props.noheader}
      position={props.position}
      />
      <main>{props.children}</main>
      <Footer />
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout