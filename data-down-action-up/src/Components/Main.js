import React, { Component } from 'react';
import ParentComponent from './Parent';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  incrementNumber = () => {
    this.setState({
      number: this.state.number + 1
    }
    )
  }

  render() {
    return (
      <div className="main" >
        <h1>Incrementer App</h1>
        <ParentComponent onHandleClick={this.incrementNumber} number={this.state.number} />
      </div>
    );
  }
}