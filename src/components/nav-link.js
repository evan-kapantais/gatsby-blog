import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'



export default NavLink = () => (
  <div>
    <Link to={props.to}>{props.to.toCapitalize()}</Link>
  </div>
);