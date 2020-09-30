import React, { Component } from "react";
import icon from "../Assignment-5/images2.png";
import backgroundicon from "../Assignment-5/images (1).jpg";
import "../Assignment-5/MyStyleSheet.css";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions
} from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "170px",
    textAlign: "center",
    marginLeft: "60px",
    height: "180px",
    backgroundColor: "rgba(0,0,0,0.1)"
  },
  textStyle: {
    fontSize: 18,
    color: "#00bfff",
    fontWeight: "bold",
    marginTop: 55
  },
  subText: {
    fontSize: 13,
    color: "#00bfff",
    fontWeight: "bold",
    marginTop: 10
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.1)"
  }
});

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
                color: "white",
                height: "50px"
              }}
            >
              <td>
                <img
                  src="https://uploads.codesandbox.io/uploads/user/927c06c2-eee9-402d-be30-5df3ec015b1b/Mba2-images2.png"
                  width="20px"
                  height="20px"
                />
                <label style={{ fontSize: "25px" }}> Digital Clock</label>
              </td>
            </tr>
            <tr>
              <td>{this.props.Output}</td>
            </tr>
            <tr style={{ height: "200px" }}>
              <td>
                <ImageBackground
                  source={{
                    uri:
                      "https://uploads.codesandbox.io/uploads/user/927c06c2-eee9-402d-be30-5df3ec015b1b/NREN-images+(1).jpg"
                  }}
                  style={styles.container}
                >
                  <View style={styles.overlay}>
                    <Text style={styles.textStyle}>CLOCK</Text>
                  </View>
                  <View style={[styles.overlay, { height: "101.5px" }]}>
                    <Text style={styles.subText}>DATE</Text>
                  </View>
                </ImageBackground>
              </td>
            </tr>
          </table>
        </div>
      </form>
    );
  }
}

export default Clock;
