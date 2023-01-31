import { View, ScrollView, StatusBar, StyleSheet } from "react-native";
import { receitas } from "../../receitas";
import CardReceita from "../../components/CardReceita";

function Home({navigation}) {
   
    return (
        <ScrollView>
            <View style={style.container}>
                {receitas.vegano.map((receita, index) => {
                    return <CardReceita navigation={navigation} key={index} receita={receita} tipo="vegano" />;
                })}

                <StatusBar style="auto" />
            </View>
        </ScrollView>
    );
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBFBFB",
        alignItems: "center",
        justifyContent: "center",
    }
})

export default Home;