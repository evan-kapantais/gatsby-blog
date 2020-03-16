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
  margin: 0 auto;

  main {margin: 2rem auto;}
`

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <main>{ children }</main>
      <Footer />
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout