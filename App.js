import { ScrollView, StyleSheet, Text, View, StatusBar } from "react-native";
import { receitas } from "./src/receitas";
import Receita from "./src/components/Receita";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        {receitas.sobremesa.map((receita, index) => {
          return <Receita key={index} receita={receita} tipo="sobremesa" />;
        })}

        <StatusBar style="auto" />
      </View>
    </ScrollView>
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
