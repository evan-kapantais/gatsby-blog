import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Seo from'../components/seo'

const Container = styled.div `
  max-width: 800px;
  margin: 0 auto;
`

class contactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
    }

    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({subject: event.target.value});
    // console.log(this.state.subject);
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <Layout>
        <Seo title='Contact' />
        <Container>
          <form action=''>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' placeholder='Name'/>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Email' />
            <label htmlFor='subject'>Subject</label>
            <input type='text' value={this.state.subject} onChange={this.handleChange} />
          </form>
        </Container>
      </Layout>
    );
  }
}

export default contactPage;