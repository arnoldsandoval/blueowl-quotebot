import React, { Component } from 'react'
import classNames from 'classnames'
import './ButtonGroup.scss'

class ButtonGroup extends Component {
    
    render () {
        
        const { children, layout, className } = this.props
        const componentClass = classNames({
            'button-group': true,
            [`layout-${layout}`]: layout,
            [`${className}`]: className
        })

        return (
            <div className={componentClass}>{children}</div>
        )
    }
}

ButtonGroup.defaultProps = {
    layout: 'inline'
}

export default ButtonGroup