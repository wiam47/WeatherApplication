import React from "react";
import { View, Text } from "react-native";

const OurChild = (props) =>{
    const {message} = props
    return (
        <View>
            <Text>{ message }</Text>
        </View>
    )
}

export default OurChild


//in the app js we can call it by using 
//<OurChild message={'Hello'}/>