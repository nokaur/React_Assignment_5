import React, { Component } from "react";
import "./styles.css";

import Clock from "./Assignment-5/Clock";
import "./Assignment-5/MyStyleSheet.css";
import Toggle from "./Assignment-5/Toggle";

class App extends Component {
  state = {
    Output: ""
  };

  tog = (togStatus) => {
    //alert("here");
    if (togStatus === "Off") {
      this.setState({
        Output: ""
      });
    } else if (togStatus === "On") {
      var today = new Date();
      var day = Date().split(" ")[0];
      var date = today.getDate();
      var month = today.toLocaleString("default", { month: "long" });
      var year = today.getFullYear();
      this.setState({
        Output: day + " " + date + " " + month + " " + year
        //Output:today
      });
    }
  };
  render() {
    return (
      <div className="App">
        <Clock Output={this.state.Output} />
        <Toggle tog={this.tog} />
      </div>
    );
  }
}
export default App;
