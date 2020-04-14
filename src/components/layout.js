import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import '../stylesheets/layout.scss'

import SEO from './seo'
import { Header, IndexHeader } from './header'
import Footer from './footer'
import MenuPanel from './menu-panel'

const StyledLayout = styled.div `
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  width: 100%;
`

const Layout = (props) => {
  const path = window.location.pathname;

  return (
    <StyledLayout>
      <SEO title={path === '/' ? 'Home' : props.title}/>
      <MenuPanel
      
      />
      {path === '/' ? <IndexHeader/> : <Header/>}
      <main padding={path === '/' ? '0' : '0 2rem'}>{props.children}</main>
      <Footer />
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout