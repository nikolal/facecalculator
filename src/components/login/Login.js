import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Login extends Component {

  static propTypes = {
    navigate: PropTypes.func.isRequired
  };

  state = {
    username: '',
    password: ''
  }

  render() {
    const { navigate } = this.props;

    return (
      <div style={styles.container}>
        <h1>Login</h1>
        <input type="text" placeholder="Username" value={this.state.username} onChange={e => this.setState({ username: e.target.value })} />
        <input type="text" placeholder="Password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />

        <button onClick={() => navigate('Home')}>Submit</button>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  }
}
