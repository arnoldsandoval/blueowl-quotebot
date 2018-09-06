import React, { Component } from 'react'
import classNames from 'classnames'
import './Button.scss'

class Button extends Component {
    constructor (props) {
        super(props)

        this.state = {
            isDisabled: false
        }
    }
    render () {
        const { children, theme, className } = this.props
        const componentClass = classNames({
            btn: true,
            [`theme-${theme}`]: theme,
            [`${className}`]: className
        })

        return (
            <button className={componentClass}>{children}</button>
        )
    }
}

Button.defaultProps = {
    theme: 'primary'
}

export default Button