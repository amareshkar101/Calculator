import React, { Component } from "react";
import "./App.css";
import ResultComponent from "./components/ResultComponent";
import KeyPadComponent from "./components/KeyPadComponent";

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
    };
  }

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "CLEAR") {
      this.reset();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  calculate = () => {
    var checkResult = "";

    checkResult = this.state.result;

    try {
      this.setState({
        // eslint-disable-next-line
        result: eval(checkResult),
      });
    } catch (e) {
      this.setState({
        result: "",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  render() {
    return (
      <div>
        <div className="App">
          <ResultComponent result={this.state.result} />
          <KeyPadComponent onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;
