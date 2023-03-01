import { useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CardReceita from "../../components/CardReceita";
import { receitas } from "../../receitas";

function Home({ navigation }) {
  const tipoReceitas = ["entrada", "principal", "sobremesa", "vegano"];
  const [receitasRandom, setReceitasRandom] = useState([]);

  useEffect(() => {
    function gerarReceitasRandom() {
      let randomsReceitas = [];

      while (true) {
        let numTipo = Math.floor(Math.random() * 4);
        let receitaNumRandom = Math.floor(Math.random() * 4);

        let randomReceita = receitas[tipoReceitas[numTipo]][receitaNumRandom];

        if (randomsReceitas.length === 0) {
          randomsReceitas.push(randomReceita);
        } else {
          let jaTem = false;

          randomsReceitas.forEach((receita) => {
            if (receita.nome === randomReceita.nome) {
              jaTem = true;
            }
          });

          if (!jaTem) {
            randomsReceitas.push(randomReceita);
          }
        }

        if (randomsReceitas.length === 5) {
          break;
        }
      }
      
      setReceitasRandom(randomsReceitas);
    }
    
    gerarReceitasRandom()
  }, [navigation]);


  return (
    <ScrollView>
      <View
        style={style.container}
      >
        <Text style={style.titulo}>Receitas</Text>
        <View style={style.receitas}>
          {receitasRandom.map((receita, index) => {
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

export default Home;
