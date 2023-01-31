import { StyleSheet, StatusBar } from "react-native";
import MyStack from "./src/Routes/stack.routes";

export default function App() {
  return (
    <>
      <MyStack />
      <StatusBar
        style="auto"
        barStyle="dark-content"
        backgroundColor="#FBFBFB"
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFBFB",
    alignItems: "center",
    justifyContent: "center",
  },
});
