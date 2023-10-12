import React from "react"
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native"
import moment from "moment";
import IconText from "../components/IconText"

const City = ({weatherData}) => {
  const {
    img,
    container,
    city,
    countryStyle,
    cityText,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout
  } = styles

  const { name, country, population, sunrise, sunset } = weatherData

  return (
    <SafeAreaView style={container}>
      <ImageBackground source={require("../../assets/city-bg.jpg")} style={img}>
        <Text style={[city, cityText]}>{name}</Text>
        <Text style={[countryStyle, cityText]}>{country}</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={"user"}
            iconColor={"red"}
            bodyText={`Population: ${population}`}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
        <IconText
            iconName={"sunrise"}
            iconColor={"white"}
            bodyText={moment(sunrise).format('h:mm:ss a')}
            bodyTextStyles={riseSetText}
          />
          <IconText
              iconName={"sunset"}
              iconColor={"white"}
              bodyText={moment(sunset).format('h:mm:ss a')}
              bodyTextStyles={riseSetText}
            />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  img: {
    flex: 1,
  },
  city: {
    fontSize: 40,
  },
  countryStyle: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default City;