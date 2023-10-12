import React from "react"
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
  ImageBackground,
} from "react-native"
import ListItem from "../components/ListItem"


const UpcomingWeather = ({weatherData}) => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_text={item.dt_text}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  const { container, img} = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/upcoming-bg.jpg")}
        style={img}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_text}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "royalblue",
  },
  img: {
    flex: 1,
  },
});
export default UpcomingWeather;
