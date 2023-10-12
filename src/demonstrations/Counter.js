import React, {useState, useEffect} from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Counter = () => {
    const [ count, setCount ] = useState(0)
    const [ newCount, setNewCount ] = useState(0)

    useEffect(() => {
        console.log(`Count changed`)
        return () => {
            console.log('useeffect')
        }
    },[count])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`count: ${count}`}</Text>
      <Button
        color={"red"}
        title="Increase the count"
        onPress={() => setCount(count + 1)}
      />
      <Button
        color={"green"}
        title="Decrease the count"
        onPress={() => setCount(count - 1 )}
      />
      <Button
        color={"red"}
        title="Increase the count"
        onPress={() => setNewCount(count + 1)}
      />
      <Button
        color={"green"}
        title="Decrease the count"
        onPress={() => setNewCount(count - 1 )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "orange",
        justifyContent: "center"
    },
    title: {
        alignSelf: "center",
        fontSize: 25,
        marginTop: 25
    }
});
export default Counter;
