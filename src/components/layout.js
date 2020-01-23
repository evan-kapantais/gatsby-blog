import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'

import Header from "./header"
import Footer from "./footer"
import "../stylesheets/layout.scss"

const StyledLayout = styled.div `
  min-height: 100vh;
`

const Layout = (props) => {
  return (
    <StyledLayout>
      <Header notitle={props.notitle} />
      <main>{props.children}</main>
      <Footer />
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout