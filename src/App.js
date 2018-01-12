import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {

  state = {
    user: {name: 'Generic Name'}
  }

  nameChangedHandler = (event) => {
    this.setState({
      user: {name: event.target.value }
    })
  }

  render() {
    const container = {
      border: '1px solid rgb(85, 85, 85)',
      padding: '20px',
      height: '100vh'
    }

    const input = {
      border: '1px solid rgba(85, 85, 85)',
      padding: '10px 5px',
      margin: 'auto',
      display: 'flex',
      minWidth: '250px'

    }

    return (
      <div className="App" style={container}>
        <UserInput name={this.state.user.name} changed={this.nameChangedHandler} style={input} />
        <UserOutput name={this.state.user.name}> I'm a description example </UserOutput>
        <UserOutput name="Alex">I'm a description example two</UserOutput>
      </div>
    );
  }
}

export default App;
