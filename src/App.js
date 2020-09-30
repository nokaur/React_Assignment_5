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
      alert("ON");
      this.setState({
        Output: "Off"
      });
    } else if (togStatus === "On") {
      alert("ON");
      var day = getDay();
      var date = getDate();
      var month = getmonth();
      var year = getyear();
      this.setState({
        Output: " " + date + " " + month + " " + year
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
