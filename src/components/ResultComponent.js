import React, { Component } from "react";
import "./ResultComponent.css";

class ResultComponent extends Component {
  render() {
    let { result } = this.props;
    return (
      <div className="row">
        <div className="result">
          <p>{result}</p>
        </div>
      </div>
    );
  }
}

export default ResultComponent;
