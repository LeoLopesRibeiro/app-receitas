import { ScrollView, StyleSheet, Text, View, StatusBar } from "react-native";
import MyStack from "./src/Routes/stack.routes";

export default function App() {
 return(
  <MyStack/>
 )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFBFB",
    alignItems: "center",
    justifyContent: "center",
  },
});
