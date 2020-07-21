import React, { Component } from 'react';

export default class Child extends Component {
  handleClick = () => { this.props.onHandleClick() };

  render() {
    return (
      <div className="child">
        <h2>{this.props.number}</h2>
        <button onClick={this.handleClick}>Increment number by 1</button>
      </div>
    )
  }
}