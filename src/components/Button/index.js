import React, { Component } from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'

import './Button.scss'

class Button extends Component {
    constructor (props) {
      super(props)

      this.state = {
          isDisabled: false
      }

      /* NOTE: Could do this with an arrow function to preserve scope,
       * but im partial to this approach, I like seeing all my redefined
       * context changes in one place.
       */

      this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
      this.props.onClick()
    }

    render () {
        const { children, theme, className } = this.props
        const componentClass = classNames({
            btn: true,
            [`theme-${theme}`]: theme,
            [`${className}`]: className
        })

        return (
            <button onClick={this.handleClick} className={componentClass}>{children}</button>
        )
    }
}

Button.defaultProps = {
  theme: 'primary',
  onClick: () => { console.log('☠️ no onClick attribute is defined.') }
}

Button.propTypes = {
  onClick: propTypes.func.isRequired
}

export default Button
