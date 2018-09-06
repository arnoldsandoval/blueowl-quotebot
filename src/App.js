import React, { Component } from 'react'
import logo from './logo.svg'
import './App.scss'
import ButtonGroup from './components/ButtonGroup';
import Button from './components/Button';

class App extends Component {
  render () {
    return (
      <div className="container">
        <header className="App-header">
          <h1 className="App-title">Quote bot</h1>
        </header>
        <div className="profile">
          <h1>Profile Component</h1>
          {/* Robot Image */}
          {/* Map Image */}
        </div>

        <div className="actions-quote">
          <h2>Robot commands</h2>
          <ButtonGroup layout="inline">
            <Button>Read this quote</Button>
            <Button>Show past quotes</Button>
            <Button className="icon-lil-yoda">Yodify future quotes</Button>
          </ButtonGroup>
        </div>
        <div className="quote">
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
