import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import moment from 'moment'
import { weatherTypes } from "../utilities/weatherTypes";


const ListItem = (props) => {
  const { dt_text, min, max, condition } = props;
  const { item, date, temp, dateTextWrapper } = styles
  return (
    <View style={item}>
      <Feather name={weatherTypes[condition]?.icon} size={50} color={"white"} />
      <View style={dateTextWrapper}>
        <Text style={date}>{moment(dt_text).format('dddd')}</Text>
        <Text style={date}>{moment(dt_text).format('h:mm:ss a')}</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      borderWidth: 2,
      backgroundColor: "lightpink",
    },
    temp: {
      color: "white",
      fontSize: 20,
    },
    date: {
      color: "white",
      fontSize: 15,
    },
    dateTextWrapper: {
      flexDirection: "column"
    }
  });

export default ListItem
