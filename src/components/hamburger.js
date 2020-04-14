import React from 'react'

import { MenuOpen } from './menu-buttons'
import MenuPanel from './menu-panel'

class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  togglePanel = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  closePanel = () => {
    this.setState({
      isOpen: false
    });
  }

  clickLink = (e) => {
    e.preventDefault();

    let target = e.target.parentNode.getAttribute('href');
    
    if (target === null) {
      target = '/';
    }

    setTimeout(() => {
      window.location = target;
    }, 500);

    this.setState({isOpen: false});
  }

  render() {
    return (
      <>
        <MenuOpen
        isOpen={this.state.isOpen}
        onClick={this.togglePanel}
        />
        <MenuPanel
        isOpen={this.state.isOpen}
        closePanel={this.closePanel}
        togglePanel={this.togglePanel}
        clickLink={this.clickLink}
        />
      </>
    );
  }
}

export default HamburgerMenu;