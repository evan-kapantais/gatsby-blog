import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'

import Header from "./header"
import Footer from "./footer"
import HamburgerMenu from '../components/hamburger'
import "../stylesheets/layout.scss"

const StyledLayout = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  width: 100%;
`

const Layout = (props) => {
  return (
    <StyledLayout>
      <Header notitle={props.notitle} />
      <HamburgerMenu />
      <main>{props.children}</main>
      <Footer />
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout