import React, { Component } from "react";
import icon from "../Assignment-5/images2.png";
import backgroundicon from "../Assignment-5/images (1).jpg";
import "../Assignment-5/MyStyleSheet.css";
import { ImageBackground } from "react-native";

class Clock extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <form>
        <div>
          <table className="table">
            <tr
              style={{
                backgroundColor: "black",
                color: "white"
              }}
            >
              <td>
                <img src={icon} width="20px" height="20px" />

                <label style={{ fontSize: "25px" }}> Digital Clock</label>
              </td>
            </tr>
            <tr>
              <td>TOGGLE</td>
            </tr>
            <tr style={{ height: "200px" }}>
              <td>
                <ImageBackground source={{ url:'backgroundicon'}}/>
              </td>
            </tr>
          </table>
        </div>
      </form>
    );
  }
}

export default Clock;
