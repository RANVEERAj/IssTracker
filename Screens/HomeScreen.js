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
import MeteorScreen from "./MeteorScreen";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
          <ImageBackground
            source={require("../assets/bg_updates.jpg")}
            style={styles.bgImage}
          >
            <View style={styles.titleBar}>
              <Text style={styles.titleText}>ISS Tracker App</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("Tracker")}}>
              <Text style={styles.buttonText}>ISS Location</Text>
              <Image
                source={require("../assets/iss_icon.png")}
                style={styles.image}
              />
              <Text style={styles.bgdigit}>1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("Meteor")}} >
              <Text style={styles.buttonText}>Meteors</Text>
              <Image
                source={require("../assets/meteor_icon.png")}
                style={styles.image}
              />
              <Text style={styles.bgdigit}>2</Text>
            </TouchableOpacity>
          </ImageBackground>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1 },
  ndroidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  titleBar: { flex: 0.15, justifyContent: "center", alignItems: "center" },
  titleText: { textAlign: "center", fontSize: 40, fontWeight: "bold" },
  button: {
    flex: 0.25,
    borderRadius: 30,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    backgroundColor:"white"
  },
  buttonText: { fontSize: 40, fontWeight: "bold", color: "grey" ,paddingLeft:30,marginTop:75},

  bgImage: { flex: 1, resizeMode: "cover" },
  image: {
    position: "absolute",
    height: 200,
    width: 200,
    resizeMode: "contain",
    top:-80,
    right:20
  },
  bgdigit: {
    zIndex: -1,
    position: "absolute",
    fontSize: 100,
    color:"rgba(183,183,183,0.5)",
    right:20,


  },
});
