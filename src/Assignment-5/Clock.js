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

var date = new Date().toLocaleString().split(",")[1];
const styles = StyleSheet.create({
  container: {
    width: "170px",
    textAlign: "center",
    marginLeft: "60px",
    height: "180px",
    //backgroundColor: "rgba(0,0,0,0.1)"
    background: "transparent"
    //backgroundColor:"gray"
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
    backgroundColor: "rgba(0,0,0,0.09)"
    // background: "transparent"
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
              <td></td>
            </tr>
            <tr style={{ height: "300px" }}>
              <td>
                <ImageBackground
                  source={{
                    uri:
                      "https://uploads.codesandbox.io/uploads/user/927c06c2-eee9-402d-be30-5df3ec015b1b/NREN-images+(1).jpg"
                  }}
                  style={[styles.container, { background: "transparent" }]}
                >
                  <View style={styles.overlay}>
                    <Text style={styles.textStyle}>{date}</Text>
                  </View>
                  <View style={[styles.overlay, { height: "101.5px" }]}>
                    <Text style={styles.subText}>{this.props.Output}</Text>
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
