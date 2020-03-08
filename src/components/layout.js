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

  & > main {
    & > aside {
      position: fixed;
      height: 100%;
      padding: 0 2rem;
      width: 40%;
      color: #fff;
      background-color: #222333;
    }

    & > section {
      margin-left: 40%;
    }
  }
  
`

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <main>{ children }</main>
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout