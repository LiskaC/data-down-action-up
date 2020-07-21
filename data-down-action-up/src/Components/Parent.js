import React, { Component } from 'react';
import ChildComponent from './Child';

export default class Parent extends Component {
  render() {
    return (
      <div className="parent">
        <ChildComponent onHandleClick={this.props.onHandleClick} number={this.props.number} />
      </div>
    )
  }
}