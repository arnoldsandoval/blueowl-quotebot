import React, { Component } from 'react'
import logo from './logo.svg'
import './App.scss'
import ButtonGroup from './components/ButtonGroup';
import Button from './components/Button';
import Profile from './components/Profile';

class App extends Component {
  render () {
    return (
      <div className="container">
        <header className="App-header">
          <h1 className="App-title">Quote bot</h1>
        </header>
        <Profile>
          <h1>Profile Component</h1>
          {/* Robot Image */}
          {/* Map Image */}
        </Profile>

        <div className="actions-quote">
          <h2>Robot commands</h2>
          <ButtonGroup layout="inline">
            <Button>Read this quote</Button>
            <Button>Show past quotes</Button>
            <Button className="icon-lil-yoda">Yodify future quotes</Button>
          </ButtonGroup>
        </div>
        <div className="quote">
          <h2>Quote</h2>
          <blockquote>
            random quote
            <footer>&ndash; Author Names</footer>
          </blockquote>
        </div>
        <div className="actions-user">
          <ButtonGroup layout="list">
            <Button theme="danger">Lame</Button>
            <Button theme="warning">Meh&hellip;</Button>
            <Button theme="success">Great!</Button>
          </ButtonGroup>
        </div>
      </div>
    )
  }
}

export default App
