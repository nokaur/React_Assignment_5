import React, { Component } from "react";
import { TouchableNativeFeedbackBase } from "react-native";
import "../Assignment-5/MyStyleSheet.css";
import toggleOff from "../Assignment-5/toggleOff.png";
import toggleOn from "../Assignment-5/toggleOn.png";

class Toggle extends Component {
  state = {
    Visible1: "visible",
    Visible2: "hidden"
  };
  tog = (event) => {
    this.props.tog(event.target.name);

    if (`${event.target.name}` === "Off") {
      this.setState({
        Visible1: "visible",
        Visible2: "hidden"
      });
    } else if (event.target.name === "On") {
      this.setState({
        Visible1: "hidden",
        Visible2: "visible"
      });
    }
    event.preventDefault();
  };
  render() {
    return (
      <form>
        <div
          style={{
            visibility: `${this.state.Visible1}`,
            marginTop: "-300px",
            marginLeft: "-70px"
          }}
        >
          <button
            name="On"
            onClick={this.tog}
            style={{
              width: "50px",
              height: "28px"
            }}
          >
            <img
              name="On"
              src="https://uploads.codesandbox.io/uploads/user/927c06c2-eee9-402d-be30-5df3ec015b1b/qG4j-toggleOff.png"
              alt="my image"
              width="40px"
              onClick={this.tog}
            />
          </button>
        </div>

        <div
          style={{
            visibility: `${this.state.Visible2}`,
            marginTop: "-32px",
            marginLeft: "-70px"
          }}
        >
          <button
            name="Off"
            onClick={this.tog}
            style={{
              width: "50px",
              height: "28px"
            }}
          >
            <img
              name="Off"
              src={toggleOn}
              alt="my image"
              width="40px"
              onClick={this.tog}
            />
          </button>
        </div>
      </form>
    );
  }
}

export default Toggle;
