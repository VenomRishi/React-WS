import React, { Component } from "react";
import Counter from "./Counter";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 40,
    };

    this.mountCounter = () => this.setState({mount: true})
    this.unMountCounter = () => this.setState({mount: false})

    this.ignoreProp = () => this.setState({ignoreProp: Math.random()})
    this.seedGenerator = () => this.setState({seed: Number.parseInt(Math.random() * 100)})
  }
  render() {
    return (
      <div>
        <div className="App">
          <button onClick={this.mountCounter} disabled={this.state.mount}>Mount Counter</button>
          <button onClick={this.unMountCounter} disabled={!this.state.mount}>Unmount Counter</button>
          <button onClick={this.ignoreProp}>Ignore Prop</button>
          <button onClick={this.seedGenerator}>Generate Seed</button>
          {/* {this.state.mount ? <Counter /> :  null} */}
          {this.state.mount ? <Counter ignoreProp={this.state.ignoreProp} seed={this.state.seed} /> :  null}
        </div>
      </div>
    );
  }
}

export default App;
