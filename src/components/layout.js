import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import "../stylesheets/layout.scss"

const Layout = (props) => {
  return (
    <div>
      <Header title={props.title} position={props.position} color={props.color}/>
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout