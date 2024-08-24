import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.smallBoxes, styles.boxA]}>
        <Text>A</Text>
      </View>
      
      <View style={styles.boxContainer}>
        <View style={styles.smallBoxes}>
          <Text>B</Text>
        </View>
        <View style={styles.smallBoxes}>
          <Text>C</Text>
        </View>
        <View style={styles.smallBoxes}>
          <Text>D</Text>
        </View>
      </View>

      <View style={styles.boxContainer}>
        <View style={styles.smallBoxes}>
          <Text>E</Text>
        </View>
        <View style={styles.smallBoxes}>
          <Text>F</Text>
        </View>
        <View style={styles.smallBoxes}>
          <Text>G</Text>
        </View>
      </View>

      <View style={[styles.smallBoxes, styles.boxH]}>
        <Text>H</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
  },
  boxContainer: {
    flexDirection: "row",
  },
  boxA: {
    width: 375,
    height: 190,
   
  },
  smallBoxes: {
    width: 110,
    height: 180,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  boxH: {
    width: 375,
    height: 250,
    
  }
});
