import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {counts: [0,0,0,0,0,0,0,0], total: 0};
    this.onClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const {id} = event.target;
    console.log(id);
    let counts = this.state.counts;
    counts[id] = 1 - counts[id];
    this.setState(counts: status);
    console.log(this.state);

    let sum = 0;
    for (let i = 0; i < this.state.counts.length; i++) {
      sum += (this.state.counts[i])*(2^(7-i));
    }
    this.state.total = sum;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <span class="clickSpan" id="0" onClick={this.onClick}>{this.state.counts[0]}</span><span class="clickSpan" id="1" onClick={this.onClick}>{this.state.counts[1]}</span><span class="clickSpan" id="2" onClick={this.onClick}>{this.state.counts[2]}</span><span class="clickSpan" id="3" onClick={this.onClick}>{this.state.counts[3]}</span><span class="clickSpan" id="4" onClick={this.onClick}>{this.state.counts[4]}</span><span class="clickSpan" id="5" onClick={this.onClick}>{this.state.counts[5]}</span><span class="clickSpan" id="6" onClick={this.onClick}>{this.state.counts[6]}</span><span class="clickSpan" id="7" onClick={this.onClick}>{this.state.counts[7]}</span><span id="eqs">=</span><span id="total">{this.state.total}</span>
      </div>
    );
  }
}

export default App;
