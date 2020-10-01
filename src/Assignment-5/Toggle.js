import React, { Component } from "react";
import { TouchableNativeFeedbackBase } from "react-native";
import "../Assignment-5/MyStyleSheet.css";
import toggleOff from "../Assignment-5/ToggleOff3.png";
import toggleOn from "../Assignment-5/ToggleOn2.png";
import Calender from "../Assignment-5/calender.png";

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
            marginTop: "-290px",
            marginLeft: "150px",
            textAlign: "center",
            position: "fixed"
          }}
        >
          <table>
            <tr>
              <td>
                <img
                  name="On"
                  src="https://uploads.codesandbox.io/uploads/user/927c06c2-eee9-402d-be30-5df3ec015b1b/jV3X-ToggleOff3.png"
                  alt="image"
                  width="40px"
                  onClick={this.tog}
                  Style={{ background: "transparent" }}
                />
              </td>
              <td>
                <img
                  src="https://uploads.codesandbox.io/uploads/user/927c06c2-eee9-402d-be30-5df3ec015b1b/N0gB-calender.png"
                  width="20px"
                  Style={{ background: "transparent" }}
                />
              </td>
            </tr>
          </table>
        </div>

        <div
          style={{
            visibility: `${this.state.Visible2}`,
            marginTop: "-290px",
            marginLeft: "150px",
            textAlign: "center",
            position: "fixed"
          }}
        >
          <table>
            <tr>
              <td>
                <img
                  name="Off"
                  src="https://uploads.codesandbox.io/uploads/user/927c06c2-eee9-402d-be30-5df3ec015b1b/uxeS-ToggleOn2.png"
                  alt="image"
                  width="40px"
                  onClick={this.tog}
                  Style={{ background: "transparent" }}
                />
              </td>
              <td>
                <img
                  src="https://uploads.codesandbox.io/uploads/user/927c06c2-eee9-402d-be30-5df3ec015b1b/N0gB-calender.png"
                  width="20px"
                  Style={{ background: "transparent" }}
                />
              </td>
            </tr>
          </table>
        </div>
      </form>
    );
  }
}

export default Toggle;
