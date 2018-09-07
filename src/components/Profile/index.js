import React, { Component } from 'react'
import classNames from 'classnames'

class Profile extends Component {

    render () {
      const { children, layout, className } = this.props
      const componentClass = classNames({
        'profile': true,
        [`${className}`]: className
      })

      return (
        <div className={componentClass}>{children}</div>
      )
    }
}

Profile.defaultProps = {
    layout: 'inline'
}

export default Profile
