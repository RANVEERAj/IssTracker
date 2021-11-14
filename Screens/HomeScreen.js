import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.ndroidsafearea}>
          <ImageBackground
            source={require("../assets/bg_updates.jpg")}
            styles={styles.bgImage}
          >
            <View style={styles.titleBar}>
              <Text style={styles.titleText}>ISS Tracker App</Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>ISS Location</Text>
              <Image
                source={require("../assets/iss_icon.png")}
                styles={styles.image}
              />
              <Text style={styles.bgdigit}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Meteors</Text>
              <Image
                source={require("../assets/meteor_icon.png")}
                styles={styles.image}
              />
              <Text style={styles.bgdigit}>2</Text>
            </TouchableOpacity>
          </ImageBackground>
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1 },
  ndroidsafearea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 50,
    justifyContent: "center",
    alignItems: "center",
  },
  titleBar: { flex: 0.15, justifyContent: "center", alignItems: "center" },
  titleText: { textAlign: "center", fontSize: 40, fontWeight: "bold" },
  button: {
    flex: 0.25,
    borderRadius: 30,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
  },
  buttonText: { fontSize: 30, fontWeight: "bold", color: "grey" },

  bgImage: { flex: 1, resizeMode: "cover" },
  image: {
    position: "absolute",
    height: 200,
    width: 200,
    resizeMode: "contain",
  },
  bgdigit: {
      zIndex:-1,
      position:"absolute",
      fontSize:100

    },
});
