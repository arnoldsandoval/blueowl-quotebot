import React, { Component } from 'react'
import classNames from 'classnames'
import './Modal.scss'
import Button from '../Button'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: props.active
    }

    this.handleModalClose = this.handleModalClose.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.active !== prevProps.active) {
      this.setState({
        isActive: this.props.active
      })
    }
  }

  handleModalClose () {
    this.setState({
      isActive: false
    })
  }

  render () {
    const { children, className } = this.props
    const { isActive } = this.state

    const componentClass = classNames({
      'modal': true,
      'is-active': isActive,
      [`${className}`]: className
    })

    return (
      <div className={componentClass}>
        <Button className="action-close" onClick={this.handleModalClose}>Close</Button>
        <div className="modal-content">{children}</div>
      </div>
    )
  }
}

Modal.defaultProps = {
    active: false
}

export default Modal
