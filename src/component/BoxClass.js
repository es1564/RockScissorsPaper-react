import React, { Component } from 'react'

export default class BoxClass extends Component {
  render() {
    return (
        <div>
            <div>BoxClass</div>
            <div>{this.props.num}</div>
        </div>
    )
  }
}
