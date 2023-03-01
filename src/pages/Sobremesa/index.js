import { useEffect, useState, useRef } from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import CardReceita from "../../components/CardReceita";
import { receitas } from "../../receitas";
function Sobremesa({ navigation }) {

  return (
    <ScrollView>
      <View
        style={style.container}
      >
        <Text style={style.titulo}>Receitas</Text>
        <View style={style.receitas}>
          {receitas.sobremesa.map((receita, index) => {
            return (
              <CardReceita
                navigation={navigation}
                key={index}
                receita={receita}
                tipo={receita.tipo}
              />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFBFB",
    alignItems: "center",
    paddingTop: 20,
  },
  titulo: {
    width: 350,
    fontSize: 38,
  },
  receitas: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 90,
  },
});

export default Sobremesa;
