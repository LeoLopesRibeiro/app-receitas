import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useFonts, Poppins_600SemiBold, Poppins_400Regular } from "@expo-google-fonts/poppins";
receitaImage = {
  batata: require("../../../assets/batataFrita.jpg"),
  pao: require("../../../assets/paoCaseiro.jpg"),
  bolinho: require("../../../assets/bolinhoArroz.jpg"),
  salada: require("../../../assets/saladaCaesar.jpg"),
  cebola: require("../../../assets/cebolaEmpanada.jpg"),
  bifeParmegiana: require("../../../assets/bifeParmegiana.png"),
  rocambole: require("../../../assets/rocambole.jpg"),
  escondidinho: require("../../../assets/escondidinhoCarneSeca.jpg"),
  costelinha: require("../../../assets/costelinha.png"),
  yakissoba: require("../../../assets/yakissoba.jpg"),
  bombomTravessa: require("../../../assets/bombomTravessa.jpg"),
  danoninhoCaseiro: require("../../../assets/danoninhoCaseiro.jpg"),
  boloSorvete: require("../../../assets/boloSorvete.png"),
  paveChocolate: require("../../../assets/paveChocolate.png"),
  mousseLimao: require("../../../assets/mousseLimao.jpg"),
  crepioca: require("../../../assets/crepioca.jpg"),
  tabule: require("../../../assets/tabule.png"),
  saladaTomate: require("../../../assets/saladaTomate.jpg"),
  paoBatata: require("../../../assets/paoBatata.jpg"),
  paoSemGluten: require("../../../assets/paoSemGluten.jpg"),
};

export default function CardReceita({ receita, tipo, navigation }) {
  const tiposReceita = {
    entrada: "#FF4246",
    principal: "#FFB86E",
    sobremesa: "#F4CFE1",
    vegano: "#90EBBE",
  };
  function goToReceita(receitas) {
    navigation.navigate("Receita", { receitas: receitas });
  }

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={() => goToReceita(receita)}>
      <View style={style.viewReceita}>
        <Image style={style.imageReceita} source={receitaImage[receita.img]} />
        <View style={style.informacao}>
          <View
            style={[style.nomeTipo, { backgroundColor: tiposReceita[tipo] }]}
          >
            <Text style={style.nomeReceita}>{receita.nome}</Text>
            <Text style={style.tipoReceita}>{tipo}</Text>
          </View>
          <View style={style.porcaoTempo}>
            <View style={style.viewPorcao}>
              <Image
                style={style.imagemPorcao}
                source={require("../../../assets/talheres.png")}
              />
              <Text style={style.textoPorcaoTempo}>
                {receita.porcao} {receita.porcao != 1 ? "porções" : "porção"}
              </Text>
            </View>
            <View style={style.viewTempo}>
              <Image
                style={style.imagemTempo}
                source={require("../../../assets/relogio.png")}
              />
              <Text style={style.textoPorcaoTempo}>{receita.tempo}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  viewReceita: {
    marginTop: 25,
    marginBottom: 25,
    backgroundColor: "#FFF",
    width: 350,
    borderRadius: 20,
    elevation: 3,
  },
  imageReceita: {
    width: "100%",
    height: 210,
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  nomeTipo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: "center",
  },
  nomeReceita: {
    width: "60%",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Poppins_600SemiBold"
  },
  tipoReceita: {
    fontSize: 18,
    fontWeight: "600",
    textTransform: "uppercase",
    color: "#FFF",
    fontFamily: "Poppins_600SemiBold"
  },
  porcaoTempo: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 15,
    paddingBottom: 10,
  },
  viewPorcao: {
    alignItems: "center",
    width: "40%",
  },
  viewTempo: {
    alignItems: "center",
    width: "40%",
  },
  imagemPorcao: {
    width: 40,
    height: 40,
  },
  imagemTempo: {
    width: 40,
    height: 40,
  },
  textoPorcaoTempo: {
    fontFamily: "Poppins_400Regular"
  }
});
