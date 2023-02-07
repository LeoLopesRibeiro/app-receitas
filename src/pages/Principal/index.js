import { useEffect, useState, useRef } from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import CardReceita from "../../components/CardReceita";
import { receitas } from "../../receitas";
import * as Animatable from "react-native-animatable";

function Principal({ navigation }) {
  const [pageAnimation, setPageAnimation] = useState(null);
  const scrollRef = useRef();

  useEffect(() => {
    navigation.addListener("focus", (e) => {
      setPageAnimation("bounceInUp");
      scrollRef.current.scrollTo({ y: 0, animated: true });
    });

    navigation.addListener("blur", (e) => {
      setPageAnimation(null);
    });
  }, [navigation]);

  return (
    <ScrollView ref={scrollRef}>
      <Animatable.View
        style={style.container}
        animation={pageAnimation}
        duration={400}
      >
        <Text style={style.titulo}>Receitas</Text>
        <View style={style.receitas}>
          {receitas.principal.map((receita, index) => {
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
      </Animatable.View>
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

export default Principal;
