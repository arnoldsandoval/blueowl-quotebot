import React, { Component } from 'react'
import { connect } from 'react-redux'

// TODO: Aliasing...
import ButtonGroup from '../../components/ButtonGroup';
import Button from '../../components/Button';
import Profile from '../../components/Profile';
import Modal from '../../components/Modal';

import { getUserIp } from '../../actions/user'
import { getQuote } from '../../actions/quote'

@connect((store) => {
  return {
    activeQuote: store.quote.active,
    previousQuotes: store.quote.previous,
    userIp: store.user.userIp
  }
})
class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showPastQuotes: false
    }

    this.handleUserRating = this.handleUserRating.bind(this)
    this.togglePastQuotes = this.togglePastQuotes.bind(this)
  }
  componentWillMount () {
    this.props.dispatch(getUserIp())
    this.props.dispatch(getQuote())
  }

  handleUserRating (e) {
    const { dispatch } = this.props

    dispatch(getQuote())
  }

  togglePastQuotes () {
    const { showPastQuotes } = this.state

    this.setState({
      showPastQuotes: !showPastQuotes
    })
  }

  render () {
    const { activeQuote, userIp, previousQuotes } = this.props
    const { showPastQuotes } = this.state

    return (
      <div>
        <div className="container">
          <header className="App-header">
            <h1 className="App-title">Quote bot</h1>
          </header>

          <Profile>
            <h1>Profile Component</h1>
            <img src={`https://robohash.org/${userIp}.png?bgset=bg2`} alt={`A metalic, shiny robot. Lacks expression, not human. Resides at ${userIp}.`}/>

            {/* TODO: Crazy long, consider putting in redux store... */}
            <img
              src="https://api.mapbox.com/v4/mapbox.dark/-76.9,38.9,5/300x150.png?access_token=pk.eyJ1IjoiZHNqa2Zza2xkamYiLCJhIjoiY2preW0xY3p5MGtzdjN3cWpvZWlqZXpwOCJ9.UrnT7p1smyMCd1dXov9i7Q"
              srcSet="https://api.mapbox.com/v4/mapbox.dark/-76.9,38.9,5/300x150@2x.png?access_token=pk.eyJ1IjoiZHNqa2Zza2xkamYiLCJhIjoiY2preW0xY3p5MGtzdjN3cWpvZWlqZXpwOCJ9.UrnT7p1smyMCd1dXov9i7Q 2x,
              https://api.mapbox.com/v4/mapbox.dark/-76.9,38.9,5/300x150.png?access_token=pk.eyJ1IjoiZHNqa2Zza2xkamYiLCJhIjoiY2preW0xY3p5MGtzdjN3cWpvZWlqZXpwOCJ9.UrnT7p1smyMCd1dXov9i7Q 1x"
            />
          </Profile>

          <div className="actions-quote">
            <h2>Robot commands</h2>
            <ButtonGroup layout="inline">
              <Button>Read this quote</Button>
              <Button onClick={this.togglePastQuotes}>Show past quotes</Button>
              <Button className="icon-lil-yoda">Yodify future quotes</Button>
            </ButtonGroup>
          </div>
          <div className="quote">
            <h2>Quote</h2>
            <blockquote>
              {/* TODO: We shouldnt be doing this, but because it isnt for production... */}
              <span dangerouslySetInnerHTML={{__html: activeQuote.content}}></span>
              <footer>&ndash; {activeQuote.title}</footer>
            </blockquote>
          </div>
          <div className="actions-user">
            <ButtonGroup layout="list">
              <Button onClick={this.handleUserRating} theme="danger">Lame</Button>
              <Button onClick={this.handleUserRating} theme="warning">Meh&hellip;</Button>
              <Button onClick={this.handleUserRating} theme="success">Great!</Button>
            </ButtonGroup>
          </div>
        </div>

        <Modal active={showPastQuotes}>
          <div>
            <h2>Previous Robot Wisdom</h2>
            <ul className="previous-quotes list">
              {previousQuotes.map((quote) => (
                <li>
                  <blockquote>
                    <span dangerouslySetInnerHTML={{__html: quote.content}}></span>
                    <footer>&ndash; {quote.title}</footer>
                  </blockquote>
                </li>
              ))}
            </ul>
          </div>
        </Modal>
      </div>
    )
  }
}

export default App
