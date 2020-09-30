import React, { Component } from "react";
import { TouchableNativeFeedbackBase } from "react-native";
import "../Assignment-5/MyStyleSheet.css";
import toggleOff from "../Assignment-5/toggleOff.png";

class Toggle extends Component {
  tog = (event) => {
    this.props.tog(event.target.name);
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <button name="On" onClick={this.tog}>
          <img
            name="On"
            src="https://uploads.codesandbox.io/uploads/user/927c06c2-eee9-402d-be30-5df3ec015b1b/qG4j-toggleOff.png"
            alt="my image"
            width="40px"
            onClick={this.tog}
          />
        </button>
      </div>
    );
  }
}

export default Toggle;
