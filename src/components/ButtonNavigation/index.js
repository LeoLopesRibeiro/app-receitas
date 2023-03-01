import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useEffect, useRef } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from "react-native-animatable";
function ButtonNavigation(props) {
  const { name, pageName, backColor, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.button, width: focused ? 100 : "16%" }}
    >
      <View
        style={{
          ...styles.view,
          backgroundColor: focused ? backColor : "#FFF",
        }}
      >
        <Icon name={name} size={24} color={focused ? "black" : "#909090"} />
        <View>
          {focused && <Text style={styles.text}>{pageName}</Text>}
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    height: "100%",

    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    borderRadius: 20,
    height: 50,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFF",
  },
});
export default ButtonNavigation;
