import React, { Component } from "react";
import icon from "../Assignment-5/images2.png";
import "../Assignment-5/MyStyleSheet.css";

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

                <label style={{ fontSize: "30px" }}> Digital Clock</label>
              </td>
            </tr>
            <tr></tr>
          </table>
        </div>
      </form>
    );
  }
}

export default Clock;
