import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useEffect, useRef } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from "react-native-animatable";

function ButtonNavigation(props) {
  const { name, pageName, backColor, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;

  const refView = useRef(null);
  const refViewText = useRef(null);

  useEffect(() => {
    if (focused) {
      refView.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
      refViewText.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
    } else {
      refView.current.animate({ 0: { scale: 1 }, 1: { scale: 1 } });
      refViewText.current.animate({ 0: { scale: 1 }, 1: { scale: 1 } });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.button, width: focused ? 90 : "17%" }}
    >
      <Animatable.View
        style={{
          ...styles.view,
          backgroundColor: focused ? backColor : "#FFF",
        }}
        ref={refView}
        duration={300}
      >
        <Icon name={name} size={24} color={focused ? "black" : "#909090"} />
        <Animatable.View ref={refViewText} duration={400}>
          {focused && <Text style={styles.text}>{pageName}</Text>}
        </Animatable.View>
      </Animatable.View>
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
