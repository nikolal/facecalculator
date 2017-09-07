import React, { Component } from 'react'
import './App.css'
import Login from './components/login/Login.js'
import Home from './components/home/Home.js'

class App extends Component {

  state = {
    screen: 'Login'
  }

  navigate = (x) => {
    this.setState({ screen: x })
  }

  render() {
    return (
      <div>
        {
          this.state.screen === 'Login' ?
            <Login
              navigate={this.navigate}
            /> :
          this.state.screen === 'Home' ?
            <Home
              navigate={this.navigate}
            /> :
          null
        }
      </div>
    );
  }
}

export default App
