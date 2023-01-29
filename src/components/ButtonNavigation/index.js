import { View, StyleSheet, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
function ButtonNavigation({ size, color, name, pageName, backColor }) {
    return (
        <View style={{...styles.view, backgroundColor: backColor}}>
            <Icon name={name} size={size} color={color} />
            <Text style={styles.text}>{pageName}</Text>
        </View>
    )

}
const styles = StyleSheet.create({
    view: {
        borderRadius: 10,
        height: 50,
        width: 70,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#FFF",
    }
})
export default ButtonNavigation;