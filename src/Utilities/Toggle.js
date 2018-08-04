import React, { Component } from 'react'

export default class ToggleRPC extends Component {
  
  state = {
    on: false,
  }

  toggle = () => {
    this.setState({
      on: !this.state.on    // alternates the state!
    })
  }

  render() {
    const { children } = this.props;
    return children({
      on: this.state.on,
      toggle: this.toggle
    });
  }
}