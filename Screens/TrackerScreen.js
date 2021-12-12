import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ImageBackground,
  StatusBar
} from "react-native";
import axios from "axios";
import MapView from "react-native-maps";

export default class TrackerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
    };
  }
  getIssLocation = () => {
    axios
      .get("https://api.wheretheiss.at/v1/satellites/25544")
      .then((response) => {
        this.setState({
          location: response.data,
        });
      });
  };
  componentDidMount() {
    this.getIssLocation();
  }

  render() {
    if (Object.keys(this.state.location).length === 0) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Loading</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
         
          <ImageBackground
            source={require("../assets/bg_image.png")}
            style={styles.background}
          >
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>ISS Location</Text>
            </View>
            <View style={styles.mapContainer}>
              <MapView
                style={styles.map}
                region={{
                    latitude:this.state.location.latitude,
                longitude:this.state.location.longitude,
                  latitudeDelta: 100,
                  longitudeDelta: 100,
                  
                }}
              ></MapView>
            </View>
          </ImageBackground>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: { flex: 1 },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  background: { flex: 1, resizeMode: "cover" },
  titleContainer: { flex: 0.1, justifyContent: "center", alignItems: "center" },
  titleText: { fontSize: 30, fontWeight: "bold", color: "white" },
  mapContainer: { flex: 0.6 },
  map: { width: "100%", height: "100%" },
});
