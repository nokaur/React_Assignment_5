import React, { Component } from "react";
// import "../Assignment-5/MyStyleSheet.css";
import toggleOff from "../Assignment-5/toggleOff.png";

class Toggle extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <button>
          <img src={toggleOff} alt="my image" width="40px" />
        </button>
      </div>
    );
  }
}

export default Toggle;
