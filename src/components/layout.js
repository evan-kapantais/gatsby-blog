import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import '../stylesheets/layout.scss';

import Navbar from './Navbar';
import Footer from './Footer';

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  width: 100%;
`;

const Layout = props => {
  return (
    <StyledLayout>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </StyledLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
