import React, { Component } from "react";

const ErrorComponent = (value) => <div>{value}</div>;

export class Counter extends Component {
  constructor(props) {
    console.log("Constructor");
    console.log("------------");
    super(props);
    this.state = {
      counter: 0,
    };

    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  // fifth
  // method will give you change to copy the value from props to state
  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      console.log("get Derived State From Props: COPY STATE");
      console.log("-------------------");
      return {
        seed: props.seed,
        counter: props.seed,
      };
    }
    console.log("get Derived State From Props: return NULL");
    return null;
  }

  // first method will envoked
  componentDidMount() {
    console.log("Component Did Mount");
    console.log("-------------------");
  }

  // fourth
  // return true by default
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log("Should Component Update - DO NOT RENDER");
      console.log("-------------------");
      return false;
    }
    console.log("Should Component Update - RENDER");
    console.log("-------------------");
    return true;
  }

   //sixth
   getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Get Snapshot Before Update");
    return null;
  }


  render() {
    console.log("Render");
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div className="counter">Counter: {this.state.counter}</div>
        <ErrorComponent />
      </div>
    );
  }
  // second method will envoked
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component Did Update");
    console.log("-------------------");
  }

  // third method will envoked
  componentWillUnmount() {
    console.log("Component will unmount");
    console.log("-------------------");
  }


  //seventh
  componentDidCatch(error, info) {
    console.log("Component Did Catch");
    // this.setState({ error, info });
  }
}

export default Counter;
