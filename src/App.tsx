import React, { Component } from "react";
import "./App.css";
import Number from "./Number";
import { From, Input } from "./Input";

interface IState {
  counter: number;
  name: string;
}

class App extends Component<{}, IState> {
  state = {
    counter: 0,
    name: "",
  };

  render() {
    const { counter, name } = this.state;
    return (
      <div>
        <From onFormSubmit={this.onFormSubmit}>
          <Input value={name} onChange={this.onChange} />
        </From>
        <Number count={counter}></Number>
        <button onClick={this.add}>Add</button>
      </div>
    );
  }

  onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    console.log(event.target);
  };

  onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  add = (): void => {
    this.setState((prev) => {
      return { counter: prev.counter + 1 };
    });
  };
}

export default App;
